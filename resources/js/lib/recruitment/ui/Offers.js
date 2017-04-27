import React from "react";
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    validConnect: {
        marginTop: "20px"
    }
};

export default class Offers extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <main className="card">
                <h2 className="uppercase text-center medium-grey title-1">Mes offres</h2>
                <RaisedButton
                    style={styles.validConnect}
                    label="MON CALENDRIER"
                    labelPosition="before"
                />

                <h3 className="uppercase">Mes candidatures</h3>
                <article className="text-center">
                    <p className="test-card-header uppercase">poste</p>
                    <p className="offer-element">address</p>
                    <p className="offer-element">Contrat : <span className="font-bold">CDI</span></p>
                    <p className="offer-element">tests</p>
                </article>
                <article className="text-center">
                    <p className="test-card-header uppercase">poste</p>
                    <p className="offer-element">address</p>
                    <p className="offer-element">Contrat : <span className="font-bold">CDI</span></p>
                    <p className="offer-element">test java : <span className="text-invalid">Non validé</span></p>
                </article>
                <h3 className="uppercase">Autres offres dans mon domaine</h3>
                <table className="uppercase">
                    <thead>
                        <tr className="head-row">
                            <th>Offres</th>
                            <th>Ville</th>
                            <th>Contrat</th>
                            <th>Voir cette offre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Développeur IOS</td>
                            <td>Paris</td>
                            <td>CDI</td>
                            <td><i className="fa fa-search" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                            <td>Développeur Web</td>
                            <td>Paris</td>
                            <td>CDI</td>
                            <td><i className="fa fa-search" aria-hidden="true"></i></td>
                        </tr>
                    </tbody>
                </table>
          </main>
        );
    }
}
