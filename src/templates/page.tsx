import { Link, PageProps, graphql } from "gatsby";
import React from "react";
import { Menu } from "../components/menu";
import Layout from "../components/layout";
import { Footer } from "../components/footer";

const PageTemplate: React.FC<PageProps<Queries.PageQuery>> = ({ data }) => {
    const { childMarkdownRemark, name } = data.page!;

    return (
        <>
            <Layout>
                <section className="container mx-auto min-h-screen">
                    <h1>{name}</h1>
                    {/* {cover && <GatsbyImage image={getImage(cover.image)} />} */}
                    <div dangerouslySetInnerHTML={{ __html: childMarkdownRemark?.html as string }} />
                </section>
            </Layout>
        </>
    );
};

export default PageTemplate;
export { Head } from "../components/head";

export const pageQuery = graphql`
    query Page($path: String!) {
        page: googleDocs(slug: { eq: $path }) {
            id
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
