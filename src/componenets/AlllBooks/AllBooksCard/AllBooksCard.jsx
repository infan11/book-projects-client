

const AllBooksCard = ({books}) => {
    const {_id , image , name , author ,   rating , category } = books;
     
    return (
        <div>
            <div className=" w-64 h-[550px]  block shadow-xl">
  <figure className="px-2 pt-2">
    <img src={image} alt="Shoes" className="rounded-xl w-64 h-72 " />
  </figure>
  <div className="card-body">
    <h2 className="text-[17px]  font-black text-red-700" >{name}</h2>
    <h2 className="text-[15px]  font-black text-yellow-500">{author}</h2>
    <h2 className="text-[14px]  font-black text-black">{rating}</h2>
    <h2 className="text-[14px]  font-black text-orange-400">{category}</h2>
    <div className="card-actions">
      <button className="btn btn-block">Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllBooksCard;