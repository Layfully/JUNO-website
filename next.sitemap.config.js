module.exports = {
  siteUrl: "http://localhost:3000/",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"],
  changefreq: "monthly",
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: "" }],
    additionalSitemaps: ["http://localhost:3000/server-sitemap.xml"],
  },
};
