import { useLoaderData } from "react-router-dom";
import AllToyTable from "./AllToyTable";



const AllToys = () => {

    const toys = useLoaderData();
    

    return (
        <div>
            <p className=" text-2xl font-bold">Total Toys: {toys.length}</p>
            <div className="overflow-x-auto">
                        <table className="table table-compact w-full my-12">
                            <thead>
                                <tr>
                                    <th>Seller Name</th>
                                    <th>Toy Name</th>
                                    <th>Price</th>
                                    <th>Ratings</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    toys.map(t => <AllToyTable
                                    key={t._id}
                                    t={t}
                                    >
                                    </AllToyTable>)
                                }
                            </tbody>
                        </table>
                    </div>
        </div>
    );
};

export default AllToys;