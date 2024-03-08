import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useAdmin = () => {
    const {loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const { refetch ,  data : users =  []  } = useQuery( {
        queryKey: ["user"],
        enabled : !loading && !!localStorage.getItem("Access-Token") ,
        queryFn: async () => {
            const res  = await axiosSecure.get("/users" , {
                headers: {
                    Authorization : `Bearer${localStorage.getItem("Access-Token")}`
                }
            }) 

        return res.data
        }
    })
    return [users ,refetch]
};

export default useAdmin;