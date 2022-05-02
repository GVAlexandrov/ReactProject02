import { Link } from 'react-router-dom';
import * as expenseService from '../services/services';

const ExistingExpense = ({
    id,
    expense,
    price,
    category,
    description,
    refresh
}) => {

    const deleteExpenseMessage = (e) => {
        if (window.confirm('Are you sure?')) {
            expenseService
                .deleteExpense(id)
                .then(resp => console.log(resp))
                .then(() => {
                    refresh();
                });

        } else {
            console.log('Not Deleted');
        }
    }

    return (
        <tr id={id}>
            <td>
                <p>{expense}</p>
            </td>


            <td>
                <p>{price} лв</p>
            </td>


            <td>
                <p>{category}</p>
            </td>


            <td>
                <p>{description}</p>
            </td>


            <td>
                <div className="report">
                    <p><Link to={`/expenses/${id}/details`} id={id}>Details</Link></p>
                </div>
            </td>


            <td>
                <div className="report">
                    <p><Link to="/expenses" id={id} onClick={deleteExpenseMessage}>X</Link></p>
                </div>
            </td>
        </tr>
    );
};

export default ExistingExpense;