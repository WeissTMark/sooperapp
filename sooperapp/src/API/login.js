import data from './MOCK_DATA.json'
const currUser = "CURRENT_USER";

export function login(username, password) {

}

export function register(username, password) {
    if (username === "" || password === "") {
        return 400;
    }
    let userSecret = username + ":" + password;
    let token = btoa(userSecret);
    console.log(userSecret);
    console.log(token);
    let data = generateData();
    window.sessionStorage.setItem(token, data);
    return 201
}

function generateData() {
    console.log(data)
    let userData = []
    for (let i = 0; i < 100; i++) {
        let rand = Math.floor(Math.random() * 1000)
        userData.push(data[rand])
    }
    return JSON.stringify(userData);
}