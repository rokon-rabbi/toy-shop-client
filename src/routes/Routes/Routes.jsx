
import {   createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../../pages/Home/Home";
import Alltoys from "../../pages/Alltoys/Alltoys";
import Blogs from "../../pages/Blogs/Blogs";
import Loginpage from "../../pages/Loginpage/Loginpage";
import Registerpage from "../../pages/Registerpage/Registerpage";
import ErrorPage from "../../pages/Errorpage/Errorpage";
import Addtoy from "../../pages/AddToys/Addtoy";
import Details from "../../pages/Details/Details";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      
      { path: "/", element: <Home/>  },
      { path: "/alltoys", element: <Alltoys/>  },
      { path: "/blogs", element: <Blogs/>  },
      { path: "/login", element: <Loginpage/> },
      { path: "/register", element: <Registerpage/>},
      { path: "/addtoy", element: <Addtoy/>  },
      { path: "/view-details/:id", element: <Details/>,
      loader: ({params}) => fetch(`http://localhost:3000/DisneyToys/${params.id}`) 
      
    },
      
    ],
  },
]);

export default router;
