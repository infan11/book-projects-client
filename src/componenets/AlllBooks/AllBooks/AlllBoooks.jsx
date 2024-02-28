import { useEffect, useState } from "react";
import AllBooksCard from "../AllBooksCard/AllBooksCard";
import AllBookBanner from "../AlllBookBanner/AllBookBanner";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Books from "../../AddBooks/Books/Books";


const AlllBoooks = () => {
    const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
const axiosSecure = useAxiosSecure()
  useEffect(() => {
    axiosSecure.get("/books")
      .then(res => {
        setBooks(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleFilter = (event) => {
    const keyword = event.target.value.toLowerCase();
    setSearch(keyword);
    setBooks(prevBooks => prevBooks.filter(book => book.name.toLowerCase().includes(keyword)));
  };

    return (
        <div className="" >   
           <div>
          <AllBookBanner></AllBookBanner>
           </div>
          <div className=" md:max-w-7xl mx-auto">
          <form className='hover:drop-shadow-2xl mt-3 lg:bg-white text-black font-bold lg:w-[1100px] p-6 rounded-md mx-auto border lg:grid-cols-4'>
      <input
        type="text"
        onChange={handleFilter}
        value={search}
        placeholder='Keyword'
        className='bg-white p-3 w-60 border rounded border-blue-500'
      />

      <select className='bg-white p-3 w-60 border rounded border-blue-500 lg:ml-6'>
        <option>Category</option>
        <option value={"islamiac Book "}>Islamic Book</option>
      </select>

      <select className='bg-white p-3 w-60 border rounded border-blue-500 lg:ml-6'>
        <option>Writer</option>
        <option value={"Arif Azad"}>Arif Azad</option>
      </select>

      <button className="btn btn-outline text-blue-500 font-bold text-xl w-60 lg:ml-6 ">Search</button>
    </form>
          <div className=" mt-3 grid md:grid-cols-4 ml-7 gap-6 ">
            {
                books.map(book => <AllBooksCard key={book.id} book={book} setBooks={setBooks}></AllBooksCard>   )
            }
           </div>
          
          </div>
        </div>
    );
};

export default AlllBoooks;