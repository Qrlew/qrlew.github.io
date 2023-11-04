'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
import { Code, SQL, Rust, Python, Shell } from '../code'
import { SQLInput } from '../input'

interface FormData {
  dataset: string;
  query: string;
}

function Form() {
  const [formData, setFormData] = useState<FormData>({
    dataset: '{"tables":[{"name":"table_1","path":["schema","table_1"],"schema":{"fields":[{"name":"a","data_type":"Float"},{"name":"b","data_type":"Integer"}]},"size":10000}]}',
    query: 'SELECT * FROM table_1',
  });
  const [response, setResponse] = useState<string>('');

  const handleChange = async (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    try {
      const response = await fetch('api/dot', {
        method: 'POST',
        body: JSON.stringify({
          dataset: '{"tables":[{"name":"table_1","path":["schema","table_1"],"schema":{"fields":[{"name":"a","data_type":"Float"},{"name":"b","data_type":"Integer"}]},"size":10000}]}',
          query:"SELECT * FROM table_1",
          dark_mode:false,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setResponse(data.value);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // const highlightedCode = hljs.highlight(language, code).value;

  return (
    <div>
      <form>
          <textarea name="dataset" rows={5} onChange={handleChange} className="w-full resize-y rounded-2xl my-3">
            {formData.dataset}
          </textarea>
          <textarea name="query" rows={5} cols={80} onChange={handleChange} className="w-full resize-none rounded-2xl my-3">
            {formData.query}
          </textarea>
      </form>
      <pre><code className="hljs sql rounded-2xl my-3" contentEditable="true" dangerouslySetInnerHTML={{__html: "<p>Hello"}}/></pre>;
      {response && <p>{response}</p>}
    </div>
  );
};

export default Form;