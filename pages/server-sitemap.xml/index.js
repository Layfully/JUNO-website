import { getServerSideSitemap } from "next-sitemap";
import StoryblokService from "../../utils/storyblok-service";

export const getServerSideProps = async (ctx) => {
  const changefrequency = "monthly";
  const result = await StoryblokService.get(`cdn/stories/juno`);
  const hostname = result.data.story.content.meta[0].x_default.url;

  let fields = await StoryblokService.get(`cdn/spaces/me`);
  fields = fields.data.space.language_codes;

  fields = fields.map((language) => {
    return {
      loc: hostname + language,
      lastmod: new Date().toISOString(),
      changefreq: changefrequency,
    };
  });

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
const named = () => {};
export default named;
