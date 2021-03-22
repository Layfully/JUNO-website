import Input from "./Input";
import Submit from "./Submit";
import Text from "../Text";
import React from "react";
import sectionStyles from "../../styles/Home.module.css";
import SbEditable from "storyblok-react";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = (errors) => {
  let valid = true;
  for (const error of Object.values(errors)) {
    if (error.active || !error.interacted) {
      valid = false;
    }
  }
  return valid;
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      message: null,
      errors: {
        name: {
          active: false,
          interacted: false,
        },
        email: {
          active: false,
          interacted: false,
        },
        message: {
          active: false,
          interacted: false,
        },
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name.active = value.length === 0;
        errors.name.interacted = true;
        break;
      case "email":
        errors.email.active = !validEmailRegex.test(value);
        errors.email.interacted = true;
        break;
      case "message":
        errors.message.active = value.length === 0;
        errors.message.interacted = true;
        break;
      default:
        break;
    }

    this.setState({ errors, errors });
  };

  render() {
    const isValid = validateForm(this.state.errors);
    return (
      <SbEditable content={this.props.blok}>
        <section id='Contact' className={sectionStyles.section}>
          <div className='bg-customGray w-full md:w-3/5 xl:w-1/2 rounded-3xl md:rounded-large mx-auto'>
            <Text
              size='h2'
              color='true-orange'
              custom='font-bold text-center pt-10 pb-6'>
              {this.props.blok.title}
            </Text>
            <form
              action='https://formspree.io/f/mpzobgvw'
              method='POST'
              className='flex flex-col items-center space-y-4'
              noValidate>
              {this.props.blok.field_data.map((field) => (
                <Input
                  key={field._uid}
                  name={field.name}
                  type={field.type}
                  label={field.label}
                  error={{
                    ...{ message: field.validation_error },
                    ...this.state.errors[field.name],
                  }}
                  onChange={this.handleChange}
                />
              ))}
              <input
                type='hidden'
                name='_subject'
                value={this.props.blok.subject}
              />
              <input type='text' name='_gotcha' className='hidden' />
              <Submit value={this.props.blok.submit_text} disabled={!isValid} />
            </form>
          </div>
        </section>
      </SbEditable>
    );
  }
}

export default ContactForm;
