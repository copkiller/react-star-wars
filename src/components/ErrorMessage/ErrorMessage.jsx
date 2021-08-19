import styles from './ErrorMessage.module.css';

const ErrorMessage = () => {
   return (
      <>
         <p className={styles.text}>Cannot display data</p>
      </>
   );
};

export default ErrorMessage;
