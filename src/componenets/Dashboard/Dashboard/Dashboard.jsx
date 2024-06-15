
import { FaAd, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaBook, FaCalendar, FaEnvelope, FaList,  FaPhone,  FaUsers, FaUtensils } from "react-icons/fa6";


import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";




const Dashboard = () => {
const {user} = useAuth()
 
  const navLinks = <>

  { user  ?    <>
        <li>
          <NavLink className={ " hover:bg-blue-500 hover:text-white " } to="/dashboard/adminHome">
            <FaHome></FaHome>
            Admin Home</NavLink>
        </li>
        <li>
          <NavLink  className={"hover:bg-blue-500 hover:text-white"} to="/dashboard/addItems">
            <FaUtensils></FaUtensils>
            Add Items</NavLink>
        </li>
        <li>
          <NavLink  className={"hover:bg-blue-500 hover:text-white"}  to="/dashboard/manageItems">
            <FaList></FaList>
            Manage Items</NavLink>
        </li>
        <li>
          <NavLink  className={"hover:bg-blue-500 hover:text-white"}  to="/dashboard/contactInfo">
           <FaPhone></FaPhone>
          ContactInfo</NavLink>
        </li>
        <li>
          <NavLink  className={"hover:bg-blue-500 hover:text-white"} to="/dashboard/bookings">
            <FaBook></FaBook>
            Manage Bookings</NavLink>
        </li>
        <li>
          <NavLink  className={"hover:bg-blue-500 hover:text-white"} to="/dashboard/users">
            <FaUsers></FaUsers>
            All Users</NavLink>
        </li>
      </>
        :
        <>
          <li>
            <NavLink  className={"hover:bg-blue-500 hover:text-white"}  to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home</NavLink>
          </li>
          <li>
            <NavLink  className={"hover:bg-blue-500 hover:text-white"} to="/dashboard/history">
              <FaCalendar></FaCalendar>
              Not History</NavLink>
          </li>
          <li>
            <NavLink  className={"hover:bg-blue-500 hover:text-white"}  to="/dashboard/cart">
        
              <FaShoppingCart></FaShoppingCart>MyCart
            </NavLink>
          </li>
          <li>
            <NavLink  className={"hover:bg-blue-500 hover:text-white"} to="/dashboard/review">
              <FaAd></FaAd>
              Add a Review</NavLink>
          </li>
          <li>
            <NavLink  className={"hover:bg-blue-500 hover:text-white"} to="/dashboard/paymentHistory">
              <FaList></FaList>
              Real Payment History</NavLink>
          </li>
        </>
  }
    {/* shared nav links */}
    <div className="divider"></div>
    <li>
      <NavLink  className={"hover:bg-blue-500 hover:text-white"} to="/">
        <FaHome></FaHome>
        Home</NavLink>
    </li>
    <li>
      <NavLink  className={"hover:bg-blue-500 hover:text-white"} to="/ourMenu">
        <FaSearch></FaSearch>
        Menu</NavLink>
    </li>
    <li>
      <NavLink   className={"hover:bg-blue-500 hover:text-white"} to="/order/contactUs">
        <FaEnvelope></FaEnvelope>
        Contact</NavLink>
    </li>
  </>
  return (
    
  <div>
    
      <div>
      
      <div className="" >
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar bg-[#05050551]">
              <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6  text-black stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
              </div>
              <div className="navbar-center  hidden lg:flex">
                <ul className="menu menu-horizontal  text-xs  lg:ml-4  text-black  fromDivNav font-bold ">
                  {navLinks}
                </ul>
              </div>
            </div>
            {/* Page content here */}
            
        <Outlet></Outlet>
          
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full mt-6  text-black rounded-xl fromDivNav ">
            <Link to={"/dashboard"}><button className="text-2xl font-bold">Dashoboard</button></Link>

              {/* Sidebar content here */}
              <h2></h2>
              {navLinks}
            </ul>
          </div>
        </div>
      </div>

    </div>
    </div>
  );
};

export default Dashboard ;