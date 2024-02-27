import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useBooks = () => {
    // tanstack query 
   const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const {  data : bookCart = [] ,  refetch } =  useQuery({
  queryKey : ["book" , user?.email  ], // user?.email    / ata aladababe user bak kore 
  queryFn :  async  () => {
    const res  = await  axiosSecure.get(`/addToBooks?email=${user.email}`) /// `/addToBooks?email=${user.email}`  ata aladababe user bak kore vvvvvvvvvvvvvvvv
    return res.data;
  }
    })
    return [bookCart , refetch]
};

export default useBooks;