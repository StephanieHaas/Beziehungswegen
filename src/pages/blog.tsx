import { Link, PageProps, graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const maxPreviewLength = 150;
const PageTemplate: React.FC<PageProps<Queries.BlogsQuery>> = ({
    data: {
        blog: { posts },
    },
}) => {
    return (
        <>
            <Layout>
                <section className="container mx-auto">
                    <h1>Blog</h1>
                    <section>
                        {posts.map((post: Queries.BlogsQuery["blog"]["posts"][0]) => {
                            const html = post.childrenMarkdownRemark?.[0]?.html || "";
                            const onlyPreview = html.length > maxPreviewLength;
                            const preview = onlyPreview
                                ? `${html.substring(0, html.indexOf(" ", maxPreviewLength))}...`
                                : html;
                            return (
                                <div key={post.id} className="py-4">
                                    <h2>
                                        <Link to={post.path}>{post.name}</Link>{" "}
                                    </h2>
                                    <span className="text-primary-700/60">Erstellt am {post.createdTime}</span>
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
export { Head } from "../components/head";

export const pageQuery = graphql`
    query Blogs {
        blog: allGoogleDocs(filter: { template: { eq: "blog.tsx" } }, sort: { createdTime: DESC }) {
            posts: nodes {
                id
                name
                path
                createdTime(formatString: "DD.MM.yyyy")
                childrenMarkdownRemark {
                    html
                }
            }
        }
    }
`;
