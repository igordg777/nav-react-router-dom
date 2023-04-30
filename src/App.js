import './App.css';
import Root from "./routes/root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import First from './components/First'
import Second from './components/Second'
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // если хотим чтобы навигация не пропадала при переходе к новому компоненту - добавляем дочерние компоненты к компоненту навигации с помощью ключа children
    children: [
      {
        path: "/zero",
        element: <div>Без компонента</div>,
      },
      {
        path: "/first",
        element: <First />,
      },
    ],
  },
  {
    path: "/second",
    element: <Second />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
