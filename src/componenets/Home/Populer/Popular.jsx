
import { useState } from 'react';
import PopularCard from './PopularCard';
 
const Popular = () => {
   const [books , setBooks ] = useState([]);
   fetch("/books.json")
   .then(res =>res.json())
   .then(data => setBooks(data))
    return (
        <div>
            <div>
             <h2 className=" lg:ml-9 mt-4 text-3xl font-bold text-h font-mono text-black">Popular Books in BookShop</h2>
             <div className='grid md:grid-cols-2  mb-5'>
                <p className='mb-2 lg:ml-9 text-black font-bold'>Journey to Faith" explores the profound teachings of Islam, offering spiritual insights, fostering peace, and guiding readers towards enlightenment and virtue.</p>
                <button className='bg-blue-600 text-white p-2 w-44 font-bold text-xl  rounded-xl lg:ml-[420px]'>Browse all Books</button>
             </div>
            </div>
            <div  className=' md:max-w-7xl  grid md:grid-cols-4 md:ml-10 '>
           {
             books.map(book => <PopularCard key={book.id} book={book}></PopularCard> )
           }
            
            </div>
        </div>
    );
};

export default Popular;