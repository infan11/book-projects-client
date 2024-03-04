import useAdmin from "../../Hooks/useAdmin";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { MdDeleteOutline } from "react-icons/md";

const Allusers = () => {
   const  [ users ] = useAdmin();


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
        <th className="">Image</th>
        <th>Name</th>
        <th>Email </th>
        <th>Action</th>
        <th>Details</th>
        <th>Menage</th>
        
      </tr>
    </thead>
    <tbody>

     {
        users.map((user , index) =>   <tr>
            <th>{index+1}</th>
           <td><img src={user.photo}  className="w-16 rounded-lg  fromDivNavP" alt="" /></td> 
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>Admin </td>
            <td> details </td>
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

export default Allusers;