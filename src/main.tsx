import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Graph from './pages/Graph/Graph';
import TextEditor from './pages/TextEditor/TextEditor';
import DefaultLayout from './layout/DefaultLayout';
import Info from './pages/Info/Info';

const route = createBrowserRouter([
  {
    path: '',
    element: <DefaultLayout />,
    children: [
      {
        path: '/editor',
        element: <TextEditor />,
      },
      {
        path: '/graph',
        element: <Graph />,
      },
      {
        path: '/info',
        element: <Info />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={route} />
);
