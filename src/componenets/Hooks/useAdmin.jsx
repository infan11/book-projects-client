        // enabled : !loading && !!localStorage.getItem("Access-Token") ,

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useAdmin = () => {
    const {loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const { refetch ,  data : users =  []  } = useQuery( {
        queryKey: ["users"],

        queryFn: async () => {
            const res  = await axiosSecure.get("/users" ,  {
                headers : {
                    authorization :  `Bearar ${localStorage.getItem("access-token")}` 
                }
            }) 

        return res.data
        }
    })
    return [users ,refetch]
};

export default useAdmin;