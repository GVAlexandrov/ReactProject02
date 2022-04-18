const Login = () => {
    return (
        <main>
            <form>
                <h1>Login</h1>

                <p>Personal info</p>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" placeholder="JustMyself123..." />

                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="********" />

                <button type="submit">Login</button>
            </form>
        </main>
    )
}

export default Login;