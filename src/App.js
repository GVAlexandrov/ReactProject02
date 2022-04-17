import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Error404 from './Components/404';

import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <Footer />
    </div >
  );
}

export default App;
