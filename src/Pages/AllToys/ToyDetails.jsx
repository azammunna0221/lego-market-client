
import { useLoaderData } from "react-router-dom";


const ToyDetails = () => {

    const singleToy = useLoaderData();
    const { toy, name, email, url, price, rating, quantity, description, } = singleToy;

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="md:w-2/4" src={url} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Toy Name: {toy}</h2>
                    <p>Seller Name: {name}</p>
                    <p>Seller Email: {email}</p>
                    <p>Price: {price}</p>
                    <p>Ratings: {rating}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Descriptions: {description}</p>
                </div>
            </div>


        </div>
    );
};

export default ToyDetails;