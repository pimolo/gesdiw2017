import React from "react";
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const styles = {
    mediumIcon : {
        height: 30,
        width: 30,
        cursor: "pointer"
    },
    medium: {
        width: 42,
        height: 42,
        padding: "0 25px 0 0",
        cursor: "pointer"
    }
};

export default class Navbar extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    getDisplayClass() {
        return this.props.display ?
            "navbar-ui" :
            "navbar-ui-hidden";
    }

    componentWillMount() {

    }

    // logo_accueil,  mon profil, mon calendrier, mes offres, mes tests, deco

    render () {
        return (
            <AppBar
                title={this.props.title}
                className={this.getDisplayClass()}
                iconElementLeft={
                  <IconButton
                      iconStyle={styles.mediumIcon}
                      style={styles.medium}
                      onClick={this.props.toggleNavbar}
                  >
                      <ActionHome color="white"/>
                  </IconButton>}/>
        );
    }
}


Navbar.propTypes = {
    toggleNavbar: PropTypes.func.isRequired,
    display: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
};
