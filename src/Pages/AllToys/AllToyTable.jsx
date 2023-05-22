import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const AllToyTable = ({t}) => {
    const { user} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleUser = () =>{
        alert("Please Login To Continue");
        navigate('/login');
    }

    const {_id, toy, name, price, rating, quantity, } = t;

    return (
        <tr>
            <td>{name}</td>
            <td>{toy}</td>
            <td>{price}</td>
            <td>{rating}</td>
            <td>{quantity}</td>
            <td className='ml-4'>
                {
                    user? 
                    <Link to={`/details/${_id}`} ><button  className="btn btn-primary mx-auto">View Details</button></Link> :
                    <button onClick={handleUser}>View Details</button>
                }
            </td>
        </tr>
    );
};

export default AllToyTable;