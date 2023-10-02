const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Callum Stew",
    image: "/CallumStew.jpg",
    role: "Student",
    bio: "CSE student at Warwick University.",
    email: "callum.d.stew@gmail.com",
    linkedin: "callum-Stew",
    github: "callum-stew",
    instagram: "",
  },
  projects: [
    {
      name: `Turing Pi Resources`,
      href: "https://github.com/callum-stew/TuringPi",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Callums Blog",
    description: "Welcome to my blog!",
  },

  // CONFIG configration (required)
  link: "https://callum-stew.vercel.app/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
