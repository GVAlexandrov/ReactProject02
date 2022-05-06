import { NavLink, useNavigate } from 'react-router-dom';
import { auth, firebaseSignOut } from '../config/firebaseInit';
import { logout } from '../services/authService';


const Header = ({
    userEmail,
    setUserEmail
}) => {
    const navigate = useNavigate();

    const links = [
        { menuName: "Register", path: "/register", isAuth: false },
        { menuName: "Login", path: "/login", isAuth: false },
        { menuName: userEmail?.email, path: "/profile", isAuth: true },
        { menuName: "My Expenses", path: "/expenses", isAuth: true },
    ]

    function logOutHandler(e) {
        e.preventDefault();
        logout();
        setUserEmail(null);
        localStorage.removeItem("email");
        localStorage.removeItem("uid");
        navigate('/');
    }

    return (
        <header>
            <nav>


                <ul>
                    <li key="MoneySafe">
                        <NavLink id="home" className="left-floated" to="/">MoneySafe</NavLink>
                    </li>
                </ul>


                <ul>
                    {
                        links.map(link => {
                            if (userEmail !== null && link.isAuth) {
                                return (
                                    <li key={link.menuName}>
                                        <NavLink className="right-floated" to={link.path}>{link.menuName}</NavLink>
                                    </li>
                                );

                            } else if (userEmail === null && !link.isAuth) {
                                return (
                                    <li key={link.menuName}>
                                        <NavLink className="right-floated" to={link.path}>{link.menuName}</NavLink>
                                    </li>
                                );
                            }

                            return '';
                        })
                    }

                    {(userEmail !== null)
                        ? <li key="Logout">
                            <a className="right-floated" href="#" onClick={logOutHandler} >Logout</a>
                        </li>
                        : ''
                    }
                </ul>

            </nav>
        </header>
    );
};

export default Header;