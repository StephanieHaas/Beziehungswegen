import React from "react";
import { SlideIn } from "./slide-in";

export const LeadingLogo = () => (
    <>
        <div className="flex flex-col items-center justify-center h-[80vh] max-w-full">
            <SlideIn className={"flex flex-row items-center justify-center text-center px-8 gap-9"}>
                <img className="object-cover w-36 h-36" src={"../../logo.svg"} alt="Beziehungswegen" />
                <h1 className="font-autography text-4xl sm:text-7xl lg:text-9xl text-primary-700 leading">
                    beziehungswegen
                </h1>
            </SlideIn>
        </div>
    </>
);
