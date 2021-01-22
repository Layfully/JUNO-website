import React from 'react';
import SectionLink from '../SectionLink'
import Hamburger from '../Hamburger/Hamburger'
import { GithubIcon, YoutubeIcon, TwitterIcon, InstagramIcon } from '../Svg'
import styles from './Menu.module.css'

class Menu extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            activeSection: 0,
            sections: [
                {
                    title: "Home",
                    href: "/#Home",
                    key: 0
                },
                {
                    title: "Story",
                    href: "/#Story",
                    key: 1
                },
                {
                    title: "Teaser",
                    href: "/#Teaser",
                    key: 2
                },
                {
                    title: "Progress",
                    href: "/#Progress",
                    key: 3
                },
                {
                    title: "About",
                    href: "/#About",
                    key: 4
                }
            ]
        }

        this.toggleMenu = this.toggleMenu.bind(this)
        this.changeActiveSection = this.changeActiveSection.bind(this)
        this.enableMenuOnLargeDevices = this.enableMenuOnLargeDevices.bind(this)
    }

    enableMenuOnLargeDevices() {
        //default lg breakpoint
        if (window.innerWidth > 1024) {
            this.isOpen = this.setState({ isOpen: true })
        }
    }

    toggleMenu(event) {
        this.setState({ isOpen: event.target.checked })
    }

    changeActiveSection(newSection) {
        this.setState({ activeSection: newSection })
    }

    componentDidMount() {
        this.enableMenuOnLargeDevices()
        window.addEventListener('resize', this.enableMenuOnLargeDevices)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.enableMenuOnLargeDevices)
    }


    render() {
        const offset = {
            top: 55 + this.state.activeSection * 44
        }

        return (
            <>
                <Hamburger isOpen={this.state.isOpen} onChange={this.toggleMenu} />

                <nav className={`${styles.menu} ${this.state.isOpen ? "transform translate-x-0" : "transform translate-x-full"}`}>
                    <ul id={styles.menuLinkList}>
                        {
                            this.state.sections.map(section =>
                                <li key={section.key}>
                                    <SectionLink isActive={section.key == this.state.activeSection} section={section} onClick={this.changeActiveSection} />
                                </li>)
                        }
                    </ul>

                    <div id={styles.activeSectionIndicator} style={offset} />

                    <div id={styles.socialMediaLinkList}>
                        <a className="block" href="https://github.com/JPsiInVR"><GithubIcon /></a>
                        <a className="block" href="https://www.youtube.com/channel/UC9OGzydXjsrVAw2Dv6VZw9A"><YoutubeIcon /></a>
                        <a className="block" href="https://twitter.com/JUNO_2021"><TwitterIcon /></a>
                        <a className="block" href="https://www.instagram.com/jpsiunderobservation/"><InstagramIcon /></a>
                    </div>
                </nav>
            </>
        )
    }
}

export default Menu