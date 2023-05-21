import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyToysTable from "./MyToysTable";


const MyToys = () => {

    const clientsLoader = useLoaderData();
    const [clients, setClients] = useState(clientsLoader);
    console.log(setClients);
    //const {_id, name, email, url, price, rating, quantity, description,} = clientsLoader;

    return (
        <div>
            <p className=" text-2xl font-bold">Total clients: {clientsLoader.length}</p>
            <div className="overflow-x-auto">
                        <table className="table table-compact w-full">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Picture URL</th>
                                    <th>Price</th>
                                    <th>Ratings</th>
                                    <th>Quantity</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    clients.map( client => <MyToysTable
                                    key = {client._id}
                                    client = {client}
                                    ></MyToysTable>)
                                }
                            </tbody>
                        </table>
                    </div>
        </div>
    );
};

export default MyToys;