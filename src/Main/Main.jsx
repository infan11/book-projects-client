import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../componenets/Navbar/Navbar";

const Main = () => {
    const location = useLocation();
    const noNavbarFooter = location.pathname.includes("/register")
    return (
        <div>
           { noNavbarFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;