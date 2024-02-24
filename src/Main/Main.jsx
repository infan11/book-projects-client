import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../componenets/Navbar/Navbar";
import Footer from "../componenets/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const noNavbarFooter = location.pathname.includes("/register") || location.pathname.includes("/login")
    return (
        <div>
           { noNavbarFooter || <Navbar></Navbar>}
           <div>
           <Outlet></Outlet>
           </div>
           { noNavbarFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;