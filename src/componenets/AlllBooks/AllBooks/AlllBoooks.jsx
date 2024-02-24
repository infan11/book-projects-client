import { useEffect, useState } from "react";
import AllBooksCard from "../AllBooksCard/AllBooksCard";
import AllBookBanner from "../AlllBookBanner/AllBookBanner";

const AlllBoooks = () => {
    const [book , setBook ] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/books")
        .then(res => res.json())
        .then(data => setBook(data))
    } , [])
    return (
        <div className="" >   
           <div>
          <AllBookBanner></AllBookBanner>
           </div>
          <div className=" md:max-w-7xl mx-auto">
          <form  className='hover:drop-shadow-2xl   mt-3 lg:bg-white text-black  font-bold lg:w-[1100px] p-6 rounded-md mx-auto  border  lg:grid-cols-4 '>
<input type="text" name='' placeholder='Keyword' className= '  bg-white p-3 w-60 border rounded  border-blue-500   ' />

<select className='bg-white p-3 w-60 border rounded  border-blue-500 lg:ml-6'>
   <option>Category</option>
   <option value={"islamiac Book "}>Islamic Book </option>

</select>

<select className='bg-white p-3 w-60 border rounded  border-blue-500  lg:ml-6'>
   <option>Writer</option>
   <option value={"Arif Azad"}>Arif Azad </option>

</select>

<button className="btn btn-outline text-blue-500 font-bold text-xl w-60 lg:ml-6  ">Search</button>
</form>
          <div className=" mt-3 grid md:grid-cols-4 ml-16 gap-6 ">
            {
                book.map(books => <AllBooksCard key={books._id} books={books}></AllBooksCard>)
            }
           </div>
          </div>
        </div>
    );
};

export default AlllBoooks;