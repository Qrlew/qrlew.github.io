import NextLink from 'next/link';

// A link component
export function Link({href, children}: {href: string, children: React.ReactNode}) {
    return <NextLink href={href} className="text-lighter-red hover:text-light-red">
        {children}
        </NextLink>;
}

// A Section
export function Section({color, children}: {color?: string, children: React.ReactNode}) {
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

// A Section
export function SubSection({children}: {children: React.ReactNode}) {
    return <div className="w-full max-w-7xl p-3">{children}</div>
}

// Title
export function Title({children, id}: {children: React.ReactNode, id?: string}) {
    return <h1 className="font-serif text-9xl my-9" id={id}>{children}</h1>
}

// Subtitle
export function Subtitle({children}: {children: React.ReactNode}) {
    return <p className="font-sans text-2xl my-3" >{children}</p>
}

// H1
export function H1({children, id}: {children: React.ReactNode, id?: string}) {
    return <h1 className="font-serif text-7xl my-9" id={id}>{children}</h1>
}

// H2
export function H2({children, id}: {children: React.ReactNode, id?: string}) {
    return <h2 className="font-serif text-4xl my-3" id={id}>{children}</h2>
}

// H3
export function H3({children, id}: {children: React.ReactNode, id?: string}) {
    return <h3 className="text-2xl my-3" id={id}>{children}</h3>
}

// P
export function P({children}: {children: React.ReactNode}) {
    return <p className="text-xl my-3">{children}</p>
}