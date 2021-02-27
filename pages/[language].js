import ParticlesWrapper from "../components/ParticlesWrapper";
import StoryblokService from "../utils/storyblok-service";
import Page from "../components/Page";
import React from "react";
import MetaHead from "../components/MetaHead";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: props.res.data.story,
      language: null,
    };
  }
  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query);
    let language = query.language;
    let insertLanguage = language !== undefined ? `/${language}` : "";
    let pageResult = await StoryblokService.get(
      `cdn/stories${insertLanguage}/juno`
    );

    let languagesResult = await StoryblokService.get(`cdn/spaces/me`);

    languagesResult.data.space.language_codes.push("en");

    return {
      res: pageResult,
      language,
      languageList: languagesResult.data.space.language_codes,
    };
  }

  componentDidMount() {
    StoryblokService.initEditor(this);
  }

  render() {
    const contentOfStory = this.state.story.content;

    return (
      <>
        <MetaHead
          blok={contentOfStory.meta[0]}
          currentLanguage={this.props.language}
        />
        <ParticlesWrapper />
        <Page
          content={contentOfStory}
          languageList={this.props.languageList}
          language={this.state.language}></Page>
      </>
    );
  }
}
