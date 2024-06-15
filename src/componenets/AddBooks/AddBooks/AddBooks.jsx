
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { imageUpload } from "../../Hooks/utils";

const AddBooks = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
  const handleAddBooks = async event => {
    if(user && user.email){
      event.preventDefault();
      const form = event.target;
      const name =  form.name.value;
      const quantity = form.quantity.value;
      const author = form.author.value;
      const shortdescription = form.shortdescription.value;
      const rating = form.rating.value;
      const category = form.category.value;
      const price = form.price.value;
      const image = form.image.files[0];
     const imageData = await imageUpload(image)
     console.log(imageData);
    const booksItem = {
      // booksId : _id,
      email :user.email ,
      image :imageData?.data?.display_url , 
      name,
      quantity,
      author,
      shortdescription,
      rating,
      price ,
      category
      
    }
    
    axiosSecure.post("/books", booksItem)
    .then(res => {
        console.log("Response from server:", res.data);
        if (res.data.insertedId) {
            toast.success('Successfully Add Book');
        }
    })
    
    .catch(error => {
      console.error("Error from server:", error);
      toast.error('Error!');
  });
 

  }
}
    return (
        <div data-aos="zoom-in"
     className="max-w-7xl mx-auto"> 
        <h2 className="text-center  font-bold text-black text-2xl mt-3">ADD YOUR BOOKS</h2>
           <form onSubmit={handleAddBooks} className="card-body">
            {/* start name and image */}
      <div className="grid md:grid-cols-2 gap-2">
      <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-black">Image</span>
          </label>
          <input type="file" name='image' accept='image/*' className=" fromDiv p-3 border text-black    font-bold  " />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-black">Name</span>
          </label>
          <input type="text" placeholder="Book Name" name="name" className="fromDiv p-3 border text-black    font-bold" required />
        </div>
        
      </div>
      {/* end name and image  */}
      {/* start - Quantity of the book and and Author Name */}
      <div className="grid md:grid-cols-2 gap-2">
      <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-black">Quantity of the book</span>
          </label>
          <input type="text" name="quantity" placeholder="Quantity of the book" className="fromDiv p-3 border text-black    font-bold" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-black">Author Name
</span>
          </label>
          <input type="text" placeholder="Author Name" name="author" className="fromDiv p-3 border text-black    font-bold" required />
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
  <select name="category" placeholder="Category" defaultValue={"category"} className="fromDiv p-3 border text-black    font-bold" required>
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
" className="fromDiv p-3 border text-black    font-bold" required />
        </div>
        
      </div>
 {/* end - Quantity of the book and Short description */}

 {/* start Rating [must] and price */}
 <div className="grid md:grid-cols-2 gap-2">
      <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-black">Rating</span>
          </label>
          <input type="text" name="rating" placeholder="Rating" className="fromDiv p-3 border text-black    font-bold" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-black">Price</span>
          </label>
          <input type="text" placeholder="$000" name="price" className="fromDiv p-3 border text-black    font-bold" required />
        </div>
        
      </div>
 {/* end Rating [must] and price */}


        <div className="form-control mt-6">
          <button className="btn btn-outline  bg-blue-500 text-white formInput p-3 border    font-bold">ADDBOOK </button>
        </div>
      </form>
           
        </div>
    );
};

export default AddBooks;