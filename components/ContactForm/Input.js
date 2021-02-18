import Text from "../Text";
import styles from "./Input.module.css";

const Input = (props) => {
  const Normal = (
    <input
      id={props.name}
      name={props.name}
      type={props.type}
      className={styles.input}
      onChange={props.onChange}
    />
  );
  const TextArea = (
    <textarea
      rows='7'
      id={props.name}
      name={props.name}
      className={styles.input}
      onChange={props.onChange}
    />
  );

  return (
    <div className='w-3/4'>
      <label htmlFor={props.name}>
        <Text size='base' color='true-orange' custom='py-1'>
          {props.label}
        </Text>
      </label>
      {props.type === "textarea" ? TextArea : Normal}
      <Text
        size='sm'
        color='error'
        custom={`tracking-wide font-bold transition-all duration-300 ${
          props.error.active ? "" : "opacity-0"
        }`}>
        {" "}
        {props.error.message}
      </Text>
    </div>
  );
};

export default Input;
