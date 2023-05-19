
import {   createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../pages/Home/Home";
import Alltoys from "../../pages/Alltoys/Alltoys";
import Blogs from "../../pages/Blogs/Blogs";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      
      { path: "/", element: <Home/>  },
      { path: "/alltoys", element: <Alltoys/>  },
      { path: "/blogs", element: <Blogs/>  },
     
    ],
  },
]);

export default router;
