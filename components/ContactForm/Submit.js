import styles from "./Input.module.css";

const Submit = (props) => {
  return (
    <div className='w-3/4 flex flex-col pb-8'>
      <input
        type='submit'
        value={props.value}
        className={styles.submit}
        disabled={props.disabled}
      />
    </div>
  );
};

export default Submit;
