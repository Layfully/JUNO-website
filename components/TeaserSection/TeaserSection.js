import React from 'react'
import styles from '../../styles/Home.module.css'


const TeaserSection = () => (
    <section id='Teaser' className={styles.section}>
        <div className={styles.teaserContainer}>
            <iframe
                className={styles.teaser}
                src='https://www.youtube-nocookie.com/embed/wjs4eJPYDzQ'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
        </div>
    </section>
)


export default TeaserSection
