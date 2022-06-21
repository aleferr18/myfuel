import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from './Modal.module.css'
import { Link } from "react-router-dom";

const Modal = (props) => {

    const modalContent = props.show ? <div className={styles.modal_container}>
    <div className={`${styles.modal} ${styles.active}`}>
           <h5 className="m-0">Product added!</h5>
          <Link to="/checkout" className='btn btn-secondary text-white mt-4'>Checkout</Link>
       </div>
    </div> : null;

    return (
        <>
            {ReactDOM.createPortal(modalContent, document.getElementById('product-modal'))}   
        </>
    )
}

export default Modal;