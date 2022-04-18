import { Routes, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login';
import Error404 from './Components/404';

import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <Header />

      <Routes>
        <Route path='/login' element={<Login />} />;
        <Route path='/' element={<Home />} />;
      </Routes>

      <Footer />
    </div >
  );
}

export default App;
