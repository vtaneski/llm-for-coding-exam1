import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <h1>Beležnik opravil</h1>
      <nav>
        <Link to="/">Domov</Link> | <Link to="/add">Dodaj opravilo</Link>
      </nav>
      <hr />
      <Outlet context={{ tasks, setTasks }} />
    </div>
  );
}
