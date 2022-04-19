const Register = () => {
    return (
        <main>
            <form>
                <h1>Register</h1>

                <p>Personal info</p>
                <label htmlFor="usernmae">Username</label>
                <input id="username" type="text" placeholder="JustMyself123..." />

                <label htmlFor="usernmae">Password</label>
                <input id="password" type="password" placeholder="******" />

                <label htmlFor="repeat-password">Repeat Password</label>
                <input id="repeat-password" type="password" placeholder="******" />
                <hr></hr>

                <p>Account</p>
                <label htmlFor="amount">Amount</label>
                <input id="amount" type="text" placeholder="$125.90" />

                <button type="submit">Register</button>
            </form>
        </main>
    )
}

export default Register;