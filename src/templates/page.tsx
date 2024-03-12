import { Link, PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const TemplatePage: React.FC<PageProps<Queries.PageQuery>> = ({ data }) => {
    console.log(data);
    const page = data.page;
    return (
        <>
            {/* <Link to="/">
                <button>{"Home"}</button>
            </Link> */}
            <h1 className="font-autography">{page?.name}</h1>
            {/*
        To add a cover:
        Add an image in your Google Doc first page header
        https://support.google.com/docs/answer/86629
      */}
            {/* {cover && <GatsbyImage image={getImage(cover.image)} />} */}
            <div dangerouslySetInnerHTML={{ __html: page?.childMarkdownRemark?.html as string }} />
        </>
    );
};

export default TemplatePage;
export { Head } from "../components/head";

export const pageQuery = graphql`
    query Page($path: String!) {
        page: googleDocs(slug: { eq: $path }) {
            name
            cover {
                image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
            childMarkdownRemark {
                html
            }
        }
    }
`;
