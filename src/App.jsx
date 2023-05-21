import { Outlet } from "react-router-dom";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import './App.css'
function App() {
  return (
    <div className=" bg-white">
      <Header />
      <div className="md:min-h-[calc(100vh-160px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
