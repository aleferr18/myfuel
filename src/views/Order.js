import { Link } from "react-router-dom";

const Order = () => {

    return (
        <div className="container mt-5 pt-5 text-center">
            <h1>Order Completed!</h1>
            <p>Thanks for your order.</p> 
            <Link to="/" className="btn btn-primary mt-5">Continue shopping</Link>
        </div>
    )
}

export default Order;