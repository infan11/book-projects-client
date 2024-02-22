import { FcRating } from "react-icons/fc";
import { TbCurrencyTaka } from "react-icons/tb";
// import '../Populer/popular.css'
const PopularCard = ({book}) => {
    const {    id,  image, Name, Writer_Name,rating,Category, price} = book;
    return (
        <div>
            <div  className="books  card w-80 ">
  <figure className="p-2 px-2">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="text-xl text-red-500 font-bold">{Name}</h2>
    <h2 className="card-xl text-black">{Writer_Name}</h2>
    <p className="text-yellow-900">{Category}</p>
    <p className="text-yellow-600 flex items-center gap-2 font-bold"><FcRating />{rating}</p>
    <p className="font-bold text-red-500 text-cl flex  items-center"><TbCurrencyTaka  />{price}</p>
    <div className="card-actions">
      <button  className="btn btn-outline w-full">Pre Order</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default PopularCard;