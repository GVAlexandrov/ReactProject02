import { URL } from '../config/config';
import { auth } from '../config/firebaseInit';


// let url = 'http://localhost:5000/expenses';


export const getOne = (expenseId) => {
    const uid = localStorage.uid;
    // console.log(`${URL}expenses/${expenseId}.json`);

    return fetch(`${URL}expenses/${uid}/${expenseId}.json`)
        .then(res => res.json())
        .catch(error => console.log(error));
}


export const addNewExpense = (merchant, price, curency, category, description) => {
    const uid = localStorage.uid;

    let newExpense = {
        // profile: localStorage.getItem('uid'),
        expense: merchant,
        category,
        price,
        description,
    }

    // console.log(JSON.stringify(newExpense));

    return auth.currentUser.getIdToken(false)
        .then((token) => {
            return fetch(URL + `expenses/${uid}/.json?auth=${token}`, {
                method: "POST",
                body: JSON.stringify(newExpense)
            });
        });
};


export const editExpense = (merchant, price, curency, category, description, expenseId) => {
    let editExpense = {
        profile: localStorage.getItem('uid'),
        expense: merchant,
        category,
        price,
        description,
    }

    const uid = localStorage.uid;
    // console.log(JSON.stringify(editExpense));

    return auth.currentUser.getIdToken(false)
        .then((token) => {
            // console.log(URL + `expenses/${uid}/${expenseId}.json?auth=${token}`);
            // console.log(editExpense);

            fetch(URL + `expenses/${uid}/${expenseId}.json?auth=${token}`, {
                method: 'PUT',
                headers: {
                    'Content-type': "application/json"
                },
                body: JSON.stringify(editExpense)
            });
        });
};

export const deleteExpense = (expenseId) => {
    const uid = localStorage.uid;

    return auth.currentUser.getIdToken(false)
        .then((token) => {
            return fetch(URL + `expenses/${uid}/${expenseId}.json?auth=${token}`, {
                method: 'DELETE'
            });
        });
};

export const refill = (refillAmount) => {
    const uid = localStorage.uid;

    if (!uid) return;

    let newRefillAmount = {
        balance: Number(refillAmount),
    }

    return fetch(URL + `amount/${uid}.json`)
        .then(res => res.json())
        .then((res) => {
            // console.log(res);
            // console.log('UID: ', uid);

            if (!res) {
                // method = 'POST';
                return;
            }

            // let keysArr = Object.keys(res);
            // let valuesArr = Object.values(res);

            if (res.balance) {
                // console.log(valuesArr[0].balance);
                // let existingAmount = Number(valuesArr[0].balance)

                newRefillAmount.balance += Number(res.balance);
            }
        })
        .then(() => {
            return auth.currentUser.getIdToken(false)
        })
        .then((token) => {
            return fetch(URL + `amount/${uid}.json?auth=${token}`, {
                method: 'PUT',
                body: JSON.stringify(newRefillAmount)
            });
        })
        .catch(error => console.log(error));
};

export const getTotalAmount = () => {
    const uid = localStorage.uid;
    // console.log(`${URL}amount/${uid}.json`);

    return fetch(`${URL}amount/${uid}.json`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            return data.balance;
        })
        .catch(error => console.log(error));
}

export const getAllExpenses = () => {
    const uid = localStorage.uid;
    // console.log(`${URL}expenses/${uid}.json`);

    return fetch(`${URL}expenses/${uid}.json`)
        .then(res => res.json())
        .then(data => {
            let amount = 0;

            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    // console.log(data[key]);
                    amount += Number(data[key].price);
                }
            }

            return amount;
        })
        .catch(error => console.log(error));
}