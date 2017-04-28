import React from "react";
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
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
                    <TableRow>
                        <TableRowColumn>Développeur IOS</TableRowColumn>
                        <TableRowColumn>Paris</TableRowColumn>
                        <TableRowColumn>CDD</TableRowColumn>
                        <TableRowColumn>Consulter</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Développeur IOS</TableRowColumn>
                        <TableRowColumn>Paris</TableRowColumn>
                        <TableRowColumn>CDD</TableRowColumn>
                        <TableRowColumn>Consulter</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Développeur IOS</TableRowColumn>
                        <TableRowColumn>Paris</TableRowColumn>
                        <TableRowColumn>CDD</TableRowColumn>
                        <TableRowColumn>Consulter</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Développeur IOS</TableRowColumn>
                        <TableRowColumn>Paris</TableRowColumn>
                        <TableRowColumn>CDD</TableRowColumn>
                        <TableRowColumn>Consulter</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        );
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
                    <article style={styles.cardOffer} className="text-center display-flex-column space-between offer-card full-width medium-grey">
                        <p className="title-3 uppercase">développeur(se) full stack - php & java - expert</p>
                        <p className="offer-element">23 rue de patrick balkany, t'es un champion - FISTCITY 666</p>
                        <p className="offer-element">Contrat : <span className="font-bold">CDI</span></p>
                        <p className="offer-element color-success">tests validés</p>
                        <RaisedButton
                            label="RDV"
                            style={styles.rdvButtonContainer}
                            buttonStyle={styles.buttonStyle}
                            labelPosition="before"
                        />
                    </article>
                    <article style={styles.cardOffer} className="text-center display-flex-column space-between offer-card full-width medium-grey">
                        <p className="title-3 uppercase">développeur(se) apprenti - php & java - junior</p>
                        <p className="offer-element">23 rue de patrick balkany, t'es un champion - FISTCITY 666</p>
                        <p className="offer-element">Contrat : <span className="font-bold">CDI</span></p>
                        <p className="offer-element">test java : <span className="dark-grey">Non validé</span></p>
                    </article>
                </div>
                <h3 style={styles.thirdTitle} className="uppercase full-width title-4 text-left medium-grey font-bold">Offres qui peuvent vous intéresser</h3>
                {this.renderInterestingOffers()}
          </main>
        );
    }
}
MyOffers.propTypes = {
    displayMyCalendar: PropTypes.func.isRequired
};
