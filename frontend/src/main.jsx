import ReactDOM from 'react-dom/client'
import "./App.scss";
import Root from './routes/Root';
import HomePage from './pages/HomePage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )