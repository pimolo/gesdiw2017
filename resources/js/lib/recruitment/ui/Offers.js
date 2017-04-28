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
    }
};

/*
{"_id":"5900c333e0457755d0e83a16",
"updatedAt":"2017-04-26T15:56:35.204Z",
"createdAt":"2017-04-26T15:56:35.204Z",
"title":"Ingénieur Développement Java / PHP H/F",
"contractType":"CDI",
"category":"Technique",
"location":"France , Ile-de-France",
"city":"Paris",
"education":"Bac +2",
"__v":0,
"deleted":false,
"qualifications":[{"requiredExperience":2,
"name":"Java",
"_id":"5900c333e0457755d0e83a17"}],
"description":{"mission":"<p>Suite &agrave; sa forte croissance, la Business Unit Digitale recrute, dans le cadre de missions et projets durables, des Ing&eacute;nieurs d'&eacute;tudes. En tant qu'Ing&eacute;nieur d'&eacute;tudes Java/JEE et/ou PHP, vous serez en charge de :</p>\n<p>- L'analyse d&eacute;taill&eacute;e &agrave; partir des besoins des utilisateurs et de l'analyse fonctionnelle,</p>\n<p>- La conception technique g&eacute;n&eacute;rale et d&eacute;taill&eacute;e en amont du projet,</p>\n<p>- La r&eacute;alisation des d&eacute;veloppements, les tests d'int&eacute;gration, les tests unitaires, la documentation,</p>\n<p>- La correction des anomalies,</p>\n<p>- La maintenance corrective et &eacute;volutive de l'application.</p>",
"profile":"<p>De formation sup&eacute;rieure en informatique vous connaissez et avez pratiqu&eacute; la programmation JEE. La bonne connaissance des Framework Spring IOC, Struts et Hibernate est fortement recommand&eacute;e pour le back-end et AngularJS, ReactJS ou JQuery pour le front-end.</p>\n<p>Vous avez un sens d&eacute;velopp&eacute; du service et aimez travailler en &eacute;quipe, sur des syst&egrave;mes complexes, tout en faisant preuve d'autonomie, de rigueur et de clart&eacute; d'expression.&nbsp;</p>",
"entity":"<p>2&egrave;me ESN du Grand Ouest avec plus de 1500 collaborateurs, Gfi Informatique est pr&eacute;sente sur 9 agences de proximit&eacute; (Nantes, Niort, Rennes, Lannion, Caen, Le Mans, Orl&eacute;ans, Tours et Brest). Le savoir-faire et l'expertise de nos collaborateurs permettent d'accompagner nos clients grands comptes dans les phases de conception, de r&eacute;alisation, d'&eacute;volution et de maintenance en conditions op&eacute;rationnelles de leur SI. Nous poursuivons en 2017 notre dynamique de croissance sur la r&eacute;gion en recrutant 300 nouveaux talents. Rejoignez une &eacute;quipe qui marque !</p"}}
*/

export default class Offers extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    renderNoOffers() {
        return (
            <div className="display-flex-column text-center full-width">
                <p>Aucune offre disponible à l'heure actuelle</p>
            </div>
        );
    }

    handleOfferClick = offer => {
        console.debug(offer);
    }

    renderOfferLines() {
        this.props.offers.data.forEach( offer => {
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
