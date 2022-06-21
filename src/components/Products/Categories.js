import styles from './Categories.module.css'
import { Link } from 'react-router-dom';
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'
import img5 from '../../assets/5.png'

const Categories = () => {
    

    return (
        <div className="container mt-4 mb-5 py-5">
            <h2 className='text-center m-0'><strong>Categories</strong></h2>
            <div className={`${styles.categories} mt-5`}>
                <Link to="/categories/weight-loss" className={styles.small_category} style={{backgroundImage: `url(${img1})`}}>Weight Loss</Link>
                <Link to="/categories/muscle-mass" className={styles.big_category} style={{backgroundImage: `url(${img2})`}}>Gain Muscle Mass</Link>
                <Link to="/categories/health-wellbeing" className={styles.small_category} style={{backgroundImage: `url(${img3})`}}>Health {'&'} Wellbeing</Link>
                <Link to="/categories/weight-maintenance" className={styles.small_category} style={{backgroundImage: `url(${img4})`}}>Weight Maintenance</Link>
                <Link to="/categories/vitamins-minerals" className={styles.small_category} style={{backgroundImage: `url(${img5})`}}>Vitamins {'&'} Minerals</Link>
            </div>
        </div>
    )
}

export default Categories;