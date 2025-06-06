import { useOutletContext, Link } from 'react-router-dom';

export default function TaskList() {
  const { tasks } = useOutletContext();

  return (
    <div>
      <h2>Seznam opravil</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>
              {task.type} – {task.date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
