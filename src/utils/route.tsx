import { createBrowserRouter } from 'react-router';
import Editor from '../pages/Editor/Editor';
import Graph from '../pages/Graph/Graph';
import MainPage from '../pages/MainPage';

export const route = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: '/editor',
        element: <Editor />,
      },
      {
        path: '/graph',
        element: <Graph />,
      },
    ],
  },
]);
