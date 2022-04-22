import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">MoneyGone</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <a className="right-floated" href="#">[myusername profile]</a>
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
