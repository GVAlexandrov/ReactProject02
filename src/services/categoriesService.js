let getAll = (category = '') => {
    let url = 'http://localhost:5000/expenses';
    url += (category && category != 'all') ? `?category=${category}` : '';

    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error));
}


export default getAll;