import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'

const Home = () => {
    const [isLogged, setIsLogged] = useState(false);
    const uid = localStorage.uid;

    useEffect(() => {
        if (uid) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }, [uid])

    return (
        <main>
            <p className="guest-message">MoneySafe? The best expense tracker tool of all time! </p>

            {
                isLogged
                    ? <></>
                    : <p className="guest-message">Аre you new here? <NavLink to="/register">Register</NavLink> yourself!</p>
            }
        </main>
    );
};

export default Home;