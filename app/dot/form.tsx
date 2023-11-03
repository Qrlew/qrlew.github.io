'use client'
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  data: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ data: '' });
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
      } else {
        setResponse("Meh");
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
      {response && <p>Response: {response}</p>}
    </div>
  );
};

export default Form;