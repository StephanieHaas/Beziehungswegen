import { HeadProps, PageProps, graphql } from "gatsby";
import React from "react";
import { Seo } from "../components/seo";
import { Body } from "../components/body";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

const PageTemplate: React.FC<PageProps<Queries.PageQuery>> = ({ data }) => {
    const { childMarkdownRemark, name, cover } = data.page!;
    const coverClassName = cover?.title === "links" ? "md:float-left md:mr-8" : "md:float-right md:ml-8";

    return (
        <>
            <Layout>
                <section className="min-h-screen template-page">
                    <h1>{name}</h1>
                    {cover && cover.image && cover.image.childImageSharp && (
                        <GatsbyImage
                            image={getImage(cover.image.childImageSharp.gatsbyImageData) as IGatsbyImageData}
                            className={`${coverClassName} max-w-[400px] mb-8`}
                            alt={cover.alt || ""}
                        />
                    )}
                    <div dangerouslySetInnerHTML={{ __html: childMarkdownRemark?.html! }} />
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
                alt
                title
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
