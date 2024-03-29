import * as React from "react";

export const SlideIn: React.FC<{
    children: React.ReactNode;
    className?: React.HTMLAttributes<HTMLDivElement>["className"];
}> = ({ children, className }) => <div className={`animate-slideIn ${className}`}>{children}</div>;
