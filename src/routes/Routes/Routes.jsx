
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
import PrivateRoute from "../privateRoute/PrivateRoute";
import Mytoy from "../../pages/MyToys/Mytoy";
import Update from "../../pages/Update/update";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      
      { path: "/", element: <Home/>  },
      { path: "/alltoys", element: <Alltoys/>,
      loader: () => fetch('https://toy-marketplace.vercel.app/Disneyalltoys')
    },
      { path: "/blogs", element: <Blogs/>  },
      { path: "/login", element: <Loginpage/> },
      { path: "/register", element: <Registerpage/>},
      { path: "/update/:id", element: <Update/>,
      loader: ({params}) => fetch(`https://toy-marketplace.vercel.app/DisneyToys/${params.id}`)
    
    },
      { path: "/addtoy", element: <Addtoy/>  },
      { path: "/view-details/:id", element: <PrivateRoute><Details/></PrivateRoute>,
      loader: ({params}) => fetch(`https://toy-marketplace.vercel.app/DisneyToys/${params.id}`) 
      
    },
    { path: "/mytoy", element: <Mytoy/>  }
      
    ],
  },
]);

export default router;
