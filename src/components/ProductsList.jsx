import './ProductsList.css';
import { products_list } from "../data"
export default function ProductsList() {
    return (
        <>
            <table className='listT able w-2/3 mt-4 border-x-lime-100 ml-3 '>
                <thead>
                    <tr>
                        <th scope='col'>No</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Category</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Discounted Price</th>
                        <th scope='col'>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {products_list.map((item, index) => (
                        <tr key={index} className=' -mt-5 -mb-5'>
                            <td className='h-0'>{index+1}</td>
                            <td className='h-0'>{item.Name}</td>
                            <td className='h-0'>{item.Category}</td>
                            <td className='h-0'>{item.Price}</td>
                            <td className='h-0'>{item.DiscountedPrice}</td>
                            <td className='h-0'>{item.Quantity}</td>
                        </tr>
                    ))} */}

                </tbody>
            </table>
        </>
    )
}