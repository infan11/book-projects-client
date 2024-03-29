
// import '../Populer/popular.css'
const PopularCard = ({book}) => {
    const {  id,  image, name,category} = book;
    
    
    return (
        <div>
            <div data-aos="zoom-in"
    data-aos-offset="120"
    data-aos-delay="60"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" className="books  card w-80  ">
  <figure className=" image-zoom-container   p-2 px-2">
    <img  src={image} alt="Shoes" className=" h-64 w-64  rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="text-[12px] text-red-500 font-bold">{name}</h2>
    <p className="text-yellow-700 font-bold text-[19px]">{category}</p>
  
    <div className="card-actions">
      <button  className=" btn btn-outline w-full text-bold text-blue-400 ">Pre Order</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default PopularCard;