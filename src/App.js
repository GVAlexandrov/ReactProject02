import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Register from './Components/Register';
import Login from './Components/Login';
import NewExpense from './Components/NewExpense';
import Expenses from './Components/Expenses';
import ExpenseDetails from './Components/ExpenseDetails';
import EditExpense from './Components/EditExpense';
import Profile from './Components/Profile';
import Error404 from './Components/404';

import style from './App.module.css';
import { auth } from './config/firebaseInit';
import { useState, useEffect } from 'react';

function App() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUserEmail);
  }, []);

  return (
    <div className={style.app}>
      <Header userEmail={userEmail} setUserEmail={setUserEmail} />

      <Routes>
        <Route path='/' element={<Home />} />;
        <Route path='/register' element={<Register />} />;
        <Route path='/login' element={<Login />} />;
        <Route path='/new-expense' element={<NewExpense />} />;
        <Route path='/expenses' element={<Expenses />} />;
        <Route path='/expenses/:id/details' element={<ExpenseDetails />} />;
        <Route path='/expenses/:id/details/edit' element={<EditExpense />} />;

        <Route path='/profile' element={<Profile />} />;
      </Routes>

      <Footer />
    </div >
  );
}

export default App;
