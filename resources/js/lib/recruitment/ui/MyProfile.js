import React from "react";
import PropTypes from 'prop-types';

export default class MyProfile extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <main>
                <h2 className="text-uppercase text-align-center">Mon compte</h2>
                <form action="">
                    <fieldset>
                        <legend>Identité</legend>
                        <p>
                            <label for="civilite">Civilité : </label>
                            <label for="m"><input type="radio" name="civilite" value="m" id="m"></input> Homme</label>
                            <label for="f"><input type="radio" name="civilite" value="f" id="f"></input> Femme</label>
                            <label for="o"><input type="radio" name="civilite" value="o" id="o"></input> Autre</label>
                        </p>
                        <p>
                            <label for="lastname">Nom : <input type="text" id="lastname" name="lastname"></input></label>
                        </p>
                        <p>
                            <label for="firstname">Prénom : <input type="text" id="firstname" name="firstname"></input></label>
                        </p>
                    </fieldset>
                    <fieldset>
                        <legend>Informations complémentaires</legend>
                        <p>
                            <label for="zipcode">Code postal : <input type="text" id="zipcode" name="zipcode"></input></label>
                            <label for="city">Ville : <input type="text" id="city" name="city"></input></label>
                        </p>
                        <p>
                            <label for="phone">Téléphone : <input type="text" id="phone" name="phone"></input></label>
                        </p>
                    </fieldset>
                    <fieldset>
                        <legend>Formation</legend>
                        <p>
                            <label for="cursus">Niveau d'études : <input type="text" id="cursus" name="cursus"></input></label>
                        </p>
                        <p>
                            <label for="grade">Diplôme : <input type="text" id="grade" name="grade"></input></label>
                        </p>
                    </fieldset>
                    <fieldset>
                        <legend>Pièces jointes</legend>
                        <p>
                            <label for="cv">Mon CV : <input type="file" id="cv"></input></label>
                        </p>
                    </fieldset>
                    <fieldset>
                        <legend>Mot de passe</legend>
                        <p>
                            <label for="password">Nouveau mot de passe : <input type="password" id="password" name="password"></input></label>
                        </p>
                        <p>
                            <label for="confirm-password">Confirmation mot de passe : <input type="password" id="confirm-password" name="confirm-password"></input></label>
                        </p>
                    </fieldset>
                    <p><input className="submit-button" type="submit"></input></p>
                </form>
            </main>
        );
    }
}
