import React from 'react';

import TextField from 'material-ui/TextField';



const styles = {

    "p": {

        "margin": "10px 0"

    },

    "select-domain": {

        display: "block",

        margin: "0 auto"

    },

    "launch-test-button" : {

        "color": "white",

        "text-transform": "uppercase",

        "width": "14vw",

        "margin": "0 auto",

        "padding": "5px"

    }

};



export default class MyProfile extends React.PureComponent {



    constructor(props) {

        super(props);

    }



    render () {

        return (

            <main className="card text-align-center">

                <h2 className="dark-grey text-uppercase">Mon compte</h2>

                <div>

                    <TextField

                        disabled={true}

                        hintText="Antoine Csk"

                    /><br />

                    <br />

                    <TextField

                        id="text-field-default"

                    /><br />

                    <TextField

                        hintText="Experience"

                        floatingLabelText="Experience"

                    /><br />

                    <TextField

                        defaultValue=""

                        floatingLabelText="Contrat"

                    /><br />

                    <TextField

                        hintText="Email"

                        floatingLabelText="Email de contact"

                        floatingLabelFixed={true}

                    /><br />

                    <TextField

                        hintText="Mot de passe"

                        floatingLabelText="Votre mot de passe"

                        type="password"

                    /><br />

                    <TextField

                        hintText="MultiLine with rows: 2 and rowsMax: 4"

                        multiLine={true}

                        rows={2}

                        rowsMax={4}

                    /><br />

                    <TextField

                        hintText="Message Field"

                        floatingLabelText="MultiLine and FloatingLabel"

                        multiLine={true}

                        rows={2}

                    /><br />

                    <TextField

                        hintText="Full width"

                        fullWidth={true}

                    />

                </div>

            </main>

        );

    }

}
