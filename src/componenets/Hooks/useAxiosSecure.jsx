//axiosSecure create
import axios from 'axios';
const axiosSecure = axios.create({
    baseURL:"https://book-projects-server-qemx.vercel.app"
})
const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;