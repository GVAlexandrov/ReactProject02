const NewExpense = () => {
    return (
        <main>
            <form>
                <h1>Expense</h1>

                <div className="form-control">
                    <label htmlFor="merchant">Merchant*</label>
                    <input id="merchant" type="text" placeholder="Shoes" />
                </div>

                <div className="form-control">
                    <label htmlFor="total">Total*</label>
                    <input id="total" type="text" placeholder="123.00" />
                    <select name="vault" id="vault">
                        <option value="bgn">BGN лв</option>
                    </select>
                </div>

                <div className="form-control">
                    <label htmlFor="category">Category*</label>
                    <select name="category" id="category">
                        <option disabled selected value="default">Select category...</option>
                        <option value="advertising">Advertising</option>
                        <option value="benefits">Benefits</option>
                        <option value="car">Car</option>
                        <option value="equipment">Equipment</option>
                        <option value="fees">Fees</option>
                        <option value="home-office">Home Office</option>
                        <option value="insurance">Insurance</option>
                        <option value="interest">Interest</option>
                        <option value="Labor">Labor</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="materials">Materials</option>
                        <option value="meals-and-entertainment">Meals and Entertainment</option>
                        <option value="office-supplies">Office Supplies</option>
                        <option value="other">Other</option>
                        <option value="professional-services">Professional Services</option>
                        <option value="rent">Rent</option>
                        <option value="taxes">Taxes</option>
                        <option value="travel">Travel</option>
                        <option value="utilities">Utilities</option>
                    </select>
                </div>

                <div className="form-control">
                    <label htmlFor="description">Description*</label>
                    <input id="description" type="text" placeholder="Shoes description..." />
                </div>

                <div className="form-control">
                    <label htmlFor="report">Report: </label>
                    <input type="checkbox" id="report" />
                </div>

                <button type="Submit">Save</button>

            </form>
        </main>
    )
}

export default NewExpense;