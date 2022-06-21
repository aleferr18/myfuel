import { useParams } from "react-router-dom"
import AllProducts from "../components/Products/AllProducts"
import Section from "../components/UI/Section"
import { useEffect } from "react"

const CategoryDetail = ({ products }) => {

    const location = useParams();

    const categoryInfo = [
        {
            title: 'Muscle Gain',
            link: 'muscle-mass',
            paragraph: '',
            sectionTitle: '',
            img: ''
        },
        {
            title: 'Weight Loss',
            link: 'weight-loss',
            paragraph: '',
            sectionTitle: '',
            img: ''
        },
        {
            title: 'Weight Maintenance',
            link: 'weight-maintenance',
            paragraph: '',
            sectionTitle: '',
            img: ''
        },
        {
            title: 'Health & Wellbeing',
            link: 'health-wellbeing',
            paragraph: '',
            sectionTitle: '',
            img: ''
        },
        {
            title: 'Vitamins & Minerals',
            link: 'vitamins-minerals',
            paragraph: '',
            sectionTitle: '',
            img: ''
        }
    ]

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const categoryProducts = products.filter(el => el.category && el.category.includes(location.category));
    const categoryId = categoryInfo.findIndex(el => el.link && el.link === location.category);

    return (
        <>
            <Section title={categoryInfo[categoryId].title} paragraph={categoryInfo[categoryId].paragraph} img={false} medium={true}/>
            <AllProducts products={categoryProducts}/>
        </>
    )
}

export default CategoryDetail;