import { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { URL } from '../config/config';
import ExistingExpense from './ExistingExpense';
import * as refillService from '../services/services';


class Expenses extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: [],
            expensesCopy: []
        }

        this.filterByCategory = this.filterByCategory.bind(this);
        this.refresh = this.refresh.bind(this);
        this.onRefillSubmitHandler = this.onRefillSubmitHandler.bind(this);
    }

    refresh() {
        const uid = localStorage.uid;

        fetch(URL + `expenses/${uid}.json`)
            .then(res => res.json())
            .then(res => {
                let expensesArr = [];

                for (const key in res) {
                    if (Object.hasOwnProperty.call(res, key)) {
                        res[key].id = key;
                        expensesArr.push(res[key]);
                    }
                }

                this.setState(() => ({
                    expenses: expensesArr,
                    expensesCopy: expensesArr,
                }))

            })
            .catch(error => console.log(error));
    }

    componentDidMount() {
        // console.log("MOUNTED");
        const uid = localStorage.uid;

        fetch(URL + `expenses/${uid}.json`)
            .then(res => res.json())
            .then(res => {
                let expensesArr = [];
                for (const key in res) {
                    if (Object.hasOwnProperty.call(res, key)) {
                        res[key].id = key;
                        expensesArr.push(res[key]);
                    }
                }
                this.setState(() => ({
                    expenses: expensesArr,
                    expensesCopy: expensesArr,
                }))
            })
            .catch(error => console.log(error));
    }

    filterByCategory(e) {
        if (e.target.value === 'all') {
            this.setState((state) => ({ ...state, expensesCopy: this.state.expenses }));

            return;
        };

        let filteredArray = this.state.expenses.filter(element => {
            return element.category === e.target.value;
        });

        this.setState((state) => ({ ...state, expensesCopy: filteredArray }));
    }

    onRefillSubmitHandler(e) {
        e.preventDefault();

        let { refillAmount } = e.target;
        // console.log(refillAmount.value);

        refillService.refill(refillAmount.value)
            .then(() => refillAmount.value = '')
            .catch(error => console.log(error));
    }


    render() {
        // console.log(this.state.expenses);
        return (
            <main>
                <section className="actions">
                    <form onSubmit={this.onRefillSubmitHandler}>
                        <h3>Refill account amount.</h3>

                        <input type="number" name="refillAmount" id="refill-amount" />

                        <button type="submit">Refill</button>
                    </form>


                    <div>
                        <h3>New expense</h3>

                        <NavLink to="/new-expense" >Add</NavLink>
                    </div>
                </section>


                <hr className="separator" />


                <div className="select-category">
                    <select className="category" id="category" onChange={this.filterByCategory}>
                        {/* <option disabled selected value="default">Select category...</option> */}
                        <option value="all">All</option>
                        <option value="car">Car</option>
                        <option value="fees">Fees</option>
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


                <table className="expenses">
                    <thead>
                        <tr>
                            <th>Expense</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Details</th>
                            <th>Delete</th>
                        </tr>


                    </thead>


                    <tbody>
                        {this.state.expensesCopy.map(x =>
                            <ExistingExpense
                                key={x.id}
                                id={x.id}
                                expense={x.expense}
                                price={x.price}
                                category={x.category}
                                description={x.description}
                                refresh={this.refresh} />
                        )}
                    </tbody>
                </table>


                {(this.state.expensesCopy.length === 0)
                    ? <h1 className="no-expenses">No expenses...</h1> : ''
                }
            </main>
        );
    }
};


export default Expenses;