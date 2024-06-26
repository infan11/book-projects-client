//axiosSecure create
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL:"https://book-projects-server-qemx.vercel.app"
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
const {logout} = useAuth();
    axiosSecure.interceptors.request.use(function (config) {
     const token = localStorage.getItem("access-token")
        console.log("request stopped by interceptor" , token)
        return config;
    },function (error) {
        // Do something with request error
        return Promise.reject(error);
      });
    // insterseptor 401 and 403 status 
    axiosSecure.interceptors.response.use(function(response) {
        return response
    } , async (error ) => {
        const status = error.response.status;
        console.log("status error in the interseptor" , status);
        if(status === 401 || status === 403){
             await logout();
             navigate("/login")
        }
        return Promise.reject(error)
    })


    return axiosSecure
};

export default useAxiosSecure;