// Highlight.js
import hljs from 'highlight.js';
import sql from 'highlight.js/lib/languages/sql';
import rust from 'highlight.js/lib/languages/rust';
import python from 'highlight.js/lib/languages/python';
import bash from 'highlight.js/lib/languages/bash';
import React from 'react';
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('rust', rust);
hljs.registerLanguage('python', python);
hljs.registerLanguage('bash', bash);

export function Code({ code, language }: { code: string, language: string }) {
    const highlightedCode = hljs.highlight(language, code).value;
    return <pre>{language}<code className="hljs rounded-2xl my-3" dangerouslySetInnerHTML={{__html: highlightedCode}}/></pre>;
}

export function SQL({children}: {children: string}) {
    return <Code code={children} language='SQL'/>;
}

export function Rust({children}: {children: string}) {
    return <Code code={children} language='Rust'/>;
}

export function Python({children}: {children: string}) {
    return <Code code={children} language='Python'/>;
}

export function Shell({children}: {children: string}) {
    return <Code code={children} language='bash'/>;
}