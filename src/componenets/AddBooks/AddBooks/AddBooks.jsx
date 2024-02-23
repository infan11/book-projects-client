
const AddBooks = () => {
  const handleAddBooks = event => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;

  }
    return (
        <div className="max-w-7xl mx-auto"> 
        <h2 className="text-center  font-bold text-black text-2xl mt-3">ADD YOUR BOOKS</h2>
           <form className="card-body">
            {/* start name and image */}
      <div className="grid md:grid-cols-2 gap-2">
      <div className="form-control">
          <label className="label">
            <span className="label-text font-bold text-black">Image</span>
          </label>
          <input type="text" name="image" placeholder="http://photo.com" className="input input-bordered" required />
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
          <input type="text" name="- Quantity" placeholder="Quantity of the book" className="input input-bordered" required />
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
          {/* <input type="text" name="category" placeholder="Category" className="input input-bordered" required /> */}
  

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
          <input type="text" name="rating" placeholder="rating" className="input input-bordered" required />
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