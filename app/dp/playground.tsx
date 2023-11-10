'use client'
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Editor from 'react-simple-code-editor';
import hljs from 'highlight.js';
import { Link, Section, SubSection, Title, H1, H2, H3, P } from '@/app/components'
import { Dot } from '@/app/dot';

function useHorizontalScroll() {
  const elRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY == 0) return;
        // Read the scrollLeft value
        const sl = el.scrollLeft;
        // When saturating on the left
        if ((sl===0 && e.deltaY<0) || ((el.offsetWidth+sl)===el.scrollWidth && e.deltaY>0)) {
          el.scrollTo({
            top: el.scrollTop + e.deltaY,
          });
        } else {
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
          });
        }
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}

export default function Playground({dataset: initial_dataset, query: initial_query, synthetic_data: initial_synthetic_data, protected_entity: initial_protected_entity, dark_mode}:
    {dataset: string, query: string, synthetic_data: string, protected_entity: string, epsilon: number, delta: number, dark_mode: boolean}) {
  const graphRef = useRef(null);
  const [dataset, setDataset] = useState<string>(initial_dataset);
  const [query, setQuery] = useState<string>(initial_query);
  const [syntheticData, setSyntheticData] = useState<string>(initial_synthetic_data);
  const [protectedEntity, setProtectedEntity] = useState<string>(initial_protected_entity);
  const [epsilon, setEpsilon] = useState<string>('1.0');
  const [delta, setDelta] = useState<string>('1e-5');
  const [dot, setDot] = useState<string>('');
  const [dpQuery, setDpQuery] = useState<string>('');
  const [dpDot, setDpDot] = useState<string>('');
  const [warning, setWarning] = useState<boolean>(false);

  // Init the graph for the first time
  useEffect(() => {updateDot(initial_dataset, initial_query)}, []);
  useEffect(() => {updateDP(initial_dataset, initial_query, initial_synthetic_data, initial_protected_entity, epsilon, delta)}, []);
  
  // update input dot
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

  // update input dot
  async function updateDP(dataset: string, query: string, synthetic_data: string, protected_entity: string, epsln: string, dlta: string) {
    try {
      // const response = await fetch('api/dot', {
      const response = await fetch('https://qrlew.sarus.app/rewrite_with_differential_privacy_with_dot', {
        method: 'POST',
        body: JSON.stringify({
          dataset: JSON.parse(dataset),
          query: query,
          synthetic_data: JSON.parse(synthetic_data),
          protected_entity: JSON.parse(protected_entity),
          epsilon: JSON.parse(epsln),
          delta: JSON.parse(dlta),
          dark_mode: dark_mode }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        const dp_query_dot = JSON.parse((await response.json()).value);
        setWarning(false);
        setDpQuery(dp_query_dot.query);
        setDpDot(dp_query_dot.dot);
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
    await updateDP(dataset, query, syntheticData, protectedEntity, epsilon, delta);
  }

  async function updateQuery(query: string) {
    setQuery(query);
    await updateDot(dataset, query);
    await updateDP(dataset, query, syntheticData, protectedEntity, epsilon, delta);
  }

  async function updateSyntheticData(synthetic_data: string) {
    setSyntheticData(synthetic_data);
    await updateDP(dataset, query, synthetic_data, protectedEntity, epsilon, delta);
  }

  async function updateProtectedEntity(protected_entity: string) {
    setProtectedEntity(protected_entity);
    await updateDP(dataset, query, syntheticData, protected_entity, epsilon, delta);
  }

  async function updateEpsilon(epsln: string) {
    setEpsilon(epsln);
    await updateDP(dataset, query, syntheticData, protectedEntity, epsln, delta);
  }

  async function updateDelta(dlta: string) {
    setDelta(dlta);
    await updateDP(dataset, query, syntheticData, protectedEntity, epsilon, dlta);
  }

  function highlight(language: string): (code: string) => string {
    return (code: string) => hljs.highlight(code, {language: language}).value;
  }

  const scrollRef = useHorizontalScroll();
  
  return (
    <div className="w-full flex overflow-x-auto" ref={scrollRef}>
      <div className="flex flex-row items-start">
        <div className="w-[800px] p-3" style={warning ? { background: "#c4001d" } : {}} >
          <H3>Query, Dataset and Parameters</H3>
          <P>Query</P>
          <Editor value={query} onValueChange={updateQuery} highlight={highlight('sql')}
            className="hljs rounded-2xl my-3"
            padding="1em"
            style={{ fontFamily: "var(--font-fira-code), monospace" }}
          />
          <P>Dataset definition</P>
          <Editor value={dataset} onValueChange={updateDataset} highlight={highlight('json')}
            className="hljs rounded-2xl my-3"
            padding="1em"
            style={{ fontFamily: "var(--font-fira-code), monospace" }}
          />
          <P>Synthetic Data</P>
          <Editor value={syntheticData} onValueChange={updateSyntheticData} highlight={highlight('json')}
            className="hljs rounded-2xl my-3"
            padding="1em"
            style={{ fontFamily: "var(--font-fira-code), monospace" }}
          />
          <P>Protected Entity</P>
          <Editor value={protectedEntity} onValueChange={updateProtectedEntity} highlight={highlight('json')}
            className="hljs rounded-2xl my-3"
            padding="1em"
            style={{ fontFamily: "var(--font-fira-code), monospace" }}
          />
          <P>Epsilon</P>
          <Editor value={epsilon} onValueChange={updateEpsilon} highlight={highlight('json')}
            className="hljs rounded-2xl my-3"
            padding="1em"
            style={{ fontFamily: "var(--font-fira-code), monospace" }}
          />
          <P>Delta</P>
          <Editor value={delta} onValueChange={updateDelta} highlight={highlight('json')}
            className="hljs rounded-2xl my-3"
            padding="1em"
            style={{ fontFamily: "var(--font-fira-code), monospace" }}
          />
        </div>
        <div className="w-[100px] p-3 my-72 flex flex-col items-center">
          <FontAwesomeIcon icon={faArrowRight} size="xl" />
        </div>
        <div className="min-w-[400px] p-3 flex flex-col items-center">
          <H3>Intermediate Representation</H3>
          {dot && <Dot source={dot} />}
        </div>
        <div className="w-[100px] p-3 my-72 flex flex-col items-center">
          <FontAwesomeIcon icon={faArrowRight} size="xl" />
        </div>
        <div className="min-w-[400px] p-3 flex flex-col items-center">
          <H3>Rewriten Intermediate Representation</H3>
          {dpDot && <Dot source={dpDot} />}
        </div>
        <div className="w-[100px] p-3 my-72 flex flex-col items-center">
          <FontAwesomeIcon icon={faArrowRight} size="xl" />
        </div>
        <div className="w-[800px] p-3">
          <H3>Rewriten Query</H3>
          <Editor value={dpQuery} onValueChange={()=>{}} highlight={highlight('sql')}
            className="hljs rounded-2xl my-3"
            padding="1em"
            style={{ fontFamily: "var(--font-fira-code), monospace" }}
          />
        </div>
      </div>
    </div>
  );
};
