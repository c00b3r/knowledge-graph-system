import { createBrowserRouter } from 'react-router';
import Graph from '../pages/Graph/Graph';
import MainPage from '../pages/MainPage';
import TextEditor from '../pages/TextEditor/TextEditor';

export const route = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: '/editor',
        element: <TextEditor />,
      },
      {
        path: '/graph',
        element: <Graph />,
      },
    ],
  },
]);
