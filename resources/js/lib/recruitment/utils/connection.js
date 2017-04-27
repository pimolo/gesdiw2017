const login_regex =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class ConnectionUtils {
    constructor() {

    }
    isLoginValid = login => login_regex.test(login)
    isPasswordValid = password => password.length > 3
    storeSession = (login, password, data) => {
        console.debug(localStorage);
        if ( localStorage ) {
            localStorage.setItem("login", login);
            localStorage.setItem("password", password);
            localStorage.setItem("data", data);
        }
    }
    getSession = () => {
        if ( localStorage ) {
            const login = localStorage.getItem("login");
            const password = localStorage.getItem("password");
            const data = localStorage.getItem("data");
            if ( login && this.isLoginValid(login) && password && this.isPasswordValid(password))
                return {login, password, data}
        }
        return false;
    }

}
