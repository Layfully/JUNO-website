import styles from './Hamburger.module.css'

const Hamburger = (props) => (
    <div className={"fixed top-2 right-2 transition-colors duration-500  bg-orange z-30 p-2 w-10 h-10 rounded-md  lg:hidden " + (props.isOpen ? 'bg-opacity-0' : 'bg-opacity-60')}>
        <input checked={props.isOpen} onChange={props.onChange} type="checkbox" className={styles.hamburgerToggle} />
        <div className={styles.hamburgerContainer}>
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
        </div>
    </div>
)

export default Hamburger