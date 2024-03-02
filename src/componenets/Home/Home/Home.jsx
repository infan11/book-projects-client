import Author from "../Author/Author";
import Popular from "../Populer/Popular";
import Patnar from "../patnar/Patnar";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className="mx">
          <Banner></Banner>
         <div className="md:max-w-7xl mx-auto ">
         <Popular></Popular>
         <Author></Author>
       
         </div>
         <div>
         <Patnar></Patnar>
         </div>
        </div>
    );
}; 
export default Home;