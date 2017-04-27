import React from "react";
import PropTypes from 'prop-types';

const styles = {};

export default class Offer extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    getTestsStatus() {
        
    }

    componentWillMount() {

    }

    // logo_accueil,  mon profil, mon calendrier, mes offres, mes tests, deco

    render () {
        return (
        <section>
            <div class="text-uppercase">
                poste
            </div>
            <div>
                address
            </div>
            <div>
                Contrat : contrat
            </div>
            <div>
                {this.getTestsStatus}
            </div>
        </section>
        );
    }
}


Navbar.propTypes = {
    toggleNavbar: PropTypes.func.isRequired,
    display: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
};
