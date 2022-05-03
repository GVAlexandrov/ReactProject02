import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { register, activeUser } from '../services/authService';
import { refill } from '../services/services';
import validate from '../validations/authValidations';

const Register = () => {
    const navigate = useNavigate();

    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");
    const [repassError, setRepassError] = useState("");
    const [amountError, setAmountError] = useState("");

    const onRegister = (e) => {
        e.preventDefault();
        let email = e.target.elements.email.value;
        let pass = e.target.elements.pass.value;
        let repass = e.target.elements.repass.value;
        let amount = e.target.elements.amount.value;

        const emailError = validate.email(email);
        const passError = validate.password(pass);
        const repassError = validate.repassword(repass, pass);
        const amountError = validate.amount(amount);

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

        if (repassError) {
            setRepassError(repassError);
            setTimeout(() => {
                setRepassError('');
            }, 1500);
        }

        if (amountError) {
            setAmountError(amountError);
            setTimeout(() => {
                setAmountError('');
            }, 1500);
        }

        if (emailError || passError || repassError || amountError) return;

        register(email, pass)
            .then(res => {
                activeUser(res.user.uid, res.user.email);
                return refill(amount);
            })
            .then(() => navigate('/expenses'))
            .catch(error => console.log(error));
    }


    return (
        <main>
            <form onSubmit={onRegister}>
                <h1>Register</h1>

                <p>Personal info</p>
                <label htmlFor="email">E-mail</label>
                <input id="email" type="text" placeholder="JustMyself123..." autoComplete="on" name="email" />

                {emailError
                    ? (
                        <div className="notifications" >
                            <p className="notification-message">{emailError}</p>
                        </div>
                    )
                    : (<></>)
                }

                <label htmlFor="pass">Password</label>
                <input id="pass" type="password" placeholder="******" autoComplete="on" name="pass" />

                {passError
                    ? (
                        <div className="notifications" >
                            <p className="notification-message">{passError}</p>
                        </div>
                    )
                    : (<></>)
                }

                <label htmlFor="repeat-password">Repeat Password</label>
                <input id="repeat-password" type="password" placeholder="******" autoComplete="on" name="repass" />

                {repassError
                    ? (
                        <div className="notifications" >
                            <p className="notification-message">{repassError}</p>
                        </div>
                    )
                    : (<></>)
                }

                <hr />

                <p>Account</p>

                <label htmlFor="amount">Amount</label>
                <input id="amount" type="text" placeholder="$125.90" name="amount" />

                {amountError
                    ? (
                        <div className="notifications" >
                            <p className="notification-message">{amountError}</p>
                        </div>
                    )
                    : (<></>)
                }

                <button type="submit">Register</button>
            </form>
        </main>
    );
};

export default Register;