import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

const taskTypes = ['Sprehajanje', 'Nakupovanje', 'Pometanje', 'Delo', 'Druge'];

export default function AddTask() {
  const { setTasks } = useOutletContext();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    type: taskTypes[0],
    distance: '',
    duration: '',
    date: '',
    description: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      type: form.type,
      distance: parseFloat(form.distance),
      duration: parseInt(form.duration),
      date: form.date,
      description: form.description
    };

    setTasks((prev) => [...prev, newTask]);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Vrsta:
        <select name="type" value={form.type} onChange={handleChange}>
          {taskTypes.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </label><br />

      <label>
        Razdalja (km):
        <input type="number" name="distance" value={form.distance} onChange={handleChange} required />
      </label><br />

      <label>
        Trajanje (min):
        <input type="number" name="duration" value={form.duration} onChange={handleChange} required />
      </label><br />

      <label>
        Datum:
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
      </label><br />

      <label>
        Opis:
        <textarea name="description" value={form.description} onChange={handleChange} />
      </label><br />

      <button type="submit">Dodaj opravilo</button>
    </form>
  );
}
