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

export async function getStaticProps(context) {
  const params = {
    version: "published",
  };

  if (context.preview) {
    params.version = "draft";
    params.cv = Date.now();
  }

  const pageResult = await StoryblokService.get(`cdn/stories/juno`, params);
  const languagesResult = await StoryblokService.get(`cdn/spaces/me`);
  const defaultLanguage = "en";
  languagesResult.data.space.language_codes.push(defaultLanguage);

  return {
    props: {
      res: pageResult,
      language: defaultLanguage,
      languageList: languagesResult.data.space.language_codes,
    },
  };
}
