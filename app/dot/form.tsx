import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  data: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ data: '' });
  const [response, setResponse] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://qrlew-zsyaspsckq-od.a.run.app/dot', {
        method: 'POST',
        body: JSON.stringify({
          dataset: '{"tables":[{"name":"table_1","path":["schema","table_1"],"schema":{"fields":[{"name":"a","data_type":"Float"},{"name":"b","data_type":"Integer"}]},"size":10000}]}',
          query:"SELECT * FROM table_1",
          dark_mode:false
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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