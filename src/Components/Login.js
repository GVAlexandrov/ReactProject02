import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { login, activeUser } from '../services/authService';
import validate from '../validations/authValidations';

const Login = () => {
    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");

    const [credentials, setCredentials] = useState({
        email: '',
        pass: ''
    });

    const navigate = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();
        // const email = e.target.elements.email.value;
        // const pass = e.target.elements.pass.value;

        const emailError = validate.email(credentials.email);
        const passError = validate.password(credentials.pass);

        if (emailError) {
            setEmailError(emailError);
            setTimeout(() => {
                setEmailError('');
            }, 1500);
        }

        if (passError) {
            setPassError(passError);
            setTimeout(() => {
                setPassError('');
            }, 1500);
        }

        if (emailError || passError) return;

        login(credentials.email, credentials.pass)
            .then(res => activeUser(res.user.uid, res.user.email))
            .then(() => navigate('/expenses'));
    }


    return (
        <main>
            <form onSubmit={onLogin}>
                <h1>Login</h1>

                <p>Personal info</p>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" placeholder="JustMyself123..." autoComplete="on" value={credentials.email} onInput={(e) => setCredentials(oldState => ({ ...oldState, email: e.target.value }))} />

                {emailError
                    ? (
                        <div className="notifications" >
                            <p className="notification-message">{emailError}</p>
                        </div>
                    )
                    : (<></>)
                }

                <label htmlFor="pass">Password</label>
                <input id="pass" type="password" placeholder="********" autoComplete="on" value={credentials.pass} onInput={(e) => setCredentials(oldState => ({ ...oldState, pass: e.target.value }))} />

                {passError
                    ? (
                        <div className="notifications" >
                            <p className="notification-message">{passError}</p>
                        </div>
                    )
                    : (<></>)
                }

                <button type="submit">Login</button>
            </form>
        </main>
    );
};

export default Login;