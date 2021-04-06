import styles from "./Hamburger.module.css";

const Hamburger = (props) => (
  <div
    className={styles.hamburger}
    style={
      props.isOpen ? { "--tw-bg-opacity": 0 } : { "--tw-bg-opacity": 0.6 }
    }>
    <label htmlFor='hamburger' className='sr-only'>
      Hamburger toggle
    </label>
    <input
      id='hamburger'
      checked={props.isOpen}
      onChange={props.onChange}
      type='checkbox'
      className={styles.hamburgerToggle}
    />
    <div className={styles.hamburgerContainer}>
      <span className={styles.hamburgerLine} />
      <span className={styles.hamburgerLine} />
      <span className={styles.hamburgerLine} />
    </div>
  </div>
);

export default Hamburger;
