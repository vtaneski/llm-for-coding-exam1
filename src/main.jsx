import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import AddTask from './components/AddTask';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <TaskList /> },
      { path: 'task/:id', element: <TaskDetail /> },
      { path: 'add', element: <AddTask /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
