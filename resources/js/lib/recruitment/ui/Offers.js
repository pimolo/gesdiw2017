import React from "react";
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import Spinner from './Spinner';
import OfferModal from '../container/OfferModal';
import FlatButton from 'material-ui/FlatButton';
import LocationSearch from 'material-ui/svg-icons/device/location-searching';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';


const styles = {
    validConnect: {
        marginTop: "20px"
    },
    contentContainer: {
        paddingBottom: "20px"
    },
    secondTitle: {
        maxWidth: "850px"
    },
    latestOffersTitle: {
        maxWidth: "850px",
        marginTop: "40px"
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
        this.props.display_offer(offer);
    }

    renderOfferLines() {
        return this.props.offers.data.map( (offer, key) => {
            return (
                <TableRow key={key}>
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

    renderPrevierOffer(offer) {
        return (
            <article className="text-center display-flex-column space-between offer-card full-width medium-grey">
                <p className="title-3 uppercase">{offer.title}</p>
                <p className="offer-element">{offer.city + ' ' + offer.location}</p>
                <p className="offer-element">Contrat : <span className="font-bold">{offer.contractType}</span></p>
                <p className="offer-element color-success">tests validés</p>
                <RaisedButton
                    label="CONSULTER"
                    style={styles.rdvButtonContainer}
                    buttonStyle={styles.buttonStyle}
                    labelPosition="before"
                    onTouchTap={() => {this.handleOfferClick(offer)}}
                />
            </article>
        )
    }

    renderPreviewOffers() {
        const [first, sec, third] = this.props.offers.data;
        const finalDOM = [];

        finalDOM.push(this.renderPrevierOffer(first));
        if ( sec )
            finalDOM.push(this.renderPrevierOffer(sec));
        if ( third )
            finalDOM.push(this.renderPrevierOffer(third));

        return (
            <div style={styles.secondTitle} className="display-flex-row space-around margin-reset full-width">
                {finalDOM}
            </div>
        );
    }

    renderOffers() {
        return (
            <div style={styles.contentContainer} className="display-flex-column space-between full-width card margin-auto">

                <h2 className="uppercase text-center medium-grey title-1">nos offres</h2>

                {this.renderPreviewOffers()}

                <h3 style={styles.latestOffersTitle} className="uppercase full-width title-4 text-left medium-grey font-bold">Dernières offres</h3>
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
        else {
            return (
                <div>
                    {this.renderOffers()}
                    <OfferModal/>
                </div>
            );
        }
    }
}
Offers.propTypes = {
    display_offer: PropTypes.func.isRequired
};
