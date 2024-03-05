import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useBooks from '../../Hooks/useBooks';
import { MdDeleteOutline } from 'react-icons/md';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyCart = () => {
    const [bookCart , refetch] = useBooks();
    const axiosSecure = useAxiosSecure();
   
    const totalPrice =  bookCart.reduce((total , item  )  => total + item.price  , 0 ) 
     const handleDeleted = id => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/addToBooks/${id}`)
          .then(res=> {
            console.log(res.data);
           if(res.data.deletedCount > 0){
            refetch()
            toast.success(` Successfully Deleted   `, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              
              });
         
           }
        
          })
        }
      });
     }
    
    return (
      <div>

      <div className="bg-blue-500 flex  px-10 justify-between  p-3 text-white font-bold md:w-80  lg:w-full ">
      <h3>Your Order : ${bookCart.length}</h3>
      <h3>Total Price : ${totalPrice}</h3>
      
          </div> 
          <div className="overflow-x-auto text-black font-bold  fromDivNavP">
        <table className="table ">
          {/* head */}
          <thead>
            <tr >
              <th></th>
              <th className="text-purple-500  text-xl">Image</th>
              <th className="text-purple-500  text-xl">Book Name</th>
              <th className="text-purple-500  text-xl">Price</th>
             
              <th className="text-purple-500  text-xl">Menage</th>
              
            </tr>
          </thead>
          <tbody>
      
           {
              bookCart.map((book , index) =>   <tr>
                  <th>{index+1}</th>
                 <td><img src={book.image}  className="w-16 rounded-lg  fromDivNavP" alt="" /></td> 
                  <td>{book.name}</td>
                  <td>${book.price}</td>
                  
                  <td>
                    
                    <button onClick={() =>  handleDeleted(book._id)}><MdDeleteOutline /></button>
                    
                     </td>
                  <td>  </td>
                </tr>
           )
           }
            
          </tbody>
        </table>
      </div>
              </div>
    );
};

export default MyCart;