import image from './../../../../assets/banner/grandfather-grandson-reading-book-together.jpg'

const Banner = () => {
    return (
        <div className='md:w-80 lg:w-full mx-auto '>
            <div className="hero  lg:h-[500px]    " style={{backgroundImage: `url(${image})`}}>
  <div className="hero-overlay  bg-opacity-80"></div>
  <div className="hero-content text-center ">
    <div className="">
      <h1 className="mb-5 md:xl mt-4   lg:text-3xl   font-bold">Get Your New Book With Best Price Find Your Book Now</h1>
      <p className="mb-5  font-bold hidden md:block   ">
Books are windows to diverse worlds, sparking imagiventures.nation, knowledge, and empathy. They transcend time, offering timeless wisdom and fostering lifelong learning adfont-mono </p>
<form  className='   lg:bg-white text-black  font-bold lg:w-[1100px] p-6 rounded-md mx-auto  border  lg:grid-cols-4 '>
  <input type="text" name='' placeholder='Keyword' className='bg-white p-2 w-60 border-2   ' />
   
   <select className='bg-white p-2 w-60 border-2 lg:ml-6'>
       <option>Category</option>
       <option value={"islamiac Book "}>Islamic Book </option>

   </select>

   <select className='bg-white p-2 w-60 border-2  lg:ml-6'>
       <option>Writer</option>
       <option value={"Arif Azad"}>Arif Azad </option>

   </select>

   <button className="btn btn-outline text-green-500 font-bold text-xl w-60 lg:ml-6  ">Search</button>
</form>
    
    </div>
  </div>
</div>

<div className=' '>
   

    

 </div>
        </div>



    );
};

export default Banner;