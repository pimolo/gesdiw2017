import React from "react";
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import Spinner from './Spinner';
import FlatButton from 'material-ui/FlatButton';
import LocationSearch from 'material-ui/svg-icons/device/location-searching';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const styles = {
    validConnect: {
        marginTop: "20px"
    },
    contentContainer: {
        paddingBottom: "20px"
    }
};

export default class Offers extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    renderNoOffers() {
        return (
            <div className="display-flex-column text-center full-height full-width">
                <p>Aucune offre disponible à l'heure actuelle</p>
            </div>
        );
    }

    handleOfferClick = offer => {
        console.debug(offer);
    }

    renderOfferLines() {
        return this.props.offers.data.map( (offer, key) => {
            console.debug("offer mofo: ", offer);
            return (
                <TableRow>
                    <TableRowColumn>{offer.title}</TableRowColumn>
                    <TableRowColumn>{offer.city}</TableRowColumn>
                    <TableRowColumn>{offer.contractType}</TableRowColumn>
                    <TableRowColumn>
                        <FlatButton
                          icon={<LocationSearch />}
                          onTouchTap={() => {this.handleOfferClick(offer)}}
                        />
                    </TableRowColumn>
                </TableRow>
            )
        });
    }
    renderOffers() {
        return (
            <div style={styles.contentContainer} className="display-flex-column space-between full-width card margin-auto">

                <h2 className="uppercase text-center medium-grey title-1">nos offres</h2>



                <Table selectable={false} fixedHeader={true}>
                    <TableHeader displaySelectAll={false}
                    adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>Offre</TableHeaderColumn>
                            <TableHeaderColumn>Ville</TableHeaderColumn>
                            <TableHeaderColumn>Contrat</TableHeaderColumn>
                            <TableHeaderColumn>Consulter</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody stripedRows={true} displayRowCheckbox={false}>
                        { this.renderOfferLines() }
                    </TableBody>
                </Table>
            </div>
        );
    }


    render () {
        if ( this.props.offers.isFetching )
            return (<Spinner/>);
        else if ( this.props.offers.data.length === 0 )
            return this.renderNoOffers();
        else
            return this.renderOffers();
    }
}
