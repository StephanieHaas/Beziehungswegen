import type { GatsbyConfig } from "gatsby";
import * as dotenv from "dotenv";

dotenv.config();

const config: GatsbyConfig = {
    siteMetadata: {
        title: `beziehungswegen`,
        siteUrl: `https://beziehungswegen.de/`,
        description: "Systemische Einzel-, Paar- und Familienberatung Pädagogische Beratung und Begleitung",
        image: "/images/icon.png",
    },
    pathPrefix: "/preview",
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    trailingSlash: "never",
    plugins: [
        "gatsby-plugin-postcss",
        // "gatsby-plugin-google-gtag",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        // "gatsby-plugin-sitemap",
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
                gatsbyRemarkPlugins: [
                    // You need some transformations?
                    // Checkout https://www.gatsbyjs.com/plugins/?=gatsby-remark
                    // And pick-up some plugins
                ],
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: ["gatsby-remark-images", "gatsby-remark-gifs"],
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
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
