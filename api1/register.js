const register = (username, email, password, password_confirmation) => {
    console.log(username); 
    console.log(email);
    console.log(password);
    console.log(password_confirmation);
    let url =  "http://192.168.0.5:8797/users";

    let data = {
            "username" : username,
            "email" : email,
            "password": password,
            "password_confirmation": password_confirmation
    }
    fetch(url,
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: data
    })
    .then((res) => {
        console.log(res);
    })
};

module.exports = register;
