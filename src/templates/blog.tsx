import { HeadProps, Link, PageProps, graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import { Seo } from "../components/seo";
import { Body } from "../components/body";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

const PageTemplate: React.FC<PageProps<Queries.BlogPostQuery>> = ({ data }) => {
    const { childMarkdownRemark, name, cover } = data.page!;
    const coverClassName = cover?.title === "links" ? "md:float-left md:mr-8" : "md:float-right md:ml-8";

    return (
        <>
            <Layout>
                <section className="container mx-auto min-h-screen px-4">
                    <h1>
                        <Link to="/themen-und-gedanken" title="Zurück" className="pr-8">
                            «
                        </Link>
                        {name}
                    </h1>
                    {cover && cover.image && cover.image.childImageSharp && (
                        <GatsbyImage
                            image={getImage(cover.image.childImageSharp.gatsbyImageData) as IGatsbyImageData}
                            className={`${coverClassName} max-w-[500px] mt-16`}
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
                alt
                title
                image {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`;
