import ParticlesWrapper from "../components/ParticlesWrapper";
import StoryblokService from "../utils/storyblok-service";
import Page from "../components/Page";
import React from "react";
import MetaHead from "../components/MetaHead";
import FourOhFour from "./404";
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: props.story,
      language: props.language,
    };
  }
  static async getInitialProps(context) {
    StoryblokService.setQuery(context.query);
    let language = context.query.language;
    let insertLanguage = language !== undefined ? `/${language}` : "";
    let languagesResult = await StoryblokService.get(`cdn/spaces/me`);
    languagesResult.data.space.language_codes.push("en");

    try {
      let pageResult = await StoryblokService.get(
        `cdn/stories${insertLanguage}/juno`
      );

      return {
        story: pageResult.data.story,
        language,
        languageList: languagesResult.data.space.language_codes,
      };
    } catch (error) {
      if (context.res) {
        context.res.statusCode = error.response.status;
      }

      return {
        error: { statusCode: error.response.status },
        languageList: languagesResult.data.space.language_codes,
      };
    }
  }

  componentDidMount() {
    StoryblokService.initEditor(this);
  }

  render() {
    return (
      <>
        {this.props.error !== undefined ? (
          <FourOhFour languageList={this.props.languageList} />
        ) : (
          <>
            <MetaHead
              blok={this.state.story.content.meta[0]}
              currentLanguage={this.state.language}
            />
            <ParticlesWrapper />
            <Page
              content={this.state.story.content}
              languageList={this.props.languageList}
              language={this.state.language}></Page>
          </>
        )}
      </>
    );
  }
}
