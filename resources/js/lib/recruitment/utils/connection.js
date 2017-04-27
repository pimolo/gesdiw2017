const login_regex =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class ConnectionUtils {
    constructor() {

    }
    isLoginValid = login => login_regex.test(login)
    isPasswordValid = password => password.length > 2
    storeSession = (login, password) => {
        if ( localStorage ) {
            localStorage.setItem("login", login);
            localStorage.setItem("password", password);
        }
    }
    getSession = () => {
        if ( localStorage ) {
            const login = localStorage.getItem("login");
            const password = localStorage.getItem("password");
            if ( login && this.isLoginValid(login) && password && this.isPasswordValid(password))
                return {login, password}
        }
        return false;
    }
    killSession = () => {
        if ( localStorage ) {
            localStorage.removeItem("login");
            localStorage.removeItem("password");
        }
    }

}
