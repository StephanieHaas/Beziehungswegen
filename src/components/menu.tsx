import { PageProps, graphql, useStaticQuery } from "gatsby";
import React from "react";

export const Menu: React.FC = () => {
    const data = useStaticQuery(graphql`
        query MenuQuery {
            menu: googleDocs(name: { eq: "Menü" }) {
                childMarkdownRemark {
                    html
                }
            }
        }
    `);
    console.log(data);
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: data.menu.childMarkdownRemark.html as string }} />
        </>
    );
};
