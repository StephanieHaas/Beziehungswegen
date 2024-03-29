import React from "react";

export const ProfileContact = () => (
    <>
        <div className="relative flex flex-col justify-center text-center items-center overflow-hidden py-48">
            <h2 className="text-3xl sm:text-3xl lg:text-5xl text-primary-700 mb-8">Kontakt</h2>
            <span className="text-xl sm:text-2xl lg:text-3xl font-light">
                <a
                    href="mailto:info@beziehungswegen.de"
                    className="text-primary-900 hover:text-primary-700 hover:underline"
                >
                    info@beziehungswegen.de
                </a>
                <br />
                <a href="tel:+498257927542" className="text-primary-900 hover:text-primary-700 hover:underline">
                    08257 - 927 542
                </a>
            </span>
        </div>
    </>
);
