import $ from "jquery";

const base_url = "http://51.141.26.63/api/v1";

export default class UserApi {
    constructor () {
        // this.baseUrl = "http://hackathon.gfi/";
    }

    connection(login, password, callback) {
        $.ajax({
            method: "POST",
            url: base_url + "/getAccessToken",
            data:{
                email: login,
                password
            }
        }).done( response => {
            callback(response);
        });
    }

    linkedinConnection(callback) {
        $.ajax({
            method: "GET",
            url: base_url + "/linkedin/login"
        }).done( response => {
            callback(response);
        });
    }

    getMe(token, callback) {
        $.ajax({
            method: "GET",
            url: base_url + "/users/me",
            beforeSend(xhr) {
                xhr.setRequestHeader('Authorization', 'JWT ' + token);
            }
        }).done( response => {
            callback(response);
        }).fail( response => {
            // console.log("ffs", response);
            callback({error: response})
        });
    }

    logout(token, callback) {
        return $.ajax({
            method: "GET",
            url: base_url + "/logout",
            beforeSend(xhr) {
                xhr.setRequestHeader('Authorization', 'JWT ' + token);
            }
        }).done( response => {
            callback(response);
        });
    }
}
