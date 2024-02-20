 import image from '../../../assets/banner/register.jpg'
 import { FcGoogle } from "react-icons/fc";
 import { FaGithub } from "react-icons/fa";
import './regsiter.css'
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div>
         <div className="hero min-h-screen max-w-full mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center hidden lg:block lg:text-left ">
       <img src={image} className=' imageR ml-14 w-[700px]   ' alt="" />
    </div>
    <div className=" fromDiv rounded-lg  md:w-96 md:px-8  lg:w-ful  bg-white ">
    <p className='text-[15px] text-center' > You Have An Account ? Now <Link className='text-blue-400 font-bold' to={"/login"}>SignIn</Link></p>
      <form className=" lg:w-1/2  lg:mx-auto lg:ml-2  "> 
    
        <div className="form-control">
          <label className="label">
            <span className="label-textfont-bold font-mono  text-black">Name</span>   
          </label>
          <input type="text" placeholder="Your Name" name='name' className=" formInput p-3 border md:w-72 lg:w-80    bg-white font-bold  rounded-xl  " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold font-mono  text-black">Email</span>   
          </label>
          <input type="text" placeholder="PhotoUrl" name='photo' className=" formInput p-3 border md:w-72  lg:w-80     bg-white font-bold  rounded-xl " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold font-mono  text-black">Email</span>   
          </label>
          <input type="email" placeholder="Email" name='email'  className=" formInput p-3 border md:w-72  lg:w-80   bg-white font-bold  rounded-xl " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold font-mono  text-black">Password</span>
          </label>
          <input type="password" placeholder="Password" name='password' className=" formInput p-3 border md:w-72  lg:w-80     bg-white font-bold  rounded-xl " required />
        </div>

        <div className="form-control mt-6 ">
        <button className="formInput   p-2 bg-blue-400 md:w-60 rounded-lg text-white font-bold  lg:w-80">Continue</button>
        <div className='divider  lg:ml-[141px]'>or</div>
        <div className='formInput   p-2 bg-white md:w-60 rounded-lg   font-bold  lg:w-80'>
        <button className="flex items-center gap-2  md:ml-5 lg:ml-12 text-black"><FcGoogle /> Continue With Google</button>
        </div>
        
        <div className='formInput mt-2  p-2 bg-white md:w-60 rounded-lg   font-bold  lg:w-80'>
        <button className="flex items-center gap-2 md:ml-5 lg:ml-12    text-black"><FaGithub /> Continue With Github</button>
        </div>
       
        
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;