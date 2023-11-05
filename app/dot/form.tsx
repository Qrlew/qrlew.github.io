'use client'
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import hljs from 'highlight.js';

function Form() {
  const [dataset, setDataset] = useState<string>('{"tables":[{"name":"table_1","path":["schema","table_1"],"schema":{"fields":[{"name":"a","data_type":"Float"},{"name":"b","data_type":"Integer"}]},"size":10000}]}');
  const [query, setQuery] = useState<string>('SELECT * FROM table_1');
  const [dot, setDot] = useState<string>('');

  async function updateDot() {
    const response = await fetch('api/dot', {
      method: 'POST',
      body: JSON.stringify({ dataset: dataset, query: query, dark_mode: false }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      const data = await response.json();
      setDot(data.value);
    } else {
      console.log("AARGL");
    }
  };

  async function updateDataset(dataset: string) {
    setDataset(dataset);
    await updateDot();
  }

  async function updateQuery(query: string) {
    setQuery(query);
    await updateDot();
  }

  function highlight(language: string): (code: string) => string {
    return (code: string) => hljs.highlight(language, code).value;
  }

  // const highlightedCode = hljs.highlight(language, code).value;

  return (
    <div>
      <Editor value={dataset} onValueChange={updateDataset} highlight={highlight('json')}
        className="hljs rounded-2xl my-3"
        padding="1em"
        style={{ color: "#c9d1d9", background: "#0d1117", fontFamily: "var(--font-fira-code), monospace" }}
      />
      <Editor value={query} onValueChange={updateQuery} highlight={highlight('sql')}
        className="hljs rounded-2xl my-3"
        padding="1em"
        style={{ color: "#c9d1d9", background: "#0d1117", fontFamily: "var(--font-fira-code), monospace" }}
      />
      {dot && <p>{dot}</p>}
    </div>
  );
};

export default Form;