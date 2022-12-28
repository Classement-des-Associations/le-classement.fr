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
      "rendu-ecrit": "fluent-emoji:framed-picture",
      "rendu-video": "fluent-emoji:video-camera",
      vote: "fluent-emoji:ballot-box-with-ballot",
      pitch: "fluent-emoji:microphone",
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
