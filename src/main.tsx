import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Graph from './pages/Graph/Graph';
import TextEditor from './pages/TextEditor/TextEditor';
import DefaultLayout from './layout/DefaultLayout';
import Info from './pages/Info/Info';
import NotFound from './pages/NotFound';
import { SharedHistoryContext } from './context/SharedHistoryContext';

const route = createBrowserRouter([
  {
    path: '',
    element: <DefaultLayout />,
    children: [
      {
        path: '/editor',
        element: <TextEditor />,
        children: [
          {
            path: ':fileId',
          },
        ],
      },
      {
        path: '/graph',
        element: <Graph />,
      },
      {
        path: '/info',
        element: <Info />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <SharedHistoryContext>
    <RouterProvider router={route} />
  </SharedHistoryContext>
);
