
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AddBooks = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
  const handleAddBooks = event => {
    if(user && user.email){
      event.preventDefault();
      const form = event.target;
      const image = form.image.value;
      const name =  form.name.value;
      const quantity = form.quantity.value;
      const author = form.author.value;
      const shortdescription = form.shortdescription.value;
      const rating = form.rating.value;
      const price = form.price.value;
  
    const booksItem = {
      // booksId : _id,
      email :user.email ,
      image ,
      name,
      quantity,
      author,
      shortdescription,
      rating,
      price ,
      
    }
    
    axiosSecure.post("/books", booksItem)
    .then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
         toast.success('Successfully toasted!')
        }
        
    })
    
    .catch( error => {toast.error('error!')} )
    }
 
 

  }
    return (
        <div className="max-w-7xl mx-auto"> 
        <h2 className="text-center  font-bold text-black text-2xl mt-3">ADD YOUR BOOKS</h2>
           <form onSubmit={handleAddBooks} className="card-body">
            {/* start name and image */}
      <div className="grid md:grid-cols-2 gap-2">
      <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-black">Image</span>
          </label>
          <input type="text" name="image"  placeholder="http://photo.com" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-black">Name</span>
          </label>
          <input type="text" placeholder="Book Name" name="name" className="input input-bordered" required />
        </div>
        
      </div>
      {/* end name and image  */}
      {/* start - Quantity of the book and and Author Name */}
      <div className="grid md:grid-cols-2 gap-2">
      <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-black">Quantity of the book</span>
          </label>
          <input type="text" name="quantity" placeholder="Quantity of the book" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-black">Author Name
</span>
          </label>
          <input type="text" placeholder="Author Name" name="author" className="input input-bordered" required />
        </div>
        
      </div>
 {/* start - Category (for example - Novel, Thriller, History, Drama, Sci-Fi, etc.) and and Short description
 */}
 <div className="grid md:grid-cols-2 gap-2">
      <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-black">Category (for example - Novel, Thriller, History, Drama, Sci-Fi, etc.)</span>
          </label>
          {/* <input type="text"  /> */}
  <select name="category" placeholder="Category" defaultValue={"category"} className="input input-bordered" required>
    <option value={"category"}>Category</option>
    <option value={"Novel"}>Novel</option>
    <option value={"Thriller"}>Thriller</option>
    <option value={"History"}>History</option>
    <option value={"Drama"}>Drama</option>
    <option value={"Sci-fi"}>Sci-fi</option>
  </select>
 
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-black">Short description
</span>
          </label>
          <input type="text" name="shortdescription" placeholder="Short description
" className="input input-bordered" required />
        </div>
        
      </div>
 {/* end - Quantity of the book and Short description */}

 {/* start Rating [must] and price */}
 <div className="grid md:grid-cols-2 gap-2">
      <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-black">Rating</span>
          </label>
          <input type="text" name="rating" placeholder="Rating" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-black">Price</span>
          </label>
          <input type="text" placeholder="$200" name="price" className="input input-bordered" required />
        </div>
        
      </div>
 {/* end Rating [must] and price */}


        <div className="form-control mt-6">
          <button className="btn btn-primary bg-blue-500 font-bold text-xl text-white">ADD </button>
        </div>
      </form>
           
        </div>
    );
};

export default AddBooks;