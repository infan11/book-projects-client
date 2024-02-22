 import image from '../../../assets/banner/register.jpg'
 import { FcGoogle } from "react-icons/fc";
 import { FaGithub } from "react-icons/fa";
import './regsiter.css'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
const Register = () => {
  const {user,  createUser , googleUser , githubUser } = useAuth();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/"
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const registerUser = {name , photo, email , password}
    console.log(registerUser);
    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password Must 6 Characters",
        footer: '<a href="#">Please Try Again</a>'
      });
    }
    createUser(email , password)
    .then(result =>{
      const regsitersUser = result.user;
      console.log(regsitersUser)
      if(registerUser){
        Swal.fire({
          title: "Succesfully Register",
          icon: "success", 
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          },
          timer: "1500"
        });
      }
      navigate(from , {replace: true})
    })
    .catch(error => {
       console.log(error)
       if(error.code === "auth/email-already-in-use"){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Already User",
          footer: '<a href="#">Please Try Again</a>',
          timer : "1200"
        });
       }
       else if(error.code === "auth/network-request-failed"){
        Swal.fire({
          title: "The Internet?",
          text: "That thing is still around?",
          icon: "question"
        });
       }
    } )

  }
  const handleGoogle = () =>{
    googleUser()
    .then(result  => {
      const googleAuth = result.user;
      console.log(googleAuth)
      if(googleAuth){
        Swal.fire({
          title: "Succesfully Register",
          icon: "success", 
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          },
          timer: "1500"
        });
      }
      navigate(from , {replace: true})
    })
    .catch(error => {
      console.log(error)
      if(error.code === "auth/email-already-in-use"){
       Swal.fire({
         icon: "error",
         title: "Oops...",
         text: "Already User",
         footer: '<a href="#">Please Try Again</a>',
         timer : "1200"
       });
      }
      else if(error.code === "auth/network-request-failed"){
       Swal.fire({
         title: "The Internet?",
         text: "That thing is still around?",
         icon: "question"
       });
      }
   } )

  }
  const handleGithub = () =>{
    githubUser()
    .then(result => {
      const githubAuth = result.user;
      console.log(githubAuth)
      if(githubAuth){
        Swal.fire({
          title: "Succesfully Register",
          icon: "success", 
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          },
          timer: "1500"
        });
      }
      navigate(from , {replace: true})
    })
    .catch(error => {
      console.log(error)
      if(error.code === "auth/email-already-in-use"){
       Swal.fire({
         icon: "error",
         title: "Oops...",
         text: "Already User",
         footer: '<a href="#">Please Try Again</a>',
         timer : "1200"
       });
      }
      else if(error.code === "auth/network-request-failed"){
       Swal.fire({
         title: "The Internet?",
         text: "That thing is still around?",
         icon: "question"
       });
      }
   } )

  }
    return (
        <div>
         <div className="hero min-h-screen max-w-full mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center hidden lg:block lg:text-left ">
       <img src={image} className=' imageR ml-14 w-[700px]   ' alt="" />
    </div>
    <div className=" fromDiv rounded-lg  md:w-96 md:px-8  lg:w-ful  bg-white ">
    <p className='text-[15px] text-center' > You Have An Account ? Now <Link className='text-blue-400 font-bold' to={"/login"}>SignIn</Link></p>
      <form onSubmit={handleSubmit} className=" lg:w-1/2  lg:mx-auto lg:ml-2  "> 
    
        <div className="form-control">
          <label className="label">
            <span className="label-textfont-bold font-mono  text-black">Name</span>   
          </label>
          <input type="text" placeholder="Your Name" name='name' className=" formInput p-3 border md:w-72 lg:w-80    bg-white font-bold  rounded-xl  " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold font-mono  text-black">Photo</span>   
          </label>
          <input type="text" placeholder="http://photo.com" name='photo' className=" formInput p-3 border md:w-72  lg:w-80     bg-white font-bold  rounded-xl " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold font-mono  text-black">Email</span>   
          </label>
          <input type="email" placeholder="Example@gmail.com" name='email'  className=" formInput p-3 border md:w-72  lg:w-80   bg-white font-bold  rounded-xl " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold font-mono  text-black">Password</span>
          </label>
          <input type="password" placeholder="Password Must 6 Characters " name='password' className=" formInput p-3 border md:w-72  lg:w-80     bg-white font-bold  rounded-xl " required />
        </div>

        <div className="form-control mt-6 ">
        <button className="formInput  btn p-2 bg-blue-400 hover:bg-blue-400 md:w-60 rounded-lg text-white font-bold  lg:w-80">Continue</button>
        <div className='divider  lg:ml-[141px]'>or</div>
        <div className='formInput   p-2 bg-white md:w-60 rounded-lg   font-bold  lg:w-80'>
        <button onClick={handleGoogle} className="flex items-center gap-2  md:ml-5 lg:ml-12 text-black"><FcGoogle /> Continue With Google</button>
        </div>
        
        <div className='formInput mt-2  p-2 bg-white md:w-60 rounded-lg   font-bold  lg:w-80'>
        <button onClick={handleGithub} className="flex items-center gap-2 md:ml-5 lg:ml-12    text-black"><FaGithub /> Continue With Github</button>
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