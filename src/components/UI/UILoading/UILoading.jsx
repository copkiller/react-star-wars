import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import loaderBlack from './img/loaderBlack.svg';
import loaderWhite from './img/loaderWhite.svg';
import loaderBlue from './img/loaderBlue.svg';

import styles from './UILoading.module.css';

const UILoading = ({ theme = 'white', isShadow = true, classes }) => {
   const [loaderIcon, setLoaderIcon] = useState(null);

   useEffect(() => {
      switch (theme) {
         case 'black':
            setLoaderIcon(loaderBlack);
            break;
         case 'white':
            setLoaderIcon(loaderWhite);
            break;
         case 'blue':
            setLoaderIcon(loaderBlue);
            break;
         default:
            setLoaderIcon(loaderWhite);
            break;
      }
   }, []);

   return (
      <img
         className={cn(styles.loader, isShadow && styles.shadow, classes)}
         src={loaderIcon}
         alt="Loader"
      />
   );
};

UILoading.propTypes = {
   theme: PropTypes.string,
   isShadow: PropTypes.bool,
   classes: PropTypes.string,
};

export default UILoading;
