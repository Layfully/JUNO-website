import ParticlesWrapper from "../components/ParticlesWrapper";
import StoryblokService from "../utils/storyblok-service";
import Page from "../components/Page";
import React from "react";
import MetaHead from "../components/MetaHead";
import { withRouter } from "next/router";

export default withRouter(
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        story: props.res.data.story,
        language: null,
        host: props.host,
      };
    }

    static async getInitialProps({ query, req }) {
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
        host: req.headers.host,
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
            currentLanguage={this.state.language}
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
);
