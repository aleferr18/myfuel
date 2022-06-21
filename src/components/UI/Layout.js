import Logo from '../../assets/myfuel.svg'
import styles from './Layout.module.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartIcon from '../../assets/shopping-cart.png'
import ShippingIcon from '../../assets/free-shipping.png'
import { useEffect, useState } from 'react';
import Burger from '../../assets/menu.svg'


const Layout = (props) => {

    const cart = useSelector(state => state.cart);
    const totPrice = useSelector(state => state.totPrice);
    const state = useSelector(state => state);

    const [showMenuResp, setShowMenuResp] = useState(false);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state));
    }, [state])


    return (
        <>
            <header id={styles.header}>
                <div className={`${styles.header_top} d-none d-md-flex`}>
                    <img src={ShippingIcon} className={styles.shipping_icon} />Free shipping for orders over 50$</div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 d-flex align-items-center">
                            <Link to="/" className='d-flex align-items-center'>
                                <img src={Logo} id={styles.logo} alt="" />
                            </Link>
                        </div>
                        <div className="col-6 d-flex align-items-center justify-content-end">
                            <nav>
                                <ul className={styles.menu_items}>
                                    <li className='d-none d-md-block'>
                                        <Link to="/"><strong>Supplements</strong></Link>
                                    </li>
                                    <li className={`${styles.dropdown_button} d-none d-md-block`}>
                                        <strong>Categories</strong>
                                        <ul id={styles.categories_list} className={`${styles.cart_table} list-unstyled`}>
                                            <li className="row align-items-center justify-content-center">
                                                <Link to="/categories/muscle-mass" className={styles.small_category}>Gain Muscle Mass</Link>
                                            </li>
                                            <li className="row align-items-center justify-content-center">
                                                <Link to="/categories/weight-loss" className={styles.big_category}>Weight Loss</Link>
                                            </li>
                                            <li className="row align-items-center justify-content-center">
                                                <Link to="/categories/health-wellbeing" className={styles.small_category}>Health {'&'} Wellbeing</Link>
                                            </li>
                                            <li className="row align-items-center justify-content-center">
                                                <Link to="/categories/weight-maintenance" className={styles.small_category}>Weight Maintenance</Link>
                                            </li>
                                            <li className="row align-items-center justify-content-center">
                                                <Link to="/categories/vitamins-minerals" className={styles.small_category}>Vitamins {'&'} Minerals</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={`${styles.dropdown_button} me-2`}>
                                        <Link to="/checkout">
                                           <img src={CartIcon} className={styles.cart_icon}alt="" /> <span>{cart.length}</span>
                                        </Link> 
                                        <ul className={`${styles.cart_table} list-unstyled`}>
                                            {cart.length > 0 ? cart.map((item, i) => { 
                                                
                                                const amount = item.price * item.pieces;

                                                return <li key={item.id} className="row align-items-center justify-content-center">
                                                                <div className="col-md-6">
                                                                    <h6><strong>{item.name}</strong></h6>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <p className='text-end'>{item.price}$  x {item.pieces} </p>
                                                                </div>
                                                        </li>
                                            }) : null}
                                            {cart.length > 0 ? <li className='flex-column mt-4'>
                                               <h5>Total: {totPrice.toFixed(2)} $ </h5>
                                               <Link to="/checkout" className='btn btn-primary text-white mt-4'>Checkout</Link>
                                            </li> : <p>No items.<br/>What are you waiting for?</p>}
                                        </ul>
                                    </li>
                                    <li><img src={Burger} id={styles.burger_menu} className="d-md-none" onClick={() => setShowMenuResp(true)}/></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <div id={styles.menu_responsive} className={`${showMenuResp ? `${styles.active}` :  ''} d-flex d-md-none align-items-center justify-content-center`}>
                <div id={styles.close_menu} onClick={() => setShowMenuResp(false)}>X</div>
                <nav className={`${styles.nav_menu} ${styles.active}`}>
                                    <ul>
                                        <li>
                                            <Link to="/" onClick={() => setShowMenuResp(false)}><strong>Supplements</strong></Link>
                                        </li>
                                        <li>
                                            <strong>Categories</strong>
                                            <ul className="list-unstyled">
                                                <li className="row mt-2 align-items-center justify-content-center">
                                                    <Link to="/categories/muscle-mass" className={styles.small_category} onClick={() => setShowMenuResp(false)}>Gain Muscle Mass</Link>
                                                </li>
                                                <li className="row align-items-center justify-content-center">
                                                    <Link to="/categories/weight-loss" className={styles.big_category} onClick={() => setShowMenuResp(false)}>Weight Loss</Link>
                                                </li>
                                                <li className="row align-items-center justify-content-center">
                                                    <Link to="/categories/health-wellbeing" className={styles.small_category} onClick={() => setShowMenuResp(false)}>Health {'&'} Wellbeing</Link>
                                                </li>
                                                <li className="row align-items-center justify-content-center">
                                                    <Link to="/categories/weight-maintenance" className={styles.small_category} onClick={() => setShowMenuResp(false)}>Weight Maintenance</Link>
                                                </li>
                                                <li className="row align-items-center justify-content-center">
                                                    <Link to="/categories/vitamins-minerals" className={styles.small_category} onClick={() => setShowMenuResp(false)}>Vitamins {'&'} Minerals</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                </nav>
            </div>
            <main>
                {props.children}
            </main>
{/*             <footer id={styles.footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            Info
                        </div>
                        <div className="col-md-4 d-flex flex-column align-items-center">
                            <h5>Categories</h5>
                            <ul className="list-unstyled">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="col-md-4 d-flex justify-content-end">
                            Logo
                        </div>
                    </div>
                </div>
            </footer> */}
        </>
    )
}

export default Layout;