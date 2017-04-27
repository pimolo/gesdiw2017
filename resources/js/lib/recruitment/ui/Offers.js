import React from "react";
import PropTypes from 'prop-types';

export default class Offers extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render () {
        return (

            <main>
                <div className="tape"></div>
                <h2 className="uppercase text-center">Mes offres en cours</h2>
                <h3 className="uppercase">Mes candidatures</h3>
                <div className="text-center">
                    <p className="offer-element uppercase">poste</p>
                    <hr />
                    <p className="offer-element">address</p>
                    <p className="offer-element">Contrat : <span className="font-bold">CDI</span></p>
                    <p className="offer-element">tests</p>
                </div>
                <article className="text-center">
                    <p className="offer-element uppercase">poste</p>
                    <hr />
                    <p className="offer-element">address</p>
                    <p className="offer-element">Contrat : <span className="bold">CDI</span></p>
                    <div className="offer-element">test php :
                        <span className="text-valid">validé</span>
                          <br />
                          test java : <span className="text-invalid">Non validé</span>
                    </div>
                </article>
                <h3 className="text-uppercase">Autres offres dans mon domaine</h3>
                <table className="text-uppercase">
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
