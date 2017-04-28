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
        boxShadow: "whocares",
        height: "10vh",
        position: "fixed",
        top: 0,
        left: 0,
        paddingLeft: "34px",
        paddingBottom: "5px"
    },
    mediumIcon : {
        height: 30,
        width: 30,
        cursor: "pointer"
    },
    medium: {
        width: "auto",
        height: "auto",
        cursor: "pointer"
    },
    logo:{
        width: "auto",
        height: "100%",
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

    renderLogo() {
        return (
            <img style={styles.logo}
            onTouchTap={this.props.displayLanding} src="resources/img/logo_gfi_talents.png"/>
        )
    }

    renderLeftElementsConnected() {
        return (
            <div className="full-height display-flex-row">
                {this.renderLogo()}
                <div className="full-height display-flex-row" style={styles.centerLinksContainer}>
                    <FlatButton onTouchTap={this.props.displayMyProfile} primary={this.props.content.current === "my_profile"} labelStyle={styles.linkLabel}
                     label="mon profil"/>
                    <FlatButton onTouchTap={this.props.displayMyCalendar} labelStyle={styles.linkLabel}
                    primary={this.props.content.current === "my_calendar"} label="mon calendrier"/>
                    <FlatButton onTouchTap={this.props.displayMyOffers} primary={this.props.content.current === "my_offers"} labelStyle={styles.linkLabel} label="mes offres"/>
                    <FlatButton onTouchTap={this.props.displayMyTests} primary={this.props.content.current === "my_tests"} labelStyle={styles.linkLabel} label="mes tests"/>
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
            <div className="display-flex-column space-around">
                <p className="color-white title-6 text-right">Bonjour, {this.props.user.data.displayName}</p>
                <FlatButton
                    labelStyle={styles.linkLabel}
                    onTouchTap={this.props.logout}
                    label="deconnexion"
                />
            </div>
        );
    }
    renderRightElementsVisitor() {
        return (
            <FlatButton
                labelStyle={styles.linkLabel}
                onTouchTap={this.props.displayLogin}
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
    displayLogin: PropTypes.func.isRequired,
    displayOffers: PropTypes.func.isRequired,
    displayMyOffers: PropTypes.func.isRequired,
    displayMyTests: PropTypes.func.isRequired,
    displayMyProfile: PropTypes.func.isRequired,
    displayMyCalendar: PropTypes.func.isRequired,
    displayLanding: PropTypes.func.isRequired
};
