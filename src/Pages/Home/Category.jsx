import { useEffect, useState } from "react";



const Category = () => {

    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/category")
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    return (
        <div>
            <p className=" text-3xl font-bold m-8">SHOP BY CATEGORY</p>
            <p>total: {category.length}</p>
            <div className="grid grid-cols-3">
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
                                    <button className="btn btn-primary">Buy Now</button>
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