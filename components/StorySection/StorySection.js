import Text from '../Text'
import React from 'react'
import styles from '../../styles/Home.module.css'


const StorySection = () => (
    <section id="Story" className={styles.section}>
        <ul className={`${styles.list} ${styles.listStar} space-y-8`}>
            <li>
                <Text>
                J/ψ UNder Observation (JUNO) is a visualization of the J/ψ
                particle discovery in virtual reality (VR).{" "}
                </Text>
            </li>
            <li>
                <Text>
                The JUNO adventure introduces you to the exciting world of
                particle physics and can be enjoyed using the Google Cardboard
                coupled with any smartphone. It intends to give insight into the
                groundbreaking physics experiments involved in the J/ψ discovery
                in 1974 and highlights their different approaches.
                </Text>
            </li>
            <li>
                <Text>
                In a second story line, you can experiencet the subatomic
                particles being protagonists themselves, as they question the
                social order of their world. Join J/ψ and its friends along in
                their virtual revolution and get to know the tiny particles that
                build the matter surrounding us!
                </Text>
            </li>
        </ul>
    </section>
)


export default StorySection
