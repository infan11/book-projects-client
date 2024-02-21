import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const Navbar = () => {
  const {user} = useAuth()
   const navLinks = <>
  <NavLink
  to="/"
  className={({ isActive, isPending }) =>
  `transition-all duration-300 ${isPending ? "pending" : isActive ? "active" : " text-blue-500 "}`
}
>
  HOME
</NavLink>
{/* <NavLink
  to="/addBooks"
  className={({ isActive, isPending }) =>
  `transition-all duration-300 ${isPending ? "pending" : isActive ? "active" : "text-blue-500 "}`
  }
>
  ADDBOOKS
</NavLink> */}
<NavLink
  to="/allBooks"
  className={({ isActive, isPending }) =>
  `transition-all duration-300 ${isPending ? "pending" : isActive ? "active" : "text-blue-500 "}`
  }
>
  ALLBOOKS
</NavLink>

    { user ? <>
      <NavLink
  to="/login"
  className={({ isActive, isPending }) =>
  `transition-all duration-300 ${isPending ? "pending" : isActive ? "active" : "text-blue-500 "}`
  }
>
  SIGNIN
</NavLink>
    </> :
    <>
    <NavLink
  to="/signout"
  className={({ isActive, isPending }) =>
  `transition-all duration-300 ${isPending ? "pending" : isActive ? "active" : "text-blue-500 "}`
  }
>
  SIGNOUT
</NavLink>
    </>
    }
   </>
    return (
        <div>
            <div className="navbar  lg:w-full  md:w-80  shadow-2xl lg:px-10">
            <div className="navbar ">
            <div className="navbar ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <Link to={"/"}><a className="btn btn-ghost text-xl lg:ml-5">BOOK SHOP</a></Link>
  </div>
  <div className="navbar-end hidden font-bold  lg:flex">
    <ul className="menu menu-horizontal gap-3 px-1">
     {navLinks}
    </ul>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className=" dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-betwee ">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
            </div>
</div>
        </div>
    );
};

export default Navbar;