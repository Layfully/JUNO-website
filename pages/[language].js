import StoryblokService from "../utils/storyblok-service";
import Page from "../components/Page";
import React from "react";
import MetaHead from "../components/MetaHead";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: props.story,
      language: props.language,
    };
  }

  componentDidMount() {
    StoryblokService.initEditor(this);
  }

  render() {
    return (
      <>
        <MetaHead
          blok={this.state.story.content.meta[0]}
          currentLanguage={this.state.language}
        />
        <Page
          content={this.state.story.content}
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

  const language = context.params.language;
  const pageResult = await StoryblokService.get(
    `cdn/stories/${language}/juno`,
    params
  );

  const langaugeResult = await StoryblokService.get(`cdn/spaces/me`);
  langaugeResult.data.space.language_codes.push("en");

  return {
    props: {
      language: language,
      languageList: langaugeResult.data.space.language_codes,
      story: pageResult.data ? pageResult.data.story : false,
    },
  };
}

export async function getStaticPaths() {
  let langaugeResult = await StoryblokService.get(`cdn/spaces/me`);

  const paths = langaugeResult.data.space.language_codes.map((language) => ({
    params: { language: language },
  }));

  return {
    paths,
    fallback: false,
  };
}
