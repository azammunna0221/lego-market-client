import { GrUpdate } from 'react-icons/gr';
import { ImCross } from 'react-icons/im';

const MyToysTable = ({ client }) => {

    const { _id, name, email, url, price, rating, quantity, description, } = client;


    return (
        <tr>
            <th>{_id}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{url}</td>
            <td>{price}</td>
            <td>{rating}</td>
            <td>{quantity}</td>
            <td>{description}</td>
            <td className='flex flex-row gap-4'>
                <GrUpdate />
                <ImCross/>
            </td>
        </tr>
    );
};

export default MyToysTable;