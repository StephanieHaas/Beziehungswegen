import * as React from "react";
import { type HeadFC } from "gatsby";

const pageStyles = `
bg-primary-100
box-border
`;

export const Head: HeadFC = () => (
    <>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#f9eaf7" />

        <title>beziehungswegen - Stephanie Haas - Pädagogische Beratung und Begleitung</title>
        <meta name="title" content="beziehungswegen - Stephanie Haas - Pädagogische Beratung und Begleitung" />
        <meta
            name="description"
            content="Systemische Einzel-, Paar- und Familienberatung Pädagogische Beratung und Begleitung"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://beziehungswegen.de/" />
        <meta property="og:title" content="beziehungswegen - Stephanie Haas - Pädagogische Beratung und Begleitung" />
        <meta
            property="og:description"
            content="Systemische Einzel-, Paar- und Familienberatung Pädagogische Beratung und Begleitung"
        />

        <link rel="shortcut icon" href={"../images/logo.svg"} type="image/x-icon" />

        <body className={pageStyles} />
    </>
);
