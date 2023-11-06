import NextLink from 'next/link';

// A link component
export function Link({href, children}: {href: string, children: React.ReactNode}) {
    return <NextLink href={href} className="text-lighter-red hover:text-light-red">
        {children}
        </NextLink>;
}

// A Section
export function Section({color, children}: {color: string, children: React.ReactNode}) {
    switch (color) {  
        case "dark-green":
            return <div className="w-full flex flex-col items-center bg-dark-green text-lighter-green py-10 z-10">{children}</div>;
        case "dark-green-alt":
            return <div className="w-full flex flex-col items-center bg-dark-green text-light-green py-10 z-10">{children}</div>;
        case "main-green":
            return <div className="w-full flex flex-col items-center bg-main-green text-lighter-green py-10 z-10">{children}</div>;
        case "light-green":
            return <div className="w-full flex flex-col items-center bg-light-green text-lighter-green py-10 z-10">{children}</div>;
        case "lighter-green":
            return <div className="w-full flex flex-col items-center bg-lighter-green text-main-green py-10 z-10">{children}</div>;
        case "main-red":
            return <div className="w-full flex flex-col items-center bg-main-red text-lighter-red py-10 z-10">{children}</div>;
        case "light-red":
            return <div className="w-full flex flex-col items-center bg-light-red text-lightest-red py-10 z-10">{children}</div>;
        case "lighter-red":
            return <div className="w-full flex flex-col items-center bg-lighter-red text-dark-red py-10 z-10">{children}</div>;
        default:
            return <div className="w-full flex flex-col items-center bg-dark-green text-lighter-green py-10 z-10">{children}</div>;
    }
}