import React from "react";
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default class OfferModal extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render () {
        const offer = this.props.offers.displaid_offer;
        if ( offer !== false ) {
            const actions = [
                <FlatButton
                  label="Cancel"
                  primary={true}
                />,
                <FlatButton
                  label="Submit"
                  primary={true}
                  keyboardFocused={true}
                />,
            ];
            return (
                <div>
                    <RaisedButton label="Scrollable Dialog"/>
                    <Dialog
                        title={offer.title}
                        actions={actions}
                        modal={false}
                        open={offer !== false}
                        autoScrollBodyContent={true}
                        onRequestClose={this.props.hide_offer}
                    >
                    </Dialog>
                </div>
            );
        } else
            return null;
    }
}
OfferModal.propTypes = {
    hide_offer: PropTypes.func.isRequired
};
