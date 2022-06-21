import { useParams } from "react-router-dom";
import Logo from '../assets/whey-protein.png'
import { useDispatch } from "react-redux";
import { useState } from "react";
import { cartActions } from "../store/redux-store";
import Modal from "../components/Products/Modal";
import { useEffect } from "react";

const ProductDetail = (props) => {

    const params = useParams();

    const [pieces, setPieces] = useState(1);
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();
 
    const addToCartHandler = (event) => {
        event.preventDefault();
        dispatch(cartActions.add({id: props.products[params.productId - 1].id, name: props.products[params.productId - 1].name, price: props.products[params.productId - 1].price, pieces: pieces}));
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
        }, 1500);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-7">
                    <img src={Logo} alt="" className="mt-4 w-100"/>
                </div>
                <div className="offset-md-1 col-md-4 mt-5 mt-md-0 d-flex flex-column justify-content-center">
                    <h2>
                        {props.products[params.productId - 1].name}
                    </h2>
                    <div className="mt-2 mb-4">
                        <span className="badge bg-success">Vegan</span>
                        <span className="ms-2 badge bg-primary">Gluten Free</span>
                    </div>
                    <p className="m-0">{props.products[params.productId - 1].description}</p>
                <div>
                    <h4 className="my-4">{props.products[params.productId - 1].price} $</h4>
                    <form className="row align-items-center mt-4" action="" onSubmit={addToCartHandler}>
                        <div className="col-md-6">
                            <input type="number" min="1" className="form-control" value={pieces} onChange={(e) => setPieces(e.target.value)}/>
                        </div>
                        <div className="col-md-6 mt-4 mt-md-0">
                            <button type="submit" className="btn btn-primary">Add to Cart</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            <Modal show={showModal}/>
        </div>
        
    )
}

export default ProductDetail;