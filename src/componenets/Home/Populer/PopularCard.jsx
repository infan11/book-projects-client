import { FcRating } from "react-icons/fc";
import { TbCurrencyTaka } from "react-icons/tb";
import '../Populer/popular.css'
const PopularCard = ({book}) => {
    const {    id,  image, Name, Writer_Name,rating,Category, price} = book;
    return (
        <div>
            <div  className="books  card w-80  ">
  <figure className=" image-zoom-container   p-2 px-2">
    <img  src={image} alt="Shoes" className=" image-zoom h-80 w-64  rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="text-[12px] text-red-500 font-bold">{Name}</h2>
    <h2 className="card text-[12px] text-black">{Writer_Name}</h2>
    <p className="text-yellow-900 text-[10px]">{Category}</p>
    <p className="text-yellow-600 flex items-center gap-2 font-bold text-[10px]"><FcRating />{rating}</p>
    <p className="font-bold text-red-500 text-[10px] flex  items-center"><TbCurrencyTaka  />{price}</p>
    <div className="card-actions">
      <button  className=" image-zoom btn btn-outline w-full bg-blue-500 text-bold text-white">Pre Order</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default PopularCard;