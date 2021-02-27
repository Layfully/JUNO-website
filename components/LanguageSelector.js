import ReactCountryFlag from "react-country-flag";
import React from "react";
import Text from "../components/Text";

class LanguageSelector extends React.Component {
  render() {
    return (
      <div className='inline-block rounded-lg z-10 space-x-5 my-10'>
        {this.props.languageList.map((language, index) => (
          <Text
            key={index}
            hover
            custom={`inline ${
              this.props.language === language ||
              (this.props.language === null && language === "en")
                ? "text-opacity-100"
                : "text-opacity-50"
            }`}>
            <a href={language === "en" ? "/" : `/${language}`}>
              <ReactCountryFlag
                countryCode={language === "en" ? "us" : language}
                className='pr-2'
              />
              {language.toUpperCase()}
            </a>
          </Text>
        ))}
      </div>
    );
  }
}

export default LanguageSelector;
/*const CustomOption = (props) => (
  <components.Option {...props}>
    <ReactCountryFlag countryCode={props.value} /> {props.label}
  </components.Option>
);

const CustomValue = (props) => (
  <components.SingleValue {...props}>
    <ReactCountryFlag countryCode={props.data.value} /> {props.data.label}
  </components.SingleValue>
);

        <Select
          className='mt-2'
          isSearchable={false}
          placeholder='Language'
          value={this.state.selectedLanguage}
          styles={{
            control: (styles, state) => ({
              ...styles,
              backgroundColor: "transparent",
              boxShadow: state.isFocused ? 0 : 0,
              transition: "color 500ms",
              fontSize: "1.25rem",
              border: "none",
              textAlign: "right",
              color: "rgba(255,255,255, 0.5)",
              "&:hover": {
                color: "white",
              },
            }),
            valueContainer: (styles) => ({
              ...styles,
              paddingTop: 0,
              paddingBottom: 0,
              justifyContent: "center",
            }),
            singleValue: (styles) => ({
              ...styles,
              color: "inherit",
              width: "100%",
              paddingRight: "0.5rem",
              margin: "0",
            }),
            menuList: (styles) => ({
              ...styles,
            }),
            menu: (styles) => ({
              ...styles,
              backgroundColor: "transparent",
            }),
            option: (styles) => ({
              ...styles,
              color: "rgba(255, 255, 255, 0.5)",
              backgroundColor: "transparent",
              transition: "color 500ms",
              fontWeight: "bold",
              textAlign: "right",
              ":hover": {
                color: "white",
              },
            }),
            dropdownIndicator: (styles) => ({
              display: "none",
            }),
            indicatorSeparator: (styles) => ({
              display: "none",
            }),
          }}
          components={{ Option: CustomOption, SingleValue: CustomValue }}
          options={this.state.options}
          onChange={this.changeLanguage}
        />
        */
