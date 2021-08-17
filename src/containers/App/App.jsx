import cn from 'classnames';
import styles from './App.module.css'; //* css модули импортируются с переменной styles
import { getApiResource } from '../../utils/network';

const App = () => {
   return <h1 className={styles.header}>HELLO!</h1>;
};

export default App;
