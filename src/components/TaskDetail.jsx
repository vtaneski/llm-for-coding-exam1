import { useParams, useOutletContext } from 'react-router-dom';

export default function TaskDetail() {
  const { id } = useParams();
  const { tasks } = useOutletContext();

  const task = tasks.find((t) => t.id === Number(id));
  if (!task) return <p>Opravilo ni bilo najdeno.</p>;

  return (
    <div>
      <h2>{task.type}</h2>
      <p><strong>Datum:</strong> {task.date}</p>
      <p><strong>Razdalja:</strong> {task.distance} km</p>
      <p><strong>Trajanje:</strong> {task.duration} min</p>
      <p><strong>Opis:</strong> {task.description}</p>
    </div>
  );
}
