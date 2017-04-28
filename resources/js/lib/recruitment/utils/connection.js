const login_regex =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class ConnectionUtils {
    constructor() {

    }
    isLoginValid = login => login_regex.test(login)
    isPasswordValid = password => password.length > 2
    storeSession = token => {
        if ( localStorage ) {
            localStorage.setItem("token", token);
        }
    }
    getSession = () => {
        if ( localStorage ) {
            const token = localStorage.getItem("token");
            if ( token && this.isPasswordValid(token) )
                return token
        }
        return false;
    }
    killSession = () => {
        if ( localStorage )
            localStorage.removeItem("token");
    }

}
