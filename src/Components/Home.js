import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main>
            <p className="guest-message">MoneyGone? The best expense tracker tool of all time! Аre you new here?  <Link to="/register">Register</Link>yourself!</p>
        </main>
    )
}

export default Home;