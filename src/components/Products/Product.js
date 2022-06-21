import { useDispatch } from 'react-redux';
import styles from './Product.module.css'
import { cartActions } from '../../store/redux-store';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Product = (props) => {

    const price = props.price;

    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();
 
    const addToCartHandler = (event) => {
        event.preventDefault();

        dispatch(cartActions.add({id: props.id, name: props.name, price: price, pieces: 1}));
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
        }, 2000);
    }

    return (
        <>
        <div className="col-md-3 d-flex justify-content-center mt-4">
            <div className={`${styles.product_box} position-relative`}>
                <div className={styles.goto}>
                        <button className="btn btn-primary" type="button" onClick={addToCartHandler}>Add to Cart</button>
                        <Link to={`/products/${props.id}`} className="btn btn-secondary mt-3">See more</Link>
                </div>
                <img src={props.img ? require(`../../assets/whey-protein.png`) : null} className={styles.prod_img} alt=""/>
                <div className={`${styles.prod_shadow} d-flex justify-content-center align-items-end`}>
                    <div className={`row w-100`}>
                        <div className="col-8">
                            <h5 className='m-0'>{props.name}</h5>
                        </div>
                        <div className="col-4 d-flex align-items-end justify-content-end">
                            <p className='m-0 text-end'>{price} $</p>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
        <Modal show={showModal}/>
        </>  
    )
}

export default Product