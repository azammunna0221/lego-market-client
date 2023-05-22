import { Link } from "react-router-dom";


const AllToyTable = ({t}) => {

    const {toy, name, price, rating, quantity, } = t;

    return (
        <tr>
            <td>{name}</td>
            <td>{toy}</td>
            <td>{price}</td>
            <td>{rating}</td>
            <td>{quantity}</td>
            <td className='ml-4'>
                <Link><button className="btn btn-primary mx-auto">View Details</button></Link>
            </td>
        </tr>
    );
};

export default AllToyTable;