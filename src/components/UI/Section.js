import styles from './Section.module.css'

const Section = (props)  => {
    return (
        <section id={styles.section} className={(props.small && styles.section_small) || (props.medium && styles.section_medium)} style={props.img ? {backgroundImage: props.img} : null}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <h2 className='text-center'><strong>{props.title}</strong></h2>
                        {props.paragraph && <p className='mt-2 text-center px-5'>{props.paragraph}</p>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section;