import Input from './Input'
import Submit from './Submit'
import Text from '../Text'
import React from 'react'

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
    let valid = true;
    for (const error of Object.values(errors)) {
        if (error.active || !error.interacted) {
            valid = false
        }
    }
    return valid;
}


class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            email: null,
            message: null,
            errors: {
                name: {
                    message: 'Name is required',
                    active: false,
                    interacted: false
                },
                email: {
                    message: 'Please enter valid email address.',
                    active: false,
                    interacted: false
                },
                message: {
                    message: 'Message is required',
                    active: false,
                    interacted: false
                }
            }
        }
    }

    handleChange = (event) => {
        event.preventDefault()
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'name':
                errors.name.active = value.length === 0;
                errors.name.interacted = true
                break;
            case 'email':
                errors.email.active = !validEmailRegex.test(value);
                errors.email.interacted = true
                break;
            case 'message':
                errors.message.active = value.length === 0;
                errors.message.interacted = true
                break;
            default:
                break;
        }

        this.setState({ errors, errors })
    }

    render() {
        const isValid = validateForm(this.state.errors)
        return (
            <section id="Contact" className="bg-customGray w-full md:w-3/5 xl:w-1/2 rounded-3xl md:rounded-large mx-auto">
                <Text size="h2" color="true-orange" custom="font-bold text-center py-10">Contact us</Text>
                <form action="https://formspree.io/f/mpzobgvw" method="POST" className="flex flex-col items-center space-y-6" noValidate>
                    <Input name="name" type="text" label="Your name" error={this.state.errors.name} onChange={this.handleChange} />
                    <Input name="email" type="email" label="Email" error={this.state.errors.email} onChange={this.handleChange} />
                    <Input name="message" type="textarea" label="Tell us something about you..." error={this.state.errors.message} onChange={this.handleChange} />
                    <input type="hidden" name="_subject" value={this.props.subject} />
                    <input type="text" name="_gotcha" className="hidden" />
                    <Submit value="Send" disabled={!isValid} />
                </form>
            </section>
        )
    }

}

export default ContactForm