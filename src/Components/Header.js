import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link id="home" className="left-floated" to="/">MoneyGone</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link className="right-floated" to="/login">Login</Link>
                    </li>
                    <li>
                        <Link className="right-floated" to="/register">Register</Link>
                    </li>
                    <li>
                        <Link className="right-floated" to="/expenses">Expenses</Link>
                    </li>
                    <li>
                        <Link className="right-floated" to="/expenses/new-expense">New Expense</Link>
                    </li>
                    <li>
                        {/* <a className="right-floated" href="#">[myusername profile]</a> */}
                        <Link className="right-floated" to="/profile">[myusername profile]</Link>
                    </li>

                    <li>
                        <a className="right-floated" href="#">Logout</a>
                    </li>
                </ul>
            </nav >
        </header >
    );
};

export default Header;
