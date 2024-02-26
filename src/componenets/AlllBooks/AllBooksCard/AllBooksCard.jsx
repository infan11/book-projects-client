
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";
const AllBooksCard = ({book , setBooks}) => {
    const { _id ,  image , name , author ,   rating , category , price } = book;
     const handleAddBook = books =>{
      console.log(books);
     }
    return (
        <div>
          
            <div className=" w-64 h-[550px]  block shadow-xl">
  <figure className="px-2 pt-2">
    <img src={image} alt="Shoes" className="rounded-xl w-64 h-72  " />
  </figure>
  <div className="card-body">
    <h2 className="text-[17px]  font-black text-red-700" >{name}</h2>
    <h2 className="text-[15px]  font-black text-yellow-500">{author}</h2>
    <h2 className="text-[14px]  font-black text-orange-400">{category}</h2>
    <h2 className="text-[14px]  font-black text-black flex items-center gap-2"><FcRating></FcRating>{rating}</h2>
    <h2 className="text-[14px]  font-black text-orange-400 top-52">${price}</h2>
    

    <div className="card-actions">
     {/* <Link to={`/books/${_id}`}> <button className="btn btn-block">Details</button></Link> */}
     <button onClick={() => handleAddBook(book)} className="btn btn-block">Add Book</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllBooksCard;