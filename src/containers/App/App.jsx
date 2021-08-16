import cn from 'classnames';
import styles from './App.module.css'; //* css модули импортируются с переменной styles

console.log(styles);

const App = () => {
   return <h1 className={cn(styles.header, styles.text)}>HELLO!</h1>;
};

export default App;
