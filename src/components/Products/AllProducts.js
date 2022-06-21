import { useState } from "react";
import Product from "./Product";

const AllProducts = (props) => {

    const [searchingParam, setSearchingParam] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const searchingParamHandler = (event) => {
            setSearchingParam(event.target.value.trim());
            let filteredProd = [...props.products];
            filteredProd = filteredProd.filter(item => item.name.toLowerCase().includes(event.target.value.toLowerCase().trim()));
            setFilteredProducts([...filteredProd]);
    }


    return (
        <section className="my-2 py-2">
            <div className="container">
                {props.title ? <div className="row">
                    <div className="col-12">
                        <h2 className="text-center m-0"><strong>{props.title}</strong></h2>
                    </div>
                </div> : null}
                <div className="row align-items-center mt-5">
                    <div className="col-md-9 d-none d-md-block">
                        <p className="m-0">N. of Products: {searchingParam === '' ? props.products.length : filteredProducts.length}</p>
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control w-100" onChange={searchingParamHandler} placeholder="Search products..."/>
                    </div>
                </div>
                <div className="row mt-md-4">
                    {searchingParam === '' ? props.products.map(item => <Product key={item.id} id={item.id} name={item.name} price={item.price} img={item.img} />) 
                    : filteredProducts.map(item => <Product key={item.id} id={item.id} name={item.name} price={item.price} img={item.img}/>)}
                </div>
            </div>
        </section>
    )
}

export default AllProducts;