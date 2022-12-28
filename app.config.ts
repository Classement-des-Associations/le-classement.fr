export default defineAppConfig({
  showActionButton: false,
  actionButton: {
    to: "",
    text: "",
  },
  nuxtIcon: {
    aliases: {
      classement: "fluent-emoji:sparkles",
      "tour-asso": "fluent-emoji:telescope",
      concours: "fluent-emoji:trophy",
      discovery: "fluent-emoji:rocket",
      "ceremonie-finale": "fluent-emoji:party-popper",
    },
  },
  socials: [
    {
      name: "Instagram",
      to: "https://www.instagram.com/leclassement/",
      icon: "mdi:instagram",
    },
    {
      name: "LinkedIn",
      to: "https://www.linkedin.com/company/le-classement/",
      icon: "mdi:linkedin",
    },
    {
      name: "Twitter",
      to: "https://twitter.com/leclassement",
      icon: "mdi:twitter",
    },
  ],
});
