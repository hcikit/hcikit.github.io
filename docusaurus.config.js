const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "HCI Kit",
  tagline: "Experiments made easy.",
  url: "https://hcikit.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "hcikit", // Usually your GitHub org/user name.
  projectName: "HCI Kit", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "HCI Kit",
      // TODO:
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "getting-started/getting-started",
          position: "left",
          label: "Getting Started",
        },
        {
          href: "https://github.com/hcikit/hcikit",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "HCI Kit",
          items: [
            {
              label: "Getting Started",
              to: "docs/getting-started",
            },
          ],
        },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus",
        //     },
        //     {
        //       label: "Twitter",
        //       href: "https://twitter.com/docusaurus",
        //     },
        //   ],
        // },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/hcikit/hcikit",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Blaine Lewis, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
