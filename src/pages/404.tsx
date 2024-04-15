import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import { Body } from "../components/body";
import { Seo } from "../components/seo";

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <main className="text-center">
            <h1>Diese Seite existiert nicht</h1>
            <p>
                <Link to="/">Zur Startseite</Link>
            </p>
        </main>
    );
};

export default NotFoundPage;

export const Head: HeadFC = () => (
    <>
        <Seo title="Seite nicht gefunden"></Seo>
        <Body></Body>
    </>
);
