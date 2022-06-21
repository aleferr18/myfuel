import Section from '../components/UI/Section';
import AllProducts from '../components/Products/AllProducts';
import Categories from '../components/Products/Categories';
import { useEffect } from "react";

const Home = (props) => {

    const products = props.products;

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <Section title="The perfect fuel for your workout" paragraph="Science-based supplements made to help you reach your fitness goals, whatever they are."/>
            <Categories/>
            <AllProducts products={products} title="All the Supplements"/>
        </>
        
    )
}

export default Home;