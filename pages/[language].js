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
      language: props.language,
    };
  }

  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query);
    let language = query.language || "en";
    let insertLanguage = language !== "en" ? `/${language}` : "";
    let pageResult = await StoryblokService.get(
      `cdn/stories${insertLanguage}/juno`,
      {
        resolve_relations: "featured-posts.posts",
      }
    );

    let languagesResult = await StoryblokService.get(`cdn/spaces/me`);

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
          languageList={this.props.languageList}
        />
        <ParticlesWrapper />
        <Page
          content={contentOfStory}
          language={this.state.language}
          languageList={this.props.languageList}></Page>
      </>
    );
  }
}
