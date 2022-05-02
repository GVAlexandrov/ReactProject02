import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import * as expenseService from '../services/services';

const ExpenseDetails = () => {
    let [expense, setExpense] = useState({});

    const params = useParams();
    // console.log(params);

    useEffect(() => {
        expenseService.getOne(params.id)
            .then(res => {
                if (res) {
                    setExpense(res);
                }
            })
    }, [params.id]);


    return (
        <main>
            <h1>Expense details</h1>


            <table className="expenses">
                <thead>
                    <tr>
                        <th>Expense</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Edit</th>
                    </tr>


                </thead>


                <tbody>
                    <tr id={params.id}>
                        <td>
                            <p>{expense.expense}</p>
                        </td>


                        <td>
                            <p>{expense.price} лв</p>
                        </td>


                        <td>
                            <p>{expense.category}</p>
                        </td>


                        <td>
                            <p>{expense.description}</p>
                        </td>


                        <td>
                            <div className="report">
                                <p><Link to={`/expenses/${params.id}/details/edit`} id={expense.id}>Edit</Link></p>
                            </div>
                        </td>


                    </tr>
                </tbody>
            </table>
        </main>
    );
};


export default ExpenseDetails;