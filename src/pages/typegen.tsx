import * as React from "react";
import { graphql, PageProps } from "gatsby";

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const TypegenPage = ({ data }: PageProps) => {
    return (
        <main style={pageStyles}>
            <p>Site title: TODO</p>
            <hr />
            <p>Query Result:</p>
            <pre>
                <code>{JSON.stringify(data, null, 2)}</code>
            </pre>
        </main>
    );
};

export default TypegenPage;

export const query = graphql`
    query TypegenPage {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
