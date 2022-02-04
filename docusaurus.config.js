// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'ELAINA',
  url: 'http://192.168.1.13:3000',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/bot1.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  
  presets: [
    
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia:{
        apiKey: 'c67175fc9b9bfa054cc4969b7873c05f',
        indexName: 'elaina-webs',
        contextualSearch: true,
        placeholder: 'Search Elaina information',
        appId: 'AMP95MHK6X'
      },
      navbar: {
        title: 'ELAINA',
        logo: {
          alt: 'Elaina logo',
          src: 'img/bot1.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'about',
            position: 'left',
            label: 'Commands',
          },
          {to: '/blog', label: 'Announcements', position: 'left'},
          {
            href: 'https://github.com/elainadev',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/W6FfCHPNGq',
            label: 'Discord',
            position: 'right',
          },
          
        ],
      },
      
      prism: {
        theme: darkCodeTheme,
        lightTheme: lightCodeTheme,
      },

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        switchConfig: {
          darkIcon: '🌙',
          darkIconStyle: {
            marginLeft: '2px',
          },
          // Unicode icons such as '\u2600' will work
          // Unicode with 5 chars require brackets: '\u{1F602}'
          lightIcon: '😊',
          lightIconStyle: {
            marginLeft: '1px',
          },
        },
      },
    }),

   
};

module.exports = config;

