

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
// image 
import imageA from '../../../assets/patnar/image1.jpg'
import imageB from '../../../assets/patnar/image2.jpg'
import imageC from '../../../assets/patnar/image3.jpg'
import imageD from '../../../assets/patnar/image4.jpg'
import imageE from '../../../assets/patnar/image5.jpg'
const Patnar = () => {
    
    return (
        <div className='w-full pt-9  mr-8 p-20 bg-slate-100'>
            <div className= "    ">
              <div>
              <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div  data-aos="zoom-in"
     className="   mt-28 w-96 bg-white fromDivNav rounded-xl relative">
  <figure><img src={imageA} className='w-[180px] fromDiv  mx-auto border-2 border-blue-700 rounded-full h-44 -top-24 ml-20 absolute'   alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl font-bold  mt-6 text-black text-center ">Mohammad Osman </h2>
    <h2 className="text-center font-bold  text-black">Patner, Book Shop</h2>
    <p className='text-center text-black'>
In the quiet corner of the library, my book partner and I immersed ourselves in a shared world of stories </p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div data-aos="zoom-in"
    className="   mt-28 w-96 bg-white fromDivNav rounded-xl relative">
  <figure><img src={imageB} className='w-[180px] fromDiv  mx-auto border-4 border-blue-700 rounded-full h-44 -top-24 ml-20 absolute'   alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl font-bold  mt-6 text-black text-center ">Mohammad Infan </h2>
    <h2 className="text-center font-bold  text-black">Patner, Book Shop</h2>
    <p className='text-center text-black'>
In the quiet corner of the library, my book partner and I immersed ourselves in a shared world of stories </p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div data-aos="zoom-in"
     className="   mt-28 w-96 bg-white fromDivNav rounded-xl relative">
  <figure><img src={imageC} className='w-[180px] fromDiv  mx-auto border-4 border-blue-700 rounded-full h-44 -top-24 ml-20 absolute'   alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl font-bold  mt-6 text-black text-center ">Mohammad Jioun </h2>
    <h2 className="text-center font-bold  text-black">Patner, Book Shop</h2>
    <p className='text-center text-black'>
In the quiet corner of the library, my book partner and I immersed ourselves in a shared world of stories </p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div data-aos="zoom-in"
     className="   mt-28 w-96 bg-white fromDivNav rounded-xl relative">
  <figure><img src={imageD} className='w-[180px] fromDiv  mx-auto border-4 border-blue-700 rounded-full h-44 -top-24 ml-20 absolute'   alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl font-bold  mt-6 text-black text-center ">Mohammad Jito </h2>
    <h2 className="text-center font-bold  text-black">Patner, Book Shop</h2>
    <p className='text-center text-black'>
In the quiet corner of the library, my book partner and I immersed ourselves in a shared world of stories </p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div data-aos="zoom-in"
     className="   mt-28 w-96 bg-white fromDivNav rounded-xl relative">
  <figure><img src={imageE} className='w-[180px] fromDiv  mx-auto border-4 border-blue-700 rounded-full h-44 -top-24 ml-20 absolute'   alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl font-bold  mt-6 text-black text-center ">Mohammad Jito </h2>
    <h2 className="text-center font-bold  text-black">Patner, Book Shop</h2>
    <p className='text-center text-black'>
In the quiet corner of the library, my book partner and I immersed ourselves in a shared world of stories </p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div></SwiperSlide>


  
        
      </Swiper>
              </div>
            </div>
        </div>
    );
};

export default Patnar;