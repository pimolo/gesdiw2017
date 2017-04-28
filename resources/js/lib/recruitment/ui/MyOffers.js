import React from "react";
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import OfferModal from '../container/OfferModal';
import FlatButton from 'material-ui/FlatButton';
import LocationSearch from 'material-ui/svg-icons/device/location-searching';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const styles = {
    validConnect: {
        marginTop: "20px"
    },
    secondTitle: {
        maxWidth: "850px"
    },
    thirdTitle: {
        maxWidth: "850px",
        marginTop: "30px"
    },
    cardOffer: {
        marginLeft: "30px"
    },
    rdvButtonContainer: {
        width: "90%",
        margin: "0 auto"
    },
    buttonStyle: {
        background: "#F07F0A"
    }
};

export default class MyOffers extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    getLeftTestsToPass(offer_tests) {
        // TODO: compare user.data.tests to these ones
    }

    componentDidMount() {
        console.debug("get suggested offers");
        this.props.getSuggestedOffers();
    }

    renderLeftOverTests(left_tests) {
        if ( left_tests.length === 0 )
            return (<p className="offer-element color-success">tests validés</p>)
        else {
            return (
                <p className="offer-element color-invalid">{left_tests.map( t => t.name + " niveau "+t.requiredExperience ).join(", ")}</p>
            )
        }
    }

    renderOfferButton(offer, left_tests) {
        if ( left_tests.length === 0 ) {
            return (<RaisedButton
                label="prendre rdv"
                style={styles.rdvButtonContainer}
                buttonStyle={styles.buttonStyle}
                labelPosition="before"
            />);
        } else {
            return (<RaisedButton
                label="consulter"
                style={styles.rdvButtonContainer}
                labelPosition="before"
                onTouchTap={() => {
                    this.props.display_offer(offer);
                }}
            />);
        }
    }

    renderTableRows() {
        return this.props.user.suggested_offers.map( offer => {
            return (
                <TableRow>
                    <TableRowColumn>{offer.title}</TableRowColumn>
                    <TableRowColumn>{offer.city}</TableRowColumn>
                    <TableRowColumn>{offer.contractType}</TableRowColumn>
                    <TableRowColumn><FlatButton
                      icon={<LocationSearch />}
                      onTouchTap={() => {this.props.display_offer(offer);}}
                    /></TableRowColumn>
                </TableRow>
            );
        });
    }
    renderInterestingOffers() {
        return (
            <Table className="gfi-table-no-select" selectable={false} fixedHeader={true}>
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>Offres</TableHeaderColumn>
                        <TableHeaderColumn>Ville</TableHeaderColumn>
                        <TableHeaderColumn>Contrat</TableHeaderColumn>
                        <TableHeaderColumn>Consulter</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody stripedRows={true} displayRowCheckbox={false}>
                    {this.renderTableRows()}
                </TableBody>
            </Table>
        );
    }

    renderMyOffers() {
        if (this.props.user.data.offers.length  > 0) {
            return this.props.user.data.offers.map( _offer => {
                const offer = _offer.offerId;
                const left_tests = this.getLeftTestsToPass(offer.qualifications) || offer.qualifications;
                return (
                  <article style={styles.cardOffer} className="text-center display-flex-column space-between offer-card full-width medium-grey">
                      <p className="title-3 uppercase">{offer.title}</p>
                      <p className="offer-element">{offer.city + " - " + offer.location}</p>
                      <p className="offer-element">Contrat : <span className="font-bold">{offer.contractType}</span></p>
                      {this.renderLeftOverTests(left_tests)}
                      {this.renderOfferButton(offer, left_tests)}
                  </article>
                );
            })
        } else {
            return (<p className="full-width text-left margin-reset">Vous n'avez montré de l'intérêt pour aucune offre</p>);
        }
    }

    render () {
        return (
            <main className="card display-flex-column">
                <h2 className="uppercase text-center medium-grey title-1">Mes offres</h2>
                <RaisedButton
                    label="MON CALENDRIER"
                    labelPosition="before"
                    onTouchTap={this.props.displayMyCalendar}
                />

                <h3 style={styles.secondTitle} className="uppercase full-width title-4 text-left medium-grey font-bold">Mes candidatures</h3>
                <div style={styles.secondTitle} className="display-flex-row justify-start margin-reset full-width">
                    {this.renderMyOffers()}
                </div>
                <h3 style={styles.thirdTitle} className="uppercase full-width title-4 text-left medium-grey font-bold">Offres qui peuvent vous intéresser</h3>
                {this.renderInterestingOffers()}
                <OfferModal/>
          </main>
        );
    }
}
MyOffers.propTypes = {
    displayMyCalendar: PropTypes.func.isRequired,
    display_offer: PropTypes.func.isRequired,
    getSuggestedOffers: PropTypes.func.isRequired
};
