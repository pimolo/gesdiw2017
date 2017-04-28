import React from "react";
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    subContainer: {
        marginTop: "30px"
    },
    parag: {
        marginTop: "15px"
    }
}

export default class OfferModal extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    isOfferInInterest(offer) {
        const matched_offer = this.props.user.data.offers.find( _offer => _offer._id === offer._id );
        console.debug("matched_offer", matched_offer);
        return ( typeof matched_offer !== "undefined"  ) ? true : false;
    }

    renderContent(offer) {
        return (
            <div className="display-flex-column full-width space-between">
                <div style={styles.subContainer} className="display-flex-column space-between full-width">
                    <p className="full-width text-left title-3 font-bold">Mission</p>
                    <p style={styles.parag} >{offer.description.mission || "Aucune description à ce jour"}</p>
                </div>
                <div style={styles.subContainer} className="display-flex-column space-between full-width">
                    <p className="full-width text-left title-3 font-bold">Profile recherché</p>
                    <p style={styles.parag} >{offer.description.profile || "Aucune description à ce jour"}</p>
                </div>
                <div style={styles.subContainer} className="display-flex-column space-between full-width">
                    <p className="full-width text-left title-3 font-bold">Compétences requises</p>
                    <p className="full-width text-left" style={styles.parag} >{offer.qualifications.map( o => o.name ).join(', ') || "Aucune description à ce jour"}</p>
                </div>
            </div>
        );
    }

    render () {
        const offer = this.props.offers.displaid_offer;
        if ( offer !== false ) {
            const actions = [
                <FlatButton
                  label="Fermer"
                  primary={true}
                  onTouchTap={this.props.hide_offer}
                />,
            ];
            if ( this.isOfferInInterest(offer) ) {
                actions.push(
                    <FlatButton
                      label="Plus intéressé"
                      primary={false}
                      keyboardFocused={false}
                      onTouchTap={() => {
                        this.props.addOfferToInterests(offer);
                        this.props.hide_offer();
                      }}
                    />
                );
            } else {
                actions.push(
                    <FlatButton
                      label="Intéressé"
                      primary={true}
                      keyboardFocused={true}
                      onTouchTap={() => {
                        this.props.addOfferToInterests(offer);
                        this.props.hide_offer();
                      }}
                    />
                );
            }
            return (
                <Dialog
                    title={offer.title + " - " + offer.contractType}
                    actions={actions}
                    modal={false}
                    open={offer !== false && !this.props.user.isFetching}
                    autoScrollBodyContent={true}
                    onRequestClose={this.props.hide_offer}
                >
                    {this.renderContent(offer)}
                </Dialog>
            );
        } else
            return null;
    }
}
OfferModal.propTypes = {
    hide_offer: PropTypes.func.isRequired,
    addOfferToInterests: PropTypes.func.isRequired
};
