import Image from 'next/image'
import Text from '../Text'
import React from 'react'
import styles from './HomeSection.module.css'


class HomeSection extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [
                {
                    src: '/d-meson.png',
                    alt: 'd-meson',
                    width: 1130,
                    height: 1200
                },
                {
                    src: '/j-psi.png',
                    alt: 'j/psi',
                    width: 537,
                    height: 1824
                },
                {
                    src: '/keon.png',
                    alt: 'keon',
                    width: 1354,
                    height: 1042
                }
            ]
        }
    }

    render() {
        return (
            <section id="Home">
                <header className={styles.titleContainer}>
                    <Text size="h1" custom="font-title">J/ψ <span className={styles.customUnderline}>U</span>nder Observation ...</Text>
                    <Text size="body" color="orange">The ultimate Particle Physics experience</Text>
                </header>
                <div className={styles.particleContainer}>
                    {
                        this.state.images.map((image, index) => <Image key={index} src={image.src} alt={image.alt} width={image.width} height={image.height} layout="intrinsic" />)
                    }
                </div>
            </section>
        )
    }

}

export default HomeSection