import { auth } from '../config/firebaseInit';

export function register(email, pass) {
    return auth.createUserWithEmailAndPassword(email, pass)
        .then(() => auth.signInWithEmailAndPassword(email, pass))
        .catch((error) => console.log(error))
}


export function login(email, pass) {
    return auth.signInWithEmailAndPassword(email, pass);
}

export function activeUser(uid, email) {
    localStorage.setItem('uid', uid);
    localStorage.setItem('email', email);
}