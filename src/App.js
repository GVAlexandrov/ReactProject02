import { Routes, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Expenses from './Components/Expenses';
import NewExpense from './Components/NewExpense';
import Error404 from './Components/404';
import Profile from './Components/Profile';

import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />;
        <Route exact path='/register' element={<Register />} />;
        <Route path='/login' element={<Login />} />;
        <Route path='/expenses' element={<Expenses />} />;
        <Route path='/expenses/new-expense' element={<NewExpense />} />;
        <Route path='/profile' element={<Profile />} />;
      </Routes>

      <Footer />
    </div >
  );
}

export default App;
