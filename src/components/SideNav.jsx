import { NavLink } from 'react-router-dom';
import './SideNav.css';

const list = [
    { name: 'Products List',to: '/products' },
    { name: 'Add Product' ,to:'/add-product'},

];

const SideNav = () => {

    return <>
        <aside className='h-[44.5rem]  bg-white text-black md:w-72 border-r-3  px-3 py-2 border-x-black-950'>
            <ul className='mt-6'>
                {list.map((listItem,index) => {
                    return <span key={index} >
                        <li className=' cursor-pointer  mb-4 border-b-black-950  px-1 py-1 text-center rounded
                        border-solid border-2 border-t-neutral-50 border-gray-500 '>
                            <NavLink className="no-underline text-[#0a0a0a]" to={listItem.to}>{listItem.name}</NavLink>
                        </li>
                    </span>
                })
                }
            </ul>
        </aside>
    </>
}

export default SideNav;