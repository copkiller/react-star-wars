import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Favorite.module.css';
import icon from './img/bookmark.svg';

const Favorite = () => {
   const [count, setCount] = useState(0);

   const storeData = useSelector((state) => state.favoriteReducer);

   useEffect(() => {
      const length = Object.keys(storeData).length;
      length.toString().length > 1 ? setCount('+9') : setCount(length);
   }, [storeData]);

   return (
      <div className={styles.container}>
         <Link to="/favorites">
            <span className={styles.counter}>{count}</span>
            <img className={styles.icon} src={icon} alt="Favorites" />
         </Link>
      </div>
   );
};

export default Favorite;
