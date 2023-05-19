
import {   createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../pages/Home/Home";
import Alltoys from "../../pages/Alltoys/Alltoys";
import Blogs from "../../pages/Blogs/Blogs";
import Loginpage from "../../pages/Loginpage/Loginpage";
import Registerpage from "../../pages/Registerpage/Registerpage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      
      { path: "/", element: <Home/>  },
      { path: "/alltoys", element: <Alltoys/>  },
      { path: "/blogs", element: <Blogs/>  },
      { path: "/login", element: <Loginpage/>  },
      { path: "/register", element: <Registerpage/>  },
      
    ],
  },
]);

export default router;
