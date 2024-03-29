import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { CiMenuBurger } from "react-icons/ci";

import { IoIosSearch } from "react-icons/io";
import useBooks from "../Hooks/useBooks";
const Navbar = () => {
  const [bookCart , refetch] = useBooks()
  const {user , logout } = useAuth()
  const totalPrice =  bookCart.reduce((total , item  )  => total + item.price  , 0 ) 
  const handleLogout = () => {
     logout()
     .then(() => {})
     .catch(console.error(error))
  }
   const navLinks = <>
  <NavLink
  to="/"
  className={({ isActive, isPending }) =>
  `transition-all duration-300 ${isPending ? "pending" : isActive ? "active" : "  text-blue-500 "}`
}
>
  HOME
</NavLink>
<NavLink
  to="/addBooks"
  className={({ isActive, isPending }) =>
  `transition-all duration-300 ${isPending ? "pending" : isActive ? "active" : "text-blue-500 "}`
  }
>
  ADDBOOKS
 </NavLink>
<NavLink
  to="/allBooks"
  className={({ isActive, isPending }) =>
  `transition-all duration-300 ${isPending ? "pending" : isActive ? "active" : "text-blue-500 "}`
  }
>
  ALLBOOKS
</NavLink>
<NavLink
  to="/borrowedBooks"
  className={({ isActive, isPending }) =>
  `transition-all duration-300 ${isPending ? "pending" : isActive ? "active" : "text-blue-500  uppercase"}`
  }
>
BorrowedBooks
</NavLink>

    { user ? <>
   
    </> :
    <>
   
<NavLink
  to="/login"
  className={({ isActive, isPending }) =>
  `transition-all duration-300 ${isPending ? "pending" : isActive ? "active" : "text-blue-500 "}`
  }
>
  LOGIN
</NavLink>
    </>
    
    }
   </>
      
     
    return (
        <div  className="">
            <div data-aos="fade-down"
     className="navbar lg:w-full  md:w-80  shadow-2xl lg:px-10">
            <div className="navbar ">
            <div className="navbar ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost  text-black font-bold text-xl lg:hidden">
      <CiMenuBurger />
      </div>
      <ul tabIndex={0} className=" fromDivNav menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <Link  to={"/"}><a className="btn btn-ghost text-xl lg:ml-5  hidden md:block fromDivNavP text-blue-500">BOOK SHOP</a></Link>
  </div>
  


  <div className="navbar hidden font-bold  lg:flex">
    
    <ul className="menu menu-horizontal gap-5 px-3   rounded-lg fromDivNav ">
     {navLinks}
    </ul>
  </div>
  <p className=" fromDivNav rounded-2xl md:w-10 lg:w-20 text-2xl text-blue-500 font-bold  "><Link to={'/search'}><IoIosSearch /></Link></p>
  <div className="flex-none">
   {user ? <> <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{bookCart.length}</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-60 fromDivNav ">
        <div className="card-body text-blue-500 font-bold ">
          <span className="font-bold text-lg">{bookCart.length} Items</span>
          <span className="text-info">Subtotal: ${totalPrice}</span>
          <div className="card-actions">
          <Link to={"/dashboard/cart"}>  <button className="btn btn-outline font-bold  text-blue-500 btn-block">View cart</button></Link>
          </div>
        </div>
      </div>
    </div></> : <>
    <NavLink className="ml-1 "></NavLink>

   </>}
    <div className=" dropdown dropdown-end  ">
     { user ? <>
      <div tabIndex={0} role="button" className="btn btn-ghost   fromDivNavP">
        <div className=" w-10 rounded-full">
          
        <img  src={user?.photoURL} className="rounded-full w-10 " alt="" />
        </div>
        
      </div>
     </>: <>
      <NavLink
  to="/register"
  className={({ isActive, isPending }) =>
  `transition-all duration-300 ${isPending ? "pending" : isActive ? "active" : "bg-blue-500 text-white p-3 ml-1 rounded font-bold "}`
  }
>
  SIGNUP
</NavLink>
     </>
     }
      <ul tabIndex={0} className="  fromDivNav border-3 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-80">
      <div className=" rounded-full">
        <img  src={user?.photoURL} className="w-20 rounded-full  mx-auto " alt="" />
        </div>
        <div className="divider"></div>
        <div className="divider"></div>

        <li className=" text-xl text-black ">{user?.displayName}</li>
        <div className="divider"></div>
        <li className=" text-[12px] font-bold text-blue-500 ">{user?.email}</li>
        <div className="divider"></div>
        <li className="text-xl text-black">Your Profile</li>
        <div className="divider"></div>
        <li>  { user ? <>
      <NavLink
onClick={handleLogout}
  className={({ isActive, isPending }) =>
  `transition-all duration-300 ${isPending ? "pending" : isActive ? "active" : "text-blue-500 "}`
  }
>
  SIGNOUT
</NavLink>
    </> :
    <>
   
<NavLink
  to="/login"
  className={({ isActive, isPending }) =>
  `transition-all duration-300 ${isPending ? "pending" : isActive ? "active" : "text-blue-500 "}`
  }
>
  LOGIN
</NavLink>
    </>
    }</li>
      </ul>
    </div>
  </div>
            </div>
</div>
        </div>
    );
};

export default Navbar;