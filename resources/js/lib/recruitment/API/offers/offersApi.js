import $ from "jquery";

const base_url = "http://51.141.26.63/api/v1/offers";

export default class OffersApi {
    constructor () {
    }

    getAll(callback) {
        $.ajax({
            method: "GET",
            url: base_url
        }).done( response => {
            callback(response);
        });
    }

    addOfferToUserInterests(token, offer_id, callback) {
        $.ajax({
            method: "POST",
            url: base_url + "/apply/"+offer_id,
            beforeSend(xhr) {
                xhr.setRequestHeader('Authorization', 'JWT ' + token);
            }
        }).done( response => {
            callback(response);
        });
    }

    // /suggested,  with user bearer
    // /users/suggested,  with user bearer  --> classement

}
