import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useBooks from '../../Hooks/useBooks';
import { Link } from 'react-router-dom';

const Search = () => {
  const [alertShown, setAlertShown] = useState(false);
  const [search , setSearch] = useState([])
  const [books , setBooks] = useState([])
  const axiosSecure = useAxiosSecure();
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

    if (books.length === 0) {
      setAlertShown(true);
      toast.error(" Undefined ")
     
    } else {
      setBooks(prevBooks => prevBooks.filter(book => book.name.toLowerCase().includes(keyword)));
      setAlertShown(false); 
    }
  };

  return (
   <Link to={"/allBooks"}>
    <div className="max-w-7xl mx-auto  ">
      <input 
        type="text"
        onChange={handleFilter}
        value={search}
        placeholder='Keyword'
        className='bg-white mb-7 p-3 w-60 border formDiv rounded border-blue-500'
      />
 
      {alertShown && (
        <div className="my-4">
      
          <p className="text-red-500 font-bold">Unavilable</p>
        </div>
      )}
 
      {search && (
        <div className=" ">
          {books.map(book => (
            <div key={book._id} className='gap-3'>
              <div className="flex items-center gap-5">
                <div className="avatar">
                  <div className=" w-32 h-32  ">
                    <img src={book.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{book.name}</div>
                  <div className="text-sm opacity-50">{book.author}</div>
                  <div className="text-sm opacity-50">{book.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </Link>
  );
};

export default Search;
