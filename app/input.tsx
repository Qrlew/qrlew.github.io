// Highlight.js
import hljs from 'highlight.js';
import sql from 'highlight.js/lib/languages/sql';
import json from 'highlight.js/lib/languages/json';
import React, { Fragment } from 'react';
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('json', json);

export function SQLInput({ value, onChange }: { value: string, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) {
    // const highlightedValue = hljs.highlight('SQL', value).value;
    return <Fragment><input
        type="text"
        value={value}
        onChange={onChange}
        className="hljs sql rounded-2xl my-3"
    />
    {/* <pre><code dangerouslySetInnerHTML={{__html: highlightedValue}}/></pre> */}
    </Fragment>;
}

// export function SQL({children}: {children: string}) {
//     return <Code code={children} language='SQL'/>;
// }

// export function Rust({children}: {children: string}) {
//     return <Code code={children} language='Rust'/>;
// }

// export function Python({children}: {children: string}) {
//     return <Code code={children} language='Python'/>;
// }

// export function Shell({children}: {children: string}) {
//     return <Code code={children} language='bash'/>;
// }