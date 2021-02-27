import Head from "next/head";

const MetaHead = ({ blok, currentLanguage }) => (
  <Head>
    <title>{blok.title}</title>
    <link rel='icon' href={blok.favicon.filename} />
    <link rel='canonical' href={blok.canonical.url} />
    {blok.language_list.map((language) => (
      <link
        rel='alternate'
        hrefLang={language.short_code}
        href={language.href.url}
        key={`${language._uid}-short`}
      />
    ))}
    <link rel='alternate' hreflang='x-default' href={blok.x_default.url} />
    <meta name='author' content={blok.author} />
    <meta name='keywords' content={blok.keywords} />
    <meta name='description' content={blok.description} />
    <meta property='og:title' content={blok.open_graph[0].title} />
    <meta property='og:url' content={blok.open_graph[0].url.url} />
    <meta property='og:type' content={blok.open_graph[0].type} />
    <meta property='og:description' content={blok.open_graph[0].description} />
    <meta property='og:image' content={blok.open_graph[0].image.filename} />
    <meta
      property='og:image:secure_url'
      content={blok.open_graph[0].image.filename}
    />
    <meta property='og:image:alt' content={blok.open_graph[0].image.alt} />
    <meta property='og:site_name' content={blok.open_graph[0].site_name} />
    <meta property='og:video' content={blok.open_graph[0].video.filename} />
    <meta
      property='og:video:secure_url'
      content={blok.open_graph[0].video.filename}
    />

    <meta property='og:video:type' content='video/mp4' />
    <meta property='og:video:width' content={blok.open_graph[0].video_width} />
    <meta
      property='og:video:height'
      content={blok.open_graph[0].video_height}
    />

    {blok.language_list.map((language) =>
      language.short_code === currentLanguage ||
      (language.short_code === "en" && currentLanguage === null) ? (
        <meta
          property='og:locale'
          content={language.full_code}
          key={language._uid}
        />
      ) : (
        <meta
          property='og:locale:alternate'
          content={language.full_code}
          key={language._uid}
        />
      )
    )}

    <meta name='twitter:card' content={blok.twitter[0].type} />
    <meta name='twitter:title' content={blok.twitter[0].title} />
    <meta name='twitter:description' content={blok.twitter[0].description} />
    <meta name='twitter:image' content={blok.twitter[0].image.filename} />
    <meta name='twitter:image:alt' content={blok.twitter[0].image.alt} />
    <meta name='twitter:site' content={blok.twitter[0].site} />
    <meta name='twitter:creator' content={blok.twitter[0].creator} />
    {blok.twitter[0].video.url && blok.twitter[0].type === "player" ? (
      <>
        <meta name='twitter:player' content={blok.twitter[0].video.url} />
        <meta
          name='twitter:player:width'
          content={blok.twitter[0].video_width}
        />
        <meta
          name='twitter:player:height'
          content={blok.twitter[0].video_height}
        />
      </>
    ) : (
      ""
    )}
  </Head>
);

export default MetaHead;
