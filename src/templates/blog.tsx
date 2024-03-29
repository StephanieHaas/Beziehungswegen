import { Link, PageProps, graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const PageTemplate: React.FC<PageProps<Queries.BlogPostQuery>> = ({ data }) => {
    const { childMarkdownRemark, name, createdTime } = data.page!;

    return (
        <>
            <Layout>
                <section className="container mx-auto">
                    <h1>
                        <Link to="/blog" className="text-primary-700 hover:text-primary-900">
                            Blog
                        </Link>
                        {" / "}
                        {name}
                    </h1>
                    <span className="text-primary-700/60">Erstellt am {createdTime}</span>
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
    query BlogPost($path: String!) {
        page: googleDocs(slug: { eq: $path }) {
            id
            name
            createdTime(formatString: "DD.MM.yyyy")
            childMarkdownRemark {
                html
                timeToRead
            }
            cover {
                image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`;
