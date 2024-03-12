import * as React from "react";

export const SlideIn: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex flex-col items-center justify-center h-3/4 animate-slideIn">
        <div className="flex flex-row items-center justify-center text-center px-8 gap-9">{children}</div>
    </div>
);
