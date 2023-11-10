'use client'
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Editor from 'react-simple-code-editor';
import hljs from 'highlight.js';
import { Link, Section, SubSection, Title, H1, H2, P } from '@/app/components'
import { Dot } from '@/app/dot';

export default function Playground({dataset: initial_dataset, query: initial_query, dark_mode}: {dataset: string, query: string, dark_mode: boolean}) {
  const [dataset, setDataset] = useState<string>(initial_dataset);
  const [query, setQuery] = useState<string>(initial_query);
  const [dot, setDot] = useState<string>('');
  const [warning, setWarning] = useState<boolean>(false);

  // Init the graph for the first time
  useEffect(() => {updateDot(initial_dataset, initial_query)}, []);
  
  async function updateDot(dataset: string, query: string) {
    try {
      // const response = await fetch('api/dot', {
      const response = await fetch('https://qrlew.sarus.app/dot', {
        method: 'POST',
        body: JSON.stringify({ dataset: JSON.parse(dataset), query: query, dark_mode: dark_mode }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        setWarning(false);
        setDot((await response.json()).value);
      } else {
        setWarning(true);
        console.log("Invalid request");
      }
    } catch (error) {
      setWarning(true);
      console.error(error);
    }
  };

  async function updateDataset(dataset: string) {
    setDataset(dataset);
    await updateDot(dataset, query);
  }

  async function updateQuery(query: string) {
    setQuery(query);
    await updateDot(dataset, query);
  }

  function highlight(language: string): (code: string) => string {
    return (code: string) => hljs.highlight(language, code).value;
  }
  
  return (
    <div className="w-full max-w-7xl flex flex-row items-center">
      <div className="w-6/12 p-3" style={warning ? { background: "#c4001d" } : {}}>
        <p className="text-xl my-3">Dataset definition</p>
        <Editor value={dataset} onValueChange={updateDataset} highlight={highlight('json')}
          className="hljs rounded-2xl my-3"
          padding="1em"
          style={{ color: "#c9d1d9", background: "#0d1117", fontFamily: "var(--font-fira-code), monospace" }}
        />
        <p className="text-xl my-3">Query</p>
        <Editor value={query} onValueChange={updateQuery} highlight={highlight('sql')}
          className="hljs rounded-2xl my-3"
          padding="1em"
          style={{ color: "#c9d1d9", background: "#0d1117", fontFamily: "var(--font-fira-code), monospace" }}
        />
      </div>
      <div className="w-1/12 p-3 flex flex-col items-center">
        <FontAwesomeIcon icon={faArrowRight} size="xl" />
      </div>
      <div className="w-5/12 p-3">
        {dot && <Dot source={dot} />}
      </div>
    </div>
  );
};
