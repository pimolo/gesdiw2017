import React from "react";
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const styles = {
    container: {
        maxWidth: '960px'
    },
    inputContainer: {
        maxWidth: '500px',
        padding: '10px 0'
    },
    colorStyle: {
        color: '#F07F0A'
    },
    borderStyle: {
        borderColor: '#F07F0A'
    }
};

export default class Connection extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div style={styles.container} className="margin-auto card full-width display-flex-column card-border orange">
                <h2 className="gfi-title title-1 uppercase">Connexion</h2>
                <div style={styles.inputContainer} className="margin-auto full-width display-flex-column">
                    <TextField
                        hintText="Votre email"
                        floatingLabelText="Email"
                        type="email"
                        floatingLabelFocusStyle={styles.colorStyle}
                        hintStyle={styles.colorStyle}
                        underlineFocusStyle={styles.borderStyle}
                    />
                    <TextField
                        hintText="Mot de passe"
                        floatingLabelText="Mot de passe"
                        type="password"
                        floatingLabelFocusStyle={styles.colorStyle}
                        hintStyle={styles.colorStyle}
                        underlineFocusStyle={styles.borderStyle}
                    />
                    <a className="text-center title-5 default-color full-width no-decoration" href="#">S'inscrire</a>
                </div>
            </div>
        );
    }
}
