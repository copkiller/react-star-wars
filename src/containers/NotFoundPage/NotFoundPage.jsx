import { useLocation } from 'react-router-dom';
import img from './img/not-found.png';

import styles from './NotFoundPage.module.css';

const NotFounPage = () => {
   let location = useLocation();

   return (
      <div>
         <img className={styles.img} src={img} alt="Page not found" />
         <p className={styles.text}>
            No match for <u>{location.pathname}</u>
         </p>
      </div>
   );
};

export default NotFounPage;
