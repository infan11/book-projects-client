import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../componenets/Hooks/useAuth";
import ContentLoader from "react-content-loader";

const PrivateRoutes = ({children}) => {
    const { user , loading } = useAuth();
    const location = useLocation(); 
 if(loading){
    return <ContentLoader
    speed={1}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#ecebeb"
    foregroundColor="#ecebeb"
   className=" md:max-w-7xl md:w-80 lg:w-full  lg:min-h-screen"
  >
    <rect x="48" y="8" rx="3" ry="3" width="88" height="6" /> 
    <rect x="48" y="26" rx="3" ry="3" width="52" height="6" /> 
    <rect x="0" y="56" rx="3" ry="3" width="410" height="6" /> 
    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" /> 
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" /> 
    <circle cx="20" cy="20" r="20" />
  </ContentLoader>
 } 
 if(!user){
  return <Navigate to={"/login"} state={{from: location}} replace></Navigate>
 } 
 return children

  
};

export default PrivateRoutes;