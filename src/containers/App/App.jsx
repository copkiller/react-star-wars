import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routesConfig from '@routes/routesConfig';
import cn from 'classnames';
import Header from '@components/Header';

import styles from './App.module.css';

const App = () => {
   return (
      <>
         <BrowserRouter>
            <div className={styles.wrapper}>
               <Header />

               <Switch>
                  {/* <Route path="/" exact component={HomePage} /> */}
                  {routesConfig.map(({ path, exact, component }, index) => (
                     <Route key={index} path={path} exact={exact} component={component} />
                  ))}
               </Switch>
            </div>
         </BrowserRouter>
      </>
   );
};

export default App;