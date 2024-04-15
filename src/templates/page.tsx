import { HeadProps, PageProps, graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import { Seo } from "../components/seo";
import { Body } from "../components/body";

const PageTemplate: React.FC<PageProps<Queries.PageQuery>> = ({ data }) => {
    const { childMarkdownRemark, name } = data.page!;

    return (
        <>
            <Layout>
                <section className="container mx-auto min-h-screen px-4">
                    <h1>{name}</h1>
                    {/* {cover && <GatsbyImage image={getImage(cover.image)} />} */}
                    <div dangerouslySetInnerHTML={{ __html: childMarkdownRemark?.html as string }} />
                </section>
            </Layout>
        </>
    );
};

export default PageTemplate;

export const Head = (props: HeadProps<Queries.PageQuery>) => {
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
