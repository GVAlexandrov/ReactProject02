import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Error404 from './Components/404';

import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <Header />
    </div >
  );
}

export default App;
