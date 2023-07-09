import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainView from '@/pages/MainView';
import Layout from '@/components/Layout';
import { paths } from './Paths';
import Breeds from '@/pages/Breeds';
import Favorites from '@/pages/Favorites';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: paths.main,
        element: <MainView />,
      },
      {
        path: paths.mainId,
        element: <MainView />,
      },
      {
        path: paths.breeds,
        element: <Breeds />,
      },
      {
        path: paths.favorites,
        element: <Favorites />,
      },
    ],
  },
]);

const Routing = () => <RouterProvider router={router} />;

export default Routing;
