import './NavBar.css';
import shop from '../assets/shop.jpg';

const NavBar = () => {
    return <>

        <div className="header">
            <span className='shop_image'>
                <img src={shop} width="50px" />
            </span>
            <section>
                Account
            </section>
        </div>

    </>
}

export default NavBar;