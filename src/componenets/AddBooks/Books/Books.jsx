import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Books = () => {
    const id = useParams();
    const [books , setBooks] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/books/${id}`)
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    const { name } = books;
    return (
        <div>
            <p >{books.name}</p>
        </div>
    );
};

export default Books;