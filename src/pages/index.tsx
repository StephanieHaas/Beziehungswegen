import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { type PageProps } from "gatsby";
import { Menu } from "../components/menu";
import { SlideIn } from "../components/sections/slide-in";

const pageStyles = `
bg-primary-100
box-border
`;

const IndexPage: React.FC<PageProps> = ({ children }) => {
    return (
        <main className={pageStyles}>
            <Menu />
            Test
            <MDXProvider>{children}</MDXProvider>
            <SlideIn>
                <img className="object-cover w-40 h-40" src={"../../logo.svg"} alt="Beziehungswegen" />
                <h1 className="font-autography text-4xl sm:text-7xl lg:text-9xl text-primary-700 leading">
                    beziehungswegen
                </h1>
            </SlideIn>
        </main>
    );
};

export default IndexPage;
export { Head } from "../components/head";
