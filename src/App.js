import { Routes, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Register from './Components/Register';
import Login from './Components/Login';
import NewExpense from './Components/NewExpense';
import Expenses from './Components/Expenses';
import Profile from './Components/Profile';
import Error404 from './Components/404';

import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />;
        <Route path='/register' element={<Register />} />;
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
