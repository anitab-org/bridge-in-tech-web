module.exports = {
    title: 'Bridge In Tech Web Docs',
    tagline: 'Documentation for Bridge In Tech Web',
    url: 'https://bridge-in-tech-web.surge.sh/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.png',
    organizationName: 'anitab-org',
    projectName: 'bridge-in-tech-web',
    themeConfig: {
        announcementBar: {
            id: 'support_us',
            content:
                '⭐️ If you like Bridge-In-Tech-Web, give it a star on <a href="https://github.com/anitab-org/bridge-in-tech-web" rel="noopener noreferrer" target="_blank">GitHub!</a> ⭐️',
            backgroundColor: '#fafbfc',
            textColor: '#091E42',
        },
        colorMode: {
            defaultMode: "light",
        },
        navbar: {
            title: "Bridge-In-Tech-Web Docs",
            hideOnScroll: true,
            logo: {
                alt: "AnitaB.org Logo",
                src: "img/logo.png",
            },
            items: [
                {
                    href: "https://anitab.org/",
                    label: "AnitaB.org",
                    position: "right",
                },
                {
                    href: "https://anitab-org.zulipchat.com/#narrow/stream/237630-bridge-in-tech",
                    label: "Zulip",
                    position: "right",
                },
                {
                    href: "https://github.com/anitab-org/bridge-in-tech-web",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            copyright: `
                        <div>
                            <a href="https://www.facebook.com/AnitaB.0rg/" rel="noopener noreferrer" target="_blank"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
                            <a href="https://twitter.com/anitab_org" rel="noopener noreferrer" target="_blank"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
                            <a href="https://www.linkedin.com/company/anitab-org/" rel="noopener noreferrer" target="_blank"><i id="fa fa-linkedin-square fa-3x social" class="fa fa-linkedin-square fa-3x social"></i></a>
                            <a href="https://www.instagram.com/anitab_org/" rel="noopener noreferrer" target="_blank"><i id="fa fa-instagram-square fa-2x social" class="fa fa-instagram fa-3x social"></i></a>
                        </div>
                        <b>Copyright © ${new Date().getFullYear()} AnitaB.org</b>
                        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
                    `,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl:
                        'https://github.com/anitab-org/bridge-in-tech-web/tree/develop/docs',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
