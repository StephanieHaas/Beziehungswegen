import { HeadProps, Link, PageProps, graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import { Seo } from "../components/seo";
import { Body } from "../components/body";

const PageTemplate: React.FC<PageProps<Queries.BlogPostQuery>> = ({ data }) => {
    const { childMarkdownRemark, name } = data.page!;

    return (
        <>
            <Layout>
                <section className="container mx-auto min-h-screen px-4">
                    <h1>
                        <Link
                            to="/themen-und-gedanken"
                            title="Zurück"
                            className="text-primary-700 hover:text-primary-900 pr-8"
                        >
                            «
                        </Link>
                        {name}
                    </h1>
                    <div dangerouslySetInnerHTML={{ __html: childMarkdownRemark?.html as string }} />
                </section>
            </Layout>
        </>
    );
};

export default PageTemplate;

export const Head = (props: HeadProps<Queries.BlogPostQuery>) => {
    const pathname = props.location.pathname;
    const title = props.data!.page!.name!;
    return (
        <>
            <Seo title={title} pathname={pathname} />
            <Body />
        </>
    );
};

export const pageQuery = graphql`
    query BlogPost($path: String!) {
        page: googleDocs(slug: { eq: $path }) {
            id
            name
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
