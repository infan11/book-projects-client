import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const {data : users =  []  } = useQuery( {
        queryKey: ["user"],
        queryFn: async () => {
            const res  = await axiosSecure.get("/users")
        return res.data
        }
    })
    return [users]
};

export default useAdmin;