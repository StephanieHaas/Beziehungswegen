import { HeadProps, Link, PageProps, graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import { Seo } from "../components/seo";
import { Body } from "../components/body";

const title = "Themen und Gedanken";
const maxPreviewLength = 150;

const PageTemplate: React.FC<PageProps<Queries.BlogsQuery>> = ({
    data: {
        blog: { posts },
    },
}) => {
    return (
        <>
            <Layout>
                <section className="container mx-auto min-h-screen px-4">
                    <h1>{title}</h1>
                    <section>
                        {posts.map((post: Queries.BlogsQuery["blog"]["posts"][0]) => {
                            const html = post.childrenMarkdownRemark?.[0]?.html || "";
                            const onlyPreview = html.length > maxPreviewLength;
                            const preview = onlyPreview
                                ? `${html.substring(0, html.indexOf(" ", maxPreviewLength))}...`
                                : html;
                            return (
                                <div key={post.id} className="py-4">
                                    <h2 className="text-6xl">
                                        <Link to={post.path}>{post.name}</Link>{" "}
                                    </h2>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: preview,
                                        }}
                                    />
                                    {onlyPreview && <Link to={post.path}>weiter lesen</Link>}
                                </div>
                            );
                        })}
                    </section>
                </section>
            </Layout>
        </>
    );
};

export default PageTemplate;

export const Head = (props: HeadProps<Queries.BlogsQuery>) => {
    const pathname = props.location.pathname;
    return (
        <>
            <Seo title={title} pathname={pathname} />
            <Body />
        </>
    );
};

export const pageQuery = graphql`
    query Blogs {
        blog: allGoogleDocs(filter: { template: { eq: "blog.tsx" } }, sort: { createdTime: DESC }) {
            posts: nodes {
                id
                name
                path
                childrenMarkdownRemark {
                    html
                }
            }
        }
    }
`;
