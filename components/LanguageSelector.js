import ReactCountryFlag from "react-country-flag";
import React from "react";
import Text from "../components/Text";

class LanguageSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      supportsEmoji: true,
    };
  }

  componentDidMount() {
    this.setState({ supportsEmoji: this.supportsFlagEmoji(document) });
  }

  supportsFlagEmoji = () => {
    if (typeof window !== undefined) {
      var canvas = document.createElement("canvas");
      canvas.height = 10;
      canvas.width = canvas.height * 2;
      var ctx = canvas.getContext("2d");
      ctx.font = canvas.height + "px Arial";
      ctx.fillText("🇬🇧", 0, canvas.height);
      var data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      var i = 0;
      while (i < data.length) {
        if (data[i] !== data[i + 1] || data[i] !== data[i + 2]) {
          canvas.remove();
          return true;
        }
        i += 4;
      }
      canvas.remove();
      return false;
    }
  };

  render() {
    return (
      <div className='inline-block rounded-lg z-10 space-x-5 my-10'>
        {this.props.languageList &&
          this.props.languageList.map((language, index) => (
            <Text
              key={index}
              hover
              custom={`inline ${
                this.props.language === language ||
                (this.props.language === null && language === "en")
                  ? "text-opacity-100"
                  : "text-opacity-50"
              }`}>
              {this.state.supportsEmoji ? (
                <a href={language === "en" ? "/" : `/${language}`}>
                  <ReactCountryFlag
                    countryCode={language === "en" ? "us" : language}
                    alt={`${language} - Flag`}
                    className='pr-2'
                    style={{ verticalAlign: "baseline" }}
                  />
                  {language.toUpperCase()}
                </a>
              ) : (
                <a
                  href={language === "en" ? "/" : `/${language}`}
                  className='inline-flex items-center'>
                  <ReactCountryFlag
                    countryCode={language === "en" ? "us" : language}
                    className='mr-2'
                    cdnUrl='https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/'
                    alt={`${language} - Flag`}
                    svg
                  />
                  {language.toUpperCase()}
                </a>
              )}
            </Text>
          ))}
      </div>
    );
  }
}

export default LanguageSelector;
