import React from "react";
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const styles = {
    navStyle: {
        background: "whocares",
        backgroundColor: "whocares",
        height: "10vh",
        position: "fixed",
        top: 0,
        left: 0
    },
    mediumIcon : {
        height: 30,
        width: 30,
        cursor: "pointer"
    },
    medium: {
        width: 42,
        height: 42,
        cursor: "pointer"
    },
    linkLabel: {
        color: "#fff",
        textTransform: "capitalize"
    },
    centerLinksContainer: {
        width: "85%"
    },
    leftElementsContainer: {
        width: "95%"
    }
};

export default class Navbar extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    decoAction() {
        console.log("coucou deco !");
    }

    renderLogo() {
        return (
            <IconButton
                iconStyle={styles.mediumIcon}
                style={styles.medium}
                onTouchTap={this.props.toggleNavbar}
            >
                <ActionHome color="white"/>
            </IconButton>
        )
    }

    renderLeftElementsConnected() {
        return (
            <div className="full-height display-flex-row">
                {this.renderLogo()}
                <div className="full-height display-flex-row" style={styles.centerLinksContainer}>
                    <FlatButton labelStyle={styles.linkLabel} label="mon profil"/>
                    <FlatButton labelStyle={styles.linkLabel} label="mon calendrier"/>
                    <FlatButton labelStyle={styles.linkLabel} label="mes offres"/>
                    <FlatButton labelStyle={styles.linkLabel} label="mes tests"/>
                </div>
            </div>
        );
    }
    renderLeftElements() {
        if ( this.props.user.isConnected )
            return this.renderLeftElementsConnected()
        else
            return this.renderLogo()
    }

    renderRightElementsConnected() {
        return (
            <FlatButton
                labelStyle={styles.linkLabel}
                onTouchTap={this.props.logout}
                label="deconnexion"
            />
        );
    }
    renderRightElementsVisitor() {
        return (
            <FlatButton
                labelStyle={styles.linkLabel}
                onTouchTap={this.props.connection}
                label="connexion"
            />
        );
    }
    renderRightElements() {
        if ( this.props.user.isConnected )
            return this.renderRightElementsConnected()
        else
            return this.renderRightElementsVisitor()
    }

    render () {
        return (
            <AppBar
                style={styles.navStyle}
                className="gfi-talents-navbar"
                iconElementLeft={this.renderLeftElements()}
                iconStyleLeft={styles.leftElementsContainer}
                iconElementRight={this.renderRightElements()}
            />
        );
    }
}


Navbar.propTypes = {
    navbar: PropTypes.shape({
        display: PropTypes.bool.isRequired
    }).isRequired,
    user: PropTypes.shape({
        isConnected: PropTypes.bool.isRequired
    }).isRequired,
    connection: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
};
