
import {   createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../pages/Errorpage/Errorpage";
import Blog from "../../pages/blog/Blog";
import Loginpage from "../../pages/Loginpage/Loginpage";
import Registerpage from "../../pages/Registerpage/Registerpage";
import About from "../../pages/about/About";
import Home from "../../pages/Home/Home";
import App from "../../App";
import ChefDetails from "../../pages/chefDetails/ChefDetails";
import PrivateRoute from "../privateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      
      { path: "/", element: <Home/>  },
      { path: "/blog", element: <Blog /> },
      { path: "/login", element: <Loginpage /> },
      { path: "/register", element: <Registerpage /> },
      { path: "/about", element: <About /> },
      {
        path: "/chef/:id",
        element: <PrivateRoute><ChefDetails /></PrivateRoute> ,
        loader: ({ params }) =>
          fetch(
            `https://b710-chef-recipe-hunter-main-rokon-rabbi.vercel.app/chefs/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
