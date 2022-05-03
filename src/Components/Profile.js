import { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';

import { getAllExpenses, getTotalAmount } from '../services/services';

const Profile = () => {
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [availableAmount, setAvailableAmount] = useState(0);

    useEffect(() => {
        getAllExpenses()
            .then(amount => setTotalExpenses(amount))
            .catch(console.log);

        getTotalAmount()
            .then(amount => setTotalAmount(amount))
            .catch(console.log);
    }, []);

    useEffect(() => {
        setAvailableAmount(totalAmount - totalExpenses);
    }, [totalAmount, totalExpenses])

    return (
        <main>
            <table className="expenses-info">
                <thead>
                    <tr>
                        <th colSpan="2">Expenses</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Total Amount:</td>
                        <td>{totalAmount.toFixed(2)} BGN</td>
                    </tr>
                    <tr>
                        <td>Total Merches</td>
                        <td>{totalExpenses.toFixed(2)} BGN</td>
                    </tr>
                </tbody>
            </table>

            <div className="current-amount">
                <p>Available amount: <span>{availableAmount.toFixed(2)} BGN</span></p>
            </div>
        </main>
    );
};

export default Profile;