import React from "react";
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import Offers from '../container/Offers';

const styles = {
    container: {
        maxWidth: '960px',
        minHeight: '70vh'
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
    },
    validConnect: {
        marginTop: "20px"
    },
    logoLinkedin: {
        width: "65px",
        height: "auto",
        marginTop: "12px"
    },
    marginPar: {
        marginTop: "30px"
    }
};

export default class Connection extends React.PureComponent {
    constructor(props) {
        super(props);
        this.loginError = false;
        this.passwordError = false;
    }

    handleLoginChange = e => {
        this.props.changeLoginInput(e.target.value);
        this.loginError = !this.props.connection.isLoginValid;
    }
    handlePasswordChange = e => {
        this.props.changePasswordInput(e.target.value);
        this.passwordError = !this.props.connection.isPasswordValid;
    }
    handleConnectionValidation = () => {
        if ( this.props.connection.isLoginValid && this.props.connection.isPasswordValid )
            this.props.loginRequest(this.props.connection.login, this.props.connection.password);
    }

    getLoginError() {
        return this.loginError ? "Mauvais format d'email" : "";
    }
    getPasswordError() {
        return this.passwordError ? "3 caractères minimum !" : "";
    }

    renderConnectionTemplate() {
        return (
            <div style={styles.container} className="margin-auto card full-width display-flex-column space-between card-border orange">
                <h2 className="margin-auto gfi-title title-1 uppercase">Connexion</h2>
                <div style={styles.inputContainer} className="margin-auto full-width display-flex-column">
                    <TextField
                        hintText="Votre email"
                        floatingLabelText="Email"
                        type="email"
                        floatingLabelFocusStyle={styles.colorStyle}
                        hintStyle={styles.colorStyle}
                        underlineFocusStyle={styles.borderStyle}
                        errorText={this.getLoginError()}
                        onChange={this.handleLoginChange}
                    />
                    <TextField
                        hintText="Mot de passe"
                        floatingLabelText="3 caractères minimum"
                        type="password"
                        floatingLabelFocusStyle={styles.colorStyle}
                        hintStyle={styles.colorStyle}
                        underlineFocusStyle={styles.borderStyle}
                        errorText={this.getPasswordError()}
                        onChange={this.handlePasswordChange}
                    />
                    <RaisedButton
                        style={styles.validConnect}
                        label="Valider"
                        labelPosition="before"
                        onTouchTap={this.handleConnectionValidation}
                    />
                </div>
                <div style={styles.inputContainer} className="margin-auto full-width display-flex-column">
                    <p style={styles.marginPar} className="text-center title-4 full-width uppercase dark-grey">Lier mon compte linkedIN</p>
                    <img src="resources/img/logo_linkedin.jpg" className="margin-auto" style={styles.logoLinkedin} />
                    <RaisedButton
                        style={styles.validConnect}
                        label="Connecter"
                        labelPosition="before"
                        onTouchTap={this.props.linkedinConnection}
                    />
                </div>
            </div>
        );
    }

    render () {
        if ( !this.props.user.isConnected ) {
            if ( this.props.user.isFetching ) {
                return (
                    <div className="full-width full-height relative">
                        <CircularProgress size={80} thickness={5} />
                    </div>
                );
            }
            else
                return this.renderConnectionTemplate();
        } else {
            return (
                <Offers/>
            )
        }
    }
}

Connection.propTypes = {
    connection: PropTypes.shape({
        login: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        isLoginValid: PropTypes.bool.isRequired,
        isPasswordValid: PropTypes.bool.isRequired
    }).isRequired,
    changeLoginInput: PropTypes.func.isRequired,
    changePasswordInput: PropTypes.func.isRequired,
    loginRequest: PropTypes.func.isRequired,
    linkedinConnection: PropTypes.func.isRequired
};
