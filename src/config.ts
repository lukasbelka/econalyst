import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://www.econalyst.de/", // replace this with your deployed domain
  author: "Lukas Belka",
  profile: "https://www.lukasbelka.com/",
  desc: "Mein Blog über Wirtschaft, Business und Technologie",
  title: "Econalyst",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
};

export const LOCALE = {
  lang: "de", 
  langTag: ["de-DE"], 
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [];
