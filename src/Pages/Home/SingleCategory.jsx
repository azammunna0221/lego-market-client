import { useLoaderData } from "react-router-dom";


const SingleCategory = () => {

    const toys = useLoaderData();

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
            {
                toys.items.map(it => <div key={it._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={it.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{it.name}</h2>
                  <p>price: {it.price}</p>
                  <p>price: {it.ratings}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-outline">Buy Now</button>
                  </div>
                </div>
              </div> )
            }
        </div>
    );
};

export default SingleCategory;