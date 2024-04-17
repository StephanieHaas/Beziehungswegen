import { Link } from "gatsby";
import React, { forwardRef, useState } from "react";

const menuItems = [
    { href: "/", label: "Home" },
    { href: "/das-bin-ich", label: "Das bin ich" },
    {
        label: "Beratungsangebote",
        items: [
            { href: "/beratungsangebote/einzelberatung-und-coaching", label: "Einzelberatung und Coaching" },
            {
                href: "/beratungsangebote/paar-beziehungs-und-familienberatung",
                label: "Paar-, Beziehungs- und Familienberatung",
            },
            { href: "/beratungsangebote/padagogische-begleitung", label: "Pädagogische Begleitung" },
            // {
            //     href: "/beratungsangebote/beratung-kindliches-schlafverhalten",
            //     label: "Beratung kindliches Schlafverhalten",
            // },
            // { href: "/beratungsangebote/hochsensibilitat", label: "Hochsensibilität" },
            // { href: "/beratungsangebote/gefuhlsstarke", label: "Gefühlsstärke" },
        ],
    },
    { href: "/kurse/kurse", label: "Kurse" },
    { href: "/preise", label: "Preise" },
    { href: "/themen-und-gedanken", label: "Themen und Gedanken" },
    { href: "/kontakt", label: "Kontakt", highlight: true },
];

const MenuItem: React.FC<{ href: string; highlight?: boolean; children: React.ReactNode }> = ({
    href,
    highlight,
    children,
}) => {
    const className = highlight
        ? "text-primary-700 md:text-primary-50 md:bg-primary-700 md:hover:bg-primary-500 md:rounded-2xl md:px-4"
        : "text-primary-700 hover:text-primary-500";
    return (
        <li>
            <Link to={href} className={`block py-2 px-3 md:px-0 ${className}`}>
                {children}
            </Link>
        </li>
    );
};

const Dropdown: React.FC<{ label: string; children: React.ReactNode }> = ({ label: label, children }) => {
    const [open, setOpen] = useState(false);
    const ref = React.useRef<null | HTMLButtonElement>(null);

    React.useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("click", handleClick, true);

        return () => {
            document.removeEventListener("click", handleClick, true);
        };
    }, [ref, setOpen]);

    const handleClick = () => {
        setOpen((old) => !old);
    };

    return (
        <li>
            <button
                id="dropdownNavbarLink"
                onClick={handleClick}
                ref={ref}
                className="flex items-center justify-between w-full py-2 px-3 md:px-0 md:w-auto text-primary-700 hover:text-primary:500"
            >
                {label}
                <svg
                    className="w-2.5 h-2.5 ms-2.5 invisible md:visible"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>
            <div
                id="dropdownNavbar"
                className={` backdrop-blur-3xl w-full z-10 md:w-auto md:-mx-2 ${open ? "" : "md:hidden"} md:absolute`}
            >
                <ul className="p-2 md:px-2" aria-labelledby="dropdownLargeButton">
                    {children}
                </ul>
            </div>
        </li>
    );
};

const MenuToggler = forwardRef<
    HTMLButtonElement,
    {
        label: string;
        open: boolean;
        onClick: () => void;
        ref: React.MutableRefObject<HTMLButtonElement | null>;
    }
>(({ label, open, onClick }, ref) => {
    const className = open ? "ring-primary-200 dark:ring-primary-600 ring-1" : "";
    return (
        <button
            onClick={onClick}
            type="button"
            className={`inline-flex items-center py-2 px-3 justify-center text-sm rounded-lg md:hidden focus:outline-none text-primary-700 backdrop-blur-lg ${className}`}
            aria-controls="navbar-dropdown"
            aria-expanded="false"
        >
            <span>{label}</span>
        </button>
    );
});

export const Menu: React.FC = () => {
    const [open, setOpen] = useState(false);
    const ref = React.useRef<null | HTMLButtonElement>(null);

    React.useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("click", handleClick, true);

        return () => {
            document.removeEventListener("click", handleClick, true);
        };
    }, [ref, setOpen]);

    const handleClick = () => {
        setOpen((old) => !old);
    };

    return (
        <>
            <nav className={`sticky top-0 md:relative z-50 container mx-auto ${open ? "bg-primary-100" : ""}`}>
                <div className=" flex flex-wrap items-center justify-end mx-auto py-2">
                    <MenuToggler label="Menü" onClick={handleClick} open={open} ref={ref} />
                    <div className={`${open ? "" : "hidden"} w-full md:block md:w-auto`}>
                        <ul className="flex flex-col font-medium md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            {menuItems.map((item) => {
                                if (item.items) {
                                    return (
                                        <Dropdown key={item.label} label={item.label}>
                                            {item.items.map((subitem) => (
                                                <MenuItem key={subitem.label} href={subitem.href}>
                                                    {subitem.label}
                                                </MenuItem>
                                            ))}
                                        </Dropdown>
                                    );
                                }
                                return (
                                    <MenuItem key={item.label} href={item.href} highlight={item.highlight}>
                                        {item.label}
                                    </MenuItem>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
