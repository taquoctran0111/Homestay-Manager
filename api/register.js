const register = (username,  password) => (
    fetch("http://192.168.0.5:5000/signup",
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
);

module.exports = register;
