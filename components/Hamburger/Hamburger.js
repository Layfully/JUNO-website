import styles from './Hamburger.module.css'

const Hamburger = (props) => (
    <div className={styles.hamburger} style={props.isOpen ? { '--tw-bg-opacity': 0 } : { '--tw-bg-opacity': 0.6 }}>
        <input checked={props.isOpen} onChange={props.onChange} type="checkbox" className={styles.hamburgerToggle} />
        <div className={styles.hamburgerContainer}>
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
        </div>
    </div>
)

export default Hamburger