import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyToysTable from "./MyToysTable";


const MyToys = () => {

    const clientsLoader = useLoaderData();
    const [clients, setClients] = useState(clientsLoader);
    
    const handleDelete = id =>{
        const proceed = confirm("Do you want to remove this item?")
        if(proceed){
            fetch(`https://lego-toy-market-server-azammunna0221.vercel.app/clients/${id}`,
            {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert("Deleted Successfully")
                    const remaining = clients.filter(client => client._id !== id);
                    setClients(remaining);
                }
            })
        }
    }


    return (
        <div>
            <p className=" text-2xl font-bold">Total clients: {clientsLoader.length}</p>
            <div className="overflow-x-auto">
                        <table className="table table-compact w-full my-12">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Seller Name</th>
                                    <th>Seller Email</th>
                                    <th>Toy Name</th>
                                    <th>Picture URL</th>
                                    <th>Price</th>
                                    <th>Ratings</th>
                                    <th>Quantity</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    clients.map( client => <MyToysTable
                                    key = {client._id}
                                    client = {client}
                                    handleDelete = {handleDelete}
                                    ></MyToysTable>)
                                }
                            </tbody>
                        </table>
                    </div>
        </div>
    );
};

export default MyToys;