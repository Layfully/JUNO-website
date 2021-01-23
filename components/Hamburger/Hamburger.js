import styles from './Hamburger.module.css'

const Hamburger = (props) => (
    <div className={`${styles.hamburger}  ${props.isOpen ? 'bg-opacity-0' : 'bg-opacity-60'}`}>
        <input checked={props.isOpen} onChange={props.onChange} type="checkbox" className={styles.hamburgerToggle} />
        <div className={styles.hamburgerContainer}>
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
        </div>
    </div>
)

export default Hamburger