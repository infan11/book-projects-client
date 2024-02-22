import Popular from "../Populer/Popular";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className="mx">
          <Banner></Banner>
         <div className="md:max-w-7xl mx-auto ">
         <Popular></Popular>
         </div>
        </div>
    );
}; 
export default Home;