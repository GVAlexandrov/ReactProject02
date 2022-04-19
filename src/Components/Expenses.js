const Expenses = () => {
    return (
        <main>

            <section className="actions">
                <form action="">
                    <h2>Salary time? Refill your account amount.</h2>
                    <input type="text" id="refill-amount" />
                    <button type="submit">Refill</button>
                </form>
                <div>
                    <h2>New expense comming up?</h2>
                    <a href="#">Add it now</a>
                </div>
            </section>

            <hr className="separator" />

            <table className="expenses">
                <thead>
                    <tr>
                        <th>Merchant</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Description</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p>Shoes</p>
                            <div className="report">
                                <a href="#">Report</a>
                            </div>
                        </td>
                        <td>
                            <img src="static/images/amount.png" alt="" />
                            <p>лв 123.00</p>
                        </td>
                        <td>
                            <img src="static/images/category.png" alt="" />
                            <p>Other</p>
                        </td>
                        <td>
                            <img src="static/images/hastag.png" alt="" />
                            <p>I fucked up...</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Car supplies</p>
                            <div className="report">
                                <a href="#">Report</a>
                            </div>
                        </td>
                        <td>
                            <img src="static/images/amount.png" alt="" />
                            <p>лв <span>123.00</span></p>
                        </td>
                        <td>
                            <img src="static/images/category.png" alt="" />
                            <p>Car</p>
                        </td>
                        <td>
                            <img src="static/images/hastag.png" alt="" />
                            <p>Regular car stuff....</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Shoes</p>
                        </td>
                        <td>
                            <img src="static/images/amount.png" alt="" />
                            <p>лв 123.00</p>
                        </td>
                        <td>
                            <img src="static/images/category.png" alt="" />
                            <p>Other</p>
                        </td>
                        <td>
                            <img src="static/images/hastag.png" alt="" />
                            <p>Gift to my girl...</p>
                        </td>
                    </tr>

                </tbody>
            </table>

            <h1 className="no-expenses">No expenses founded so far.. <span>GOOD JOB!</span></h1>

        </main>
    )
}

export default Expenses;