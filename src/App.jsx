import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import SideNav from './components/SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsList from './components/ProductsList';
import AddProduct from './components/AddProduct';
import CartContextProvider from './store/product-context';
import { Login } from './components/Login';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './components/RootLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/products",
        element: <ProductsList />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
])
function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
    </CartContextProvider>
  );
}

export default App;
