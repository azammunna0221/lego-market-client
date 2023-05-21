


const AddToy = () => {

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const toy =form.toy.value;
        const url = form.url.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const clients = { name, email, toy, url, price, rating, quantity, description };
        console.log(clients);

        fetch("http://localhost:3000/clients", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(clients),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                 if (data.insertedId) {
                     alert("User Added Successfully!")
                     form.reset();
                 }
            })
    }


    return (
        <div>
            <h2 className=" text-center font-extrabold m-10 text-3xl">ADD A TOY THAT YOU WANT</h2>
            <form onSubmit={handleSubmit}>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card grid grid-cols-2 w-full shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="url" placeholder="Photo URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="text" name="toy" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>

                            </div>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name="price" placeholder="$" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Ratings</span>
                                    </label>
                                    <input type="text" name="rating" placeholder="Ratings" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available Quantity</span>
                                    </label>
                                    <input type="text" name="quantity" placeholder="quantity" className="input input-bordered" />
                                </div>
                                <div className="form-control col-span-2">
                                    <label className="label">
                                        <span className="label-text">Details Description</span>
                                    </label>
                                    <input type="text" name="description" placeholder="Description" className="input input-bordered" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddToy;