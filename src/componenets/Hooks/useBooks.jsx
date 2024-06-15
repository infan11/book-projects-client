import { useQuery , } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useBooks = () => {

    
   const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const   {  refetch ,  data : bookCart = [] ,  } =  useQuery({
  queryKey : ["book" , user?.email  ],  
  queryFn :  async  () => {
    const res  = await  axiosSecure.get(`/addToBooks?email=${user.email}`) 
    return res.data;
  }
    })
    return [bookCart , refetch]
};

export default useBooks;