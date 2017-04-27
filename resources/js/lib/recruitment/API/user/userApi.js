import $ from "jquery";

export default class UserApi {
    constructor () {
        // this.baseUrl = "http://gfi-talents.azurewebsites.net";
        this.baseUrl = "http://hackathon.gfi/";
    }

    connection(login, password, callback) {
        $.ajax({
            method: "GET",
            url: this.baseUrl
        }).done( response => {
            callback(response);
        });
    }

    logout(callback) {
        return $.ajax({
            method: "GET",
            url: this.baseUrl + ""
        }).done( response => {
            callback(response);
        });
    }
}
