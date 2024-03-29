import { MDXProvider } from "@mdx-js/react";
import React from "react";
import { LeadingLogo } from "./sections/leading-logo";
import { Footer } from "./footer";
import { Menu } from "./menu";

export default function Layout({ children }: React.PropsWithChildren<object>): React.JSX.Element {
    return (
        <MDXProvider
            components={{
                // Map HTML element tag to React component
                // h1: DesignSystem.H1,
                // h2: DesignSystem.H2,
                // h3: DesignSystem.H3,
                // // Or define component inline
                // p: (props) => <p {...props} style={{ color: "rebeccapurple" }} />,
                leadinglogo: LeadingLogo,
            }}
        >
            <main className="bg-primary-100 box-border">
                <Menu />
                {children}
                <Footer />
            </main>
        </MDXProvider>
    );
}
