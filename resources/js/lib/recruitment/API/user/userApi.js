import $ from "jquery";

const base_url = "http://gfi-talents.azurewebsites.net/api/v1";

export default class UserApi {
    constructor () {
        // this.baseUrl = "http://hackathon.gfi/";
    }

    connection(login, password, callback) {
        $.ajax({
            method: "POST",
            url: base_url + "/auth/basic/login",
            data:{
                username: login,
                password
            }
        }).done( response => {
            callback(response);
        });
    }

    linkedinConnection(callback) {
        $.ajax({
            method: "GET",
            url: base_url + "/auth/linkedin/login"
        }).done( response => {
            callback(response);
        });
    }

    logout(callback) {
        return $.ajax({
            method: "GET",
            url: base_url + "/auth/logout"
        }).done( response => {
            callback(response);
        });
    }
}
