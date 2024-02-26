import imageA from './../../../assets/author/team-1-1-400x400.jpg'
import imageB from './../../../assets/author/team-3-400x400.jpg'
import imageC from './../../../assets/author/testimonial-2.png'
import imageD from './../../../assets/author/testimonial2-1.png'
const Author = () => {
    return (
        <div>
            <h3 className='font-bold text-4xl mb-4'>Checkout our featured author</h3>
            <div className='grid md:grid-cols-4 md:ml-6 gap-5'>
                <div className='w-[300px]   text-black'> 
                    <img src={imageD} className=' rounded-lg h-80' alt="" />
                    <div className=' flex justify-between  items-center text-black text-xl  font-bold'>
                    <p>John Doe</p> 
                    <p>4 books</p>
                    </div >
                    <p>Author & Writter</p>
                     
                </div>
                <div className='w7w-[300px]0  text-black'> 
                    <img src={imageB} className=' rounded-lg h-80' alt="" />
                    <div className=' flex justify-between  items-center text-black text-xl  font-bold'>
                    <p>Wotson</p> 
                    <p>7 books</p>
                    </div >
                    <p>Author & Writter</p>
                     
                </div>
                <div className='w7w-[300px]0  text-black'> 
                    <img src={imageC} className=' rounded-lg h-80' alt="" />
                    <div className=' flex justify-between  items-center text-black text-xl  font-bold'>
                    <p>Jeck</p> 
                    <p>10 books</p>
                    </div >
                    <p>Author & Writter</p>
                     
                </div>
                <div className='w7w-[300px]0  text-black'> 
                    <img src={imageA} className=' rounded-lg h-80' alt="" />
                    <div className=' flex justify-between  items-center text-black text-xl  font-bold'>
                    <p>Jony</p> 
                    <p>3 books</p>
                    </div >
                    <p>Author & Writter</p>
                     
                </div>
            </div>
        </div>
    );
};

export default Author;