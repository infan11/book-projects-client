import Swal from "sweetalert2";
import { MdDeleteOutline } from "react-icons/md";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useBooks from "../../Hooks/useBooks";
import { GiTireIronCross } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
import useUser from "../../Hooks/useUser";
const Allusers = () => {
   const  [ users  , refetch] = useUser();
   console.log(users);
   const axiosSecure = useAxiosSecure();
  const [bookCart] = useBooks();

 
  // deleted user
  const handleDelated = user => {
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
     axiosSecure.delete(`/users/${user._id}`)
     .then(res => {
      console.log(res.data);
      if(res.data.deletedCount > 0){
        refetch();
        toast.success(" Successfully Deleted " , {
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

<div className="bg-blue-500 text-center p-3 text-white font-bold md:w-80  lg:w-full ">
<h3>Total User : {users.length}</h3>

    </div> 
    <div className="overflow-x-auto text-black font-bold  fromDivNavP">
  <table className="table ">
    {/* head */}
    <thead>
      <tr >
        <th></th>
        <th ></th>
        <th className="text-black font-bold text-xl">Name</th>
        <th className="text-black font-bold text-xl">Email </th>
        <th className="text-black font-bold text-xl">Role</th>
        <th className="text-black font-bold text-xl">Details</th>
        <th className="text-black font-bold text-xl">Action</th>
        
      </tr>
    </thead>
    <tbody>

     {
        users.map((user , index) =>   <tr>
            <th>{index+1}</th>
           <td><img src={user.photo}  className="w-16 rounded-lg  fromDivNavP" alt="" /></td> 
            <td > {user.name}</td>
            <td>{user.email}</td>
            <td>
              
 </td>
            <td> {/* The button to open modal */}
   <div>
   <label htmlFor="my_modal_6" className="fromDivNav">Details</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal " role="dialog">
  <div className="modal-box  fromDivNav">
  <div className="modal-action">
      <label htmlFor="my_modal_6" className="fromDiv"><GiTireIronCross /></label>
    </div>
    <div className="justify-center items-center">
      <img src={user.photo} className="rounded-md fromDivNavP" alt="" />
    </div>
    <p className="py-2">User Name : {user.name}</p>
    <p className="py-2">Total Order : {user.email}</p>
    <p className="py-2">Total Order :{bookCart.length}</p>
   
  </div>
</div>
   </div>
</td>
            <td>
              
              <button className="fromDivNav" onClick={() =>  handleDelated (user)}><MdDeleteOutline></MdDeleteOutline></button>
                </td>
          </tr>
     )
     }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Allusers;