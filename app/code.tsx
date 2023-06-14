"use client";
import { useEffect } from 'react';
// Highlight.js
import hljs from 'highlight.js';
import sql from 'highlight.js/lib/languages/sql';
import rust from 'highlight.js/lib/languages/rust';
import python from 'highlight.js/lib/languages/python';
import React from 'react';
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('rust', rust);
hljs.registerLanguage('python', python);

export function SQL({children}: {children: React.ReactNode}) {
    useEffect(() => {
        hljs.initHighlighting();
    }, []);
    return <pre>SQL<code className="sql rounded-2xl my-3">
        {children}
    </code></pre>;
}

export function Rust({children}: {children: React.ReactNode}) {
    useEffect(() => {
        hljs.initHighlighting();
    }, []);
    return <pre>Rust<code className="rust rounded-2xl my-3">
        {children}
    </code></pre>;
}

export function Python({children}: {children: React.ReactNode}) {
    useEffect(() => {
        hljs.initHighlighting();
    }, []);
    return <pre>Python<code className="python rounded-2xl my-3">
        {children}
    </code></pre>;
}