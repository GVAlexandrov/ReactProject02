import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Error404 from './Components/404';

import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <Header />

      <Home />

      <Footer />
    </div >
  );
}

export default App;
