import { Link } from 'react-router-dom';
import  image from './../../../assets/banner/father-reading-book-son.jpg'

const AllBookBanner = () => {
    return (
        <div className='md:w-80 lg:w-full mx-auto  '>
        <div className="hero  lg:h-[500px]    " style={{backgroundImage: `url(${image})`}}>
<div className="hero-overlay  bg-opacity-80"></div>

<div className="text-left -ml-[1100px]">
  <h1 className="mb-5 md:xl mt-4   lg:text-3xl  text-white  font-bold">BOOKS</h1>
  <p className="mb-5  font-bold text-white  "><Link  to={"/"}>HOME </Link> / <Link to={"/addBooks"}>ADD BOOKS</Link></p>


</div>

</div>

<div className=' '>




</div>
    </div>
    );
};

export default AllBookBanner;