import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { loader as HomeLoader } from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import RootNavigaation from "./components/RootNavigaation";
import Details from "./pages/Details";
import CartItems from "./pages/CartItems";
import Categories from "./pages/Categories";

import { Provider } from "react-redux";
import { store } from "./Slice/store";
import NewAccount from "./pages/NewAccount";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import MoreComponent from "./components/MoreComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootNavigaation />,
    children: [
      { index: true, element: <Home />, loader: HomeLoader },
      { path: "/shop/:category", element: <AllProducts /> },
      { path: "/details", element: <Details /> },
      { path: "/cart", element: <CartItems /> },

      { path: "/contact", element: <Contact /> },
    ],
  },
  { path: "/categories", element: <Categories /> },
  { path: "/account", element: <Account /> },
  { path: "/more", element: <MoreComponent /> },
  { path: "/createAccount", element: <NewAccount /> },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
