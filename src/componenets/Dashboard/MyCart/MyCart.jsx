import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useBooks from '../../Hooks/useBooks';

const MyCart = () => {
    const [bookCart] = useBooks();
    const totalPrice =  bookCart.reduce((total , item  )  => total + item.price  , 0 ) 

    
    return (
        <div className='  mt-3'>
           <div className='md:flex fromDiv font-bold justify-evenly text-blue-500'>
           <p>Your Order : {bookCart.length}</p>
            <p > Total : ${totalPrice}</p>
           </div>
          <div className='gap-4'>
            {
                bookCart.map(BooksCart =>   <div key={BooksCart.id} className="hero border-2 mt-4 border-red-400 fromDiv">
                <div className="hero-content flex-col lg:flex-row">
                  <img src={BooksCart.image} className="w-60 h-80 fromDiv rounded-lg shadow-2xl" />
                  <div>
                    <h1 className="text-5xl w-full font-bold text-blue-500">{BooksCart.name}</h1>
                    <p className="py-6 text-yellow-500  text-2xl  font-bold ">{BooksCart.price}</p>
                    <button className="btn btn-outline text-red-600 w-full"> Delete </button>
                  </div>
                </div>
              </div>)
            }
          </div>
        </div>
    );
};

export default MyCart;