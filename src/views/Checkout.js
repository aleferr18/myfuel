import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/redux-store";
import { useEffect, useState, useRef } from "react";
import Section from "../components/UI/Section"
import ArrowRight from '../assets/right-arrow.png'
import { useNavigate } from "react-router-dom";

const initialForm = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
};

const Checkout = () => {

    const navigate = useNavigate();

    const cart = useSelector(state => state.cart);
    const totPrice = useSelector(state => state.totPrice);
    const dispatch = useDispatch();

    const firstName = useRef();
    const lastName = useRef();
    const email = useRef();
    const address = useRef();
    const cardNumber = useRef();
    const expiryDate = useRef();
    const cvv = useRef();

    const [isFormCorrect, setIsFormCorrect] = useState(initialForm);

    const [showError, setShowError] = useState(false);

    const removeItemHandler = (id, name, price, pieces) => {
        dispatch(cartActions.remove({id: id, name: name, price: price, pieces: pieces}));
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


      const validateForm = (event) => {
        event.preventDefault();

        setIsFormCorrect({
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            address: address.current.value,
            cardNumber: cardNumber.current.value,
            expiryDate: expiryDate.current.value,
            cvv: cvv.current.value
        });

        const inputForm = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            address: address.current.value,
            cardNumber: cardNumber.current.value,
            expiryDate: expiryDate.current.value,
            cvv: cvv.current.value
        };

        setShowError(true);

        const isEmpty = Object.values(inputForm).includes('');

        if (!isEmpty){
            navigate('/order-completed');
        }

      }


    return (
        <>
            <Section title="Checkout" small={true}/>
            <div className="container pt-4 pb-5 mb-5">
                {cart.length > 0 ? <div className="row mt-4">
                <div className="col-md-7 px-4 px-md-0">
                            {cart.map(item => <div className="row bg-custom card-prod mb-3 align-items-center" key={item.id}>
                                <div className="col-12"><h6 className="mb-3"><strong>{item.name}</strong></h6></div>
                                <div className="col-4 d-flex justify-content-between">{item.price}$</div>
                                <div className="col-5 d-flex justify-content-end">qty: {item.pieces}</div>                          
                                <div className="col-2 d-flex justify-content-end"><h6 className="m-0">{item.price * item.pieces}$</h6></div>  
                                <div className="col-1 d-flex justify-content-end"><button className="btn btn-danger" onClick={() => removeItemHandler(item.id, item.name, item.price, item.pieces)}>X</button></div> 
                            </div>)}
                            <hr/>
                            <div className="row mt-3 py-4 bg-custom px-3">
                                <div className="col-8"><h6>Total amount:</h6></div>
                                <div className="col-3"><h6 className="text-end"><strong>{totPrice.toFixed(2)} $</strong></h6></div>
                            </div>
                    </div>
                <div className="offset-md-1 col-md-4 mt-5 mt-md-0">
                        <form action="" onSubmit={validateForm}>
                            <div className="form-group d-md-inline-block me-md-1">
                                <label>First Name</label>
                                <input type="text" className="form-control" ref={firstName}/>
                                { !isFormCorrect.firstName && showError ? <p className="text-danger">Please fill this field.</p> : null}
                            </div>
                            <div className="form-group d-md-inline-block mt-3 mt-md-0 ms-md-1">
                                <label>Last Name</label>
                                <input type="text" className="form-control" ref={lastName} />
                                { !isFormCorrect.lastName && showError ? <p className="text-danger">Please fill this field.</p> : null}
                            </div>
                            <div className="form-group mt-3">
                                <label>Email</label>
                                <input type="email" className="form-control" ref={email} />
                                { !isFormCorrect.email && showError ? <p className="text-danger">Please fill this field.</p> : null}
                            </div>
                            <div className="form-group mt-3">
                                <label>Address</label>
                                <input type="text" className="form-control" ref={address} />
                                { !isFormCorrect.email && showError ? <p className="text-danger">Please fill this field.</p> : null}
                            </div>
                            <div className="form-group mt-3">
                                <label>Card Number</label>
                                <input type="number" className="form-control" ref={cardNumber} />
                                { !isFormCorrect.cardNumber && showError ? <p className="text-danger">Please fill this field.</p> : null}
                            </div>
                            <div className="form-group d-md-inline-block me-md-1 mt-3">
                                <label>Expiry Date</label>
                                <input type="text" className="form-control" ref={expiryDate} />
                                { !isFormCorrect.expiryDate && showError ? <p className="text-danger">Please fill this field.</p> : null}
                            </div>
                            <div className="form-group d-md-inline-block ms-md-1 mt-3">
                                <label>CVV</label>
                                <input type="number" className="form-control" ref={cvv} />
                                { !isFormCorrect.cvv && showError ? <p className="text-danger">Please fill this field.</p> : null}
                            </div>
                        <div className="d-flex justify-content-end">
                                <button className="btn btn-primary mt-5" type="submit">Checkout <img src={ArrowRight} className="arrow-right"/></button>
                        </div>
                        </form>
                </div>
                </div> :  <p className="text-center my-4">There are no products in your Cart.</p>}
            </div>
        </>
    )
}

export default Checkout;