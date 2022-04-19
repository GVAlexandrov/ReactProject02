
const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a id="home" className="left-floated" href="#">MoneyGone</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a className="right-floated" href="#">Login</a>
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
