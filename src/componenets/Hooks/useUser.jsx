        // enabled : !loading && !!localStorage.getItem("Access-Token") ,

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useUser = () => {
    const {loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const { refetch ,  data : users =  []  } = useQuery( {
        queryKey: ["users"],

        queryFn: async () => {
            const res  = await axiosSecure.get("/users" ) 

        return res.data
        }
    })
    return [users ,refetch]
};

export default useUser;