import * as React from "react";
import { graphql, useStaticQuery, type HeadFC } from "gatsby";

const pageStyles = `
bg-primary-100
box-border
`;

export const Head: HeadFC = (): React.JSX.Element => {
    const { title, description, image, siteUrl } = useSiteMetadata();
    return (
        <>
            <meta charSet="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#f9eaf7" />

            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            <link rel="shortcut icon" href={image} type="image/x-icon" />

            <body className={pageStyles} />
        </>
    );
};

export const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    image
                    siteUrl
                }
            }
        }
    `);

    return data.site.siteMetadata;
};
