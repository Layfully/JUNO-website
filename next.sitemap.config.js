module.exports = {
  siteUrl: "https://juno.physics.indiana.edu/",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"],
  changefreq: "monthly",
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: "" }],
    additionalSitemaps: ["https://juno.physics.indiana.edu/server-sitemap.xml"],
  },
};
