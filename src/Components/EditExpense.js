import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

import * as expenseService from '../services/services';
import validate from '../validations/expensesValidations';
import style from './EditExpense.css';


const EditExpense = () => {
    let [expense, setExpense] = useState({});
    let [merchantError, setMerchantError] = useState("");
    let [priceError, setPriceError] = useState("");

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        expenseService.getOne(params.id)
            .then(res => {
                setExpense(res);
            });
    }, [params.id]);


    let onEditSubmit = (e) => {
        e.preventDefault();

        let { merchant, price, curency, category, description } = e.target;

        const merchantError = validate.merchant(merchant.value);
        const priceError = validate.price(price.value);

        if (merchantError) {
            setMerchantError(merchantError);
            setTimeout(() => {
                setMerchantError('');
            }, 1500);
        }

        if (priceError) {
            setPriceError(priceError);
            setTimeout(() => {
                setPriceError('');
            }, 1500);
        }

        if (merchantError || priceError) return;

        // console.log(e.target);
        expenseService
            .editExpense(
                merchant.value,
                price.value,
                curency.value,
                category.value,
                description.value,
                params.id)
            // .then(res => console.log(res))
            .then(() => {
                setTimeout(() => { navigate(`/expenses/${params.id}/details`) }, 200);
            })
    }


    return (
        <main>
            <form onSubmit={onEditSubmit}>
                <h1>Edit Expense</h1>


                <div className="form-control">
                    <label htmlFor="merchant">Merchant*</label>

                    <input id="merchant" name="merchant" type="text" defaultValue={expense.expense} />
                </div>

                {merchantError
                    ? (
                        <div className="notifications" >
                            <p className="notification-message">{merchantError}</p>
                        </div>
                    )
                    : (<></>)
                }

                <div className="form-control">
                    <label htmlFor="total">Total*</label>

                    <input id="total" name="price" type="number" defaultValue={expense.price} />

                    <select className="vault" name="curency" id="vault">
                        <option value="bgn">BGN</option>
                        {/* <option value="eur">EUR</option> */}
                        {/* <option value="usd">USD</option> */}
                    </select>
                </div>

                {priceError
                    ? (
                        <div className="notifications" >
                            <p className="notification-message">{priceError}</p>
                        </div>
                    )
                    : (<></>)
                }

                <div className="form-control">
                    <label htmlFor="category">Category*</label>

                    <select className="category" name="category" id="category" value={expense.category}>
                        <option value="all">All</option>
                        <option value="car">Car</option>
                        <option value="clothes">Clothes</option>
                        <option value="insurance">Insurance</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="food">Food</option>
                        <option value="rent">Rent</option>
                        <option value="taxes">Taxes</option>
                        <option value="travel">Travel</option>
                        <option value="utilities">Utilities</option>
                        <option value="other">Other</option>
                    </select>
                </div>


                <div className="form-control">
                    <label htmlFor="description">Description*</label>

                    <input id="description" name="description" type="text" defaultValue={expense.description} />
                </div>


                <button type="Submit">Save</button>
            </form>
        </main>
    );
};

export default EditExpense;