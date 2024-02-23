import { useEffect, useState } from "react";
import AllBooksCard from "../AllBooksCard/AllBooksCard";

const AlllBoooks = () => {
    const [book , setBook ] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/books")
        .then(res => res.json())
        .then(data => setBook(data))
    } , [])
    return (
        <div className=" max-w-7xl mx-auto" >   
           <div>
            {/* banner */}
           </div>
           <div className="grid md:grid-cols-4 gap-6 ">
            {
                book.map(books => <AllBooksCard key={books._id} books={books}></AllBooksCard>)
            }
           </div>
        </div>
    );
};

export default AlllBoooks;