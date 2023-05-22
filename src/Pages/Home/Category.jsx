import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Category = () => {

    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch("https://lego-toy-market-server-azammunna0221.vercel.app/category")
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    return (
        <div>
            <p className=" text-3xl font-extrabold text-center m-12">SHOP BY CATEGORY</p>
            <p className=" font-mono text-center" >Explore Category</p>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {
                    category.map(cat => <div
                        key={cat._id}
                    >
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={cat.category_img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{cat.category}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/category/${cat._id}`}><button  className="btn btn-primary">Buy Now</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Category;