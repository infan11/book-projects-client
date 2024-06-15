import axios from "axios";


const axiosPublic = axios.create({
    baseURL: "https://book-projects-server-qemx.vercel.app"
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;