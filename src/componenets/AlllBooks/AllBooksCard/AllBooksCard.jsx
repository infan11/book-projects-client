

const AllBooksCard = ({books}) => {
    const {_id , email , image , name , quantity , author , shortdescription ,  rating ,  price} = books;
     
    return (
        <div>
            <div className="card w-80 shadow-xl">
  <figure className="px-2 pt-2">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <h2 className="card-title">{author}</h2>
    <h2 className="card-title">{rating}</h2>
    <h2 className="card-title">{price}</h2>
    
    <p>{shortdescription}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllBooksCard;