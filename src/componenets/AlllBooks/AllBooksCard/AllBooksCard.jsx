
import { FcRating } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useBooks from "../../Hooks/useBooks";
const AllBooksCard = ({book , setBooks}) => {
  const axiosSecure  = useAxiosSecure();
  const [refetch] = useBooks();
    const { _id ,  image , name , author ,   rating , category , price } = book;
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
    
    }
    refetch() 
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
        <div>
          
            <div className=" w-64 h-[550px]  block shadow-xl">
  <figure className="px-2 pt-2">
    <img src={image} alt="Shoes" className="rounded-xl w-64 h-72  " />
  </figure>
  <div className="card-body">
    <h2 className="text-[17px]  font-black text-red-700" >{name}</h2>
    <h2 className="text-[15px]  font-black text-yellow-500">{author}</h2>
    <h2 className="text-[14px]  font-black text-orange-400">{category}</h2>
    <h2 className="text-[14px]  font-black text-black flex items-center gap-2"><FcRating></FcRating>{rating}</h2>
    <h2 className="text-[14px]  font-black text-orange-400 top-52">${price}</h2>
    

    <div className="card-actions">
     {/* <Link to={`/books/${_id}`}> <button className="btn btn-block">Details</button></Link> */}
     <button onClick={handleAddBook} className="btn btn-block">Add Book</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllBooksCard;