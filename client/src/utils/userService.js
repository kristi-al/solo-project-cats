const baseUrl = 'http://localhost:3030/';

export const register = (user) => {
    return fetch(baseUrl + 'register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }).then((result) => result.json())
    .catch(error => console.log(error))
};

export const login = (user) => {
    return fetch(baseUrl + 'login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }).then((result) => result.json())
    .catch(error => console.log(error))
};

export const logout = () => {
    return fetch(baseUrl + 'logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((res) => res.json())
        .catch((err) => console.log(err));
}