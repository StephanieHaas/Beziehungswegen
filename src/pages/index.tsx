import * as React from "react";
import Layout from "../components/layout";
import { LeadingLogo } from "../components/sections/leading-logo";
import { ProfileImage } from "../components/profile/image";
import { ProfileTitle } from "../components/profile/title";
import { ProfileContact } from "../components/profile/contact";

const IndexPage = () => {
    return (
        <Layout>
            <LeadingLogo />
            <ProfileImage />
            <ProfileTitle />
            <ProfileContact />
        </Layout>
    );
};

export default IndexPage;
export { Head } from "../components/head";
