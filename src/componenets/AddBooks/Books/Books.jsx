import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useBooks from "../../Hooks/useBooks";

const Books = () => {
    const {id} = useParams();
    console.log(id);
    const [books , setBooks] = useState([]);
    useEffect(() => {
        fetch(`https://book-projects-server-qemx.vercel.app/books/${id}`)
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    const axiosSecure  = useAxiosSecure();
  const [,  refetch] = useBooks();
    const { _id ,  image , name , author ,quantity,    rating , category , price } = books;
    const {user} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
     const handleAddBook =() =>{

      if(user && user.email){
        //sent to datbase 
        const addToBooksItem = {
          bookId: _id,
          email : user.email,
          name,
          image , 
          price
         }
   axiosSecure.post("addToBooks" , addToBooksItem)
   .then(res => {
    console.log(res.data)
    if(res.data.insertedId){
      toast.success(` Successfully Add ${name}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        });
         // Automatice Refresh browser
         refetch();
    }
  
   })
 
      }
      
      else{
        Swal.fire({
          title: " Are You User ? ",
          text: "You won't be able to revert this!", 
          icon: "warning",
          color : "#fff",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          background: "rgba(0, 0, 0, 0.5)" ,
          confirmButtonText: "Login "
        }).then((result) => {
          if (result.isConfirmed) {
            //send to data base 
            
            navigate("/login" ,{state: {form : location}})
          }
        });
      }
     }
    return (
        <div className="">
          <div data-aos="zoom-in"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" className="hero lg:h-[500px] ">
  <div className="hero-content   flex-col lg:flex-row fromDivAdd rounded-xl ">
    <img src={image} className="  shadow-2xl fromDivNav" />
    <div>
    <div className="divider"></div>
      <p className="font-bold  lg:text-3xl   text-black">Name : <span className="text-orange-400"> {name}</span></p>
      <p className="font-bold text-2xl text-black">Author : <span className="text-blue-400">   {author}</span></p>
      <p className="font-bold text-xl  text-black">Category : <span className="text-orange-400">{category}</span></p>
      <p className="font-bold text-xl text-black">Quantity : <span className="text-red-500">{quantity}</span></p>
      <p className="font-bold text-xl text-black">Rating : <span className="text-red-500">⭐{rating}</span></p>
      <p className="font-bold  text-xl  text-black">Price : <span className="text-red-600">${price}</span></p>
   <br /> 
      <button onClick={handleAddBook} className="btn btn-block btn-outline text-xl text-white font-bold  ">Add To Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Books;