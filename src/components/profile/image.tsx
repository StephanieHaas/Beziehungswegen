import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const ProfileImage = () => (
    <>
        <div className="relative flex flex-col justify-center text-center items-center overflow-hidden py-2">
            <StaticImage
                src="../../images/foto.jpg"
                alt="Stephanie Haas"
                layout="fullWidth"
                placeholder="blurred"
                className="rounded-full border-[13px] border-solid border-primary-700 mb-14 w-3/5 h-3/5 mx-auto sm:w-96 sm:h-96 max-w-full sm:max-w-[380px] max-h-[380px]"
            ></StaticImage>
        </div>
    </>
);
