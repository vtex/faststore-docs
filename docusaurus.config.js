// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import tailwindPlugin from "./plugins/tailwind-config.cjs"; // add this

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "FastStore",
  tagline: "Documentation Portal",
  favicon: "img/favicon.ico",
  // Set the production url of your site here
  url: "https://v1.faststore.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "vtex", // Usually your GitHub org/user name.
  projectName: "faststore", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [ tailwindPlugin,
    [
      'docusaurus-plugin-react-docgen-typescript',
      {
        // pass in a single string or an array of strings
        src: [
          './node_modules/@faststore/ui/src/**/*.tsx',
          './node_modules/@faststore/ui/src/**/*.test.*',
          './node_modules/@faststore/ui/src/**/*.stories.*',
        ],
        parserOptions: {
          // pass parserOptions to react-docgen-typescript
          // here is a good starting point which filters all .tsx files
          propFilter: (prop, component) => {
            if (prop.declarations[0]) {
              return prop.declarations[0].fileName.endsWith('.tsx')
            }

            return false
          },
        },
      },
    ],
   ],
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/vtex/faststore-docs/edit/main/docs",
        },
        blog: {
          routeBasePath: '/releases',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Last releases',
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/vtex/faststore-docs/edit/main/docs",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/logo.svg",
      navbar: {
        title: "FastStore",
        logo: {
          alt: "VTEX",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "/docs",
            label: "Documentation",
            position: "left",
          },
          {
            href: "/faq",
            label: "FAQ",
            position: "right",
            target: "_self",
            className: "FAQbar",
          },
          {
            label: "Release Notes",
            to: "releases",
            position: "right",
          },
          {
            href: "https://github.com/vtex/faststore",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        logo: {
          alt: "VTEX Logo",
          src: "img/white-vtex.svg",
          href: "https://vtex.com",
        },
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Quickstart",
                to: "quickstart",
              },
              {
                label: "References",
                to: "/reference",
              },
              {
                label: "Concepts",
                to: "/conceptual-guides",
              },
              {
                label: "Tutorials",
                to: "/tutorials/gatsby-overview",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Starters",
                to: "/starters",
              },
              {
                label: "Frequently asked questions",
                to: "/faq",
              },
              {
                label: "Release Notes",
                to: "/releases",
              },
              {
                label: "VTEX Community",
                href: "https://community.vtex.com/",
              },
              {
                label: "GitHub",
                href: "https://github.com/vtex/faststore",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FastStore Docs, Inc. Built with Docusaurus.`,
      },
      announcementBar: {
        id: 'new_portal',
        content: 
        '📢 FastStore 1.0 is no longer receiving updates. For the FastStore latest version, visit the <a style="color:var(--ifm-link-color)" href="https://developers.vtex.com/docs/guides/faststore/docs-what-is-faststore">Developer Portal</a>.',
        textColor: 'var(--ifm-color-details)',
        backgroundColor: 'var(--ifm-tag-highlight)',
        isCloseable: false,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
