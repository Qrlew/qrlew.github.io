'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
import { Code, SQL, Rust, Python, Shell } from '../code'

interface FormData {
  data: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ data: 'SELECT * FROM table_1' });
  const [response, setResponse] = useState<string>('');

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
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

  return (
    <div>
      <form>
        <label>
          Input Data:
          <input
            type="text"
            name="data"
            onChange={handleChange}
            value={formData.data}
          />
        </label>
      </form>
      {response && <p>{response}</p>}
      <Code code="SELECT * FROM table" language="sql"/>
    </div>
  );
};

export default Form;