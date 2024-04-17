import type { GatsbyConfig } from "gatsby";
import * as dotenv from "dotenv";

dotenv.config();

const config: GatsbyConfig = {
    siteMetadata: {
        title: `beziehungswegen`,
        siteUrl: `https://beziehungswegen.de/`,
        description: "Systemische Einzel-, Paar- und Familienberatung Pädagogische Beratung und Begleitung",
        image: "/icon.png",
    },
    pathPrefix: process.env.PATH_PREFIX,
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    trailingSlash: "never",
    plugins: [
        "gatsby-plugin-postcss",
        // "gatsby-plugin-google-gtag",
        "gatsby-plugin-image",
        {
            resolve: "gatsby-plugin-sharp",
            options: {
                // Defaults used for gatsbyImageData and StaticImage
                defaults: {
                    quality: 100,
                    formats: ["auto", "webp"],
                    placeholder: "blurred",
                    blurredOptions: {
                        width: 80,
                    },
                    webpOptions: {
                        quality: 100,
                        alphaQuality: 100,
                        lossless: true,
                        smartSubsample: true,
                    },
                },
                // Set to false to allow builds to continue on image errors
                failOnError: true,
            },
        },
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-google-docs",
            options: {
                folder: process.env.GOOGLE_FOLDER_ID,
                createPages: true,
            },
        },
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                gatsbyRemarkPlugins: [],
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 590,
                            quality: 70,
                            linkImagesToOriginal: false,
                        },
                    },
                    "gatsby-remark-gifs",
                ],
            },
        },
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                excludes: ["/404"],
                output: "/",
            },
        },
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                host: "https://beziehungswegen.de",
                sitemap: "https://beziehungswegen.de/sitemap.xml",
                resolveEnv: () => process.env.GATSBY_ENV,
                env: {
                    development: {
                        policy: [{ userAgent: "*", disallow: ["/"] }],
                    },
                    production: {
                        policy: [{ userAgent: "*", allow: "/" }],
                    },
                },
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "beziehungswegen",
                short_name: "beziehungswegen",
                start_url: process.env.PATH_PREFIX,
                lang: "de",
                background_color: "#f9eaf7",
                theme_color: "#f9eaf7",
                display: "standalone",
                icon: "static/icon.png",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`,
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "assets",
                path: `${__dirname}/src/assets`,
            },
        },
    ],
};

// eslint-disable-next-line import/no-default-export
export default config;
