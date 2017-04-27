import React from "react";
import PropTypes from 'prop-types';

const styles = {
    selectDomain: {
        display: 'block',
        margin: '0 auto'
    },
    buttonEnabled: {
        color: 'white',
        textTransform: 'uppercase',
        width: '14vw',
        margin: '0 auto',
        padding: '5px',
        backgroundColor: 'orange'
    },
    buttonDisabled: {
        color: 'white',
        textTransform: 'uppercase',
        width: '14vw',
        margin: '0 auto',
        padding: '5px',
        backgroundColor: 'grey'
    }
}

export default class MyTests extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <main>
                <h2 className="text-uppercase text-align-center">Mes tests</h2>
                <p className="text-uppercase text-align-center">Sélectionner un domaine d'activité</p>
                <select style={styles.selectDomain} className="select-domain" name="domain" id="domain">
                    <option value="1">Développement</option>
                </select>
                <h3 className="text-uppercase">Tests disponibles</h3>
                <div className="test-card text-align-center">
                    <h4 className="test-card-header text-uppercase">
                        Test PHP5
                    </h4>
                    <p>Mettez vos compétences à l'épreuve en lançant un test PHP5.</p>
                    <div className="test-card-footer">
                        <p>Etat : <span className="text-invalid">Non validé</span></p>
                        <div style={styles.buttonEnabled} className="launch-test-button">Lancer le test</div>
                    </div>
                </div>
                <div className="test-card text-align-center">
                    <h4 className="test-card-header text-uppercase">
                        Test Java
                    </h4>
                    <p>Mettez vos compétences à l'épreuve en lançant un test Java.</p>
                    <div className="test-card-footer">
                        <p>Etat : <span className="text-valid">Validé</span></p>
                        <div style={styles.buttonDisabled} className="launch-test-button">Lancer le test</div>
                    </div>
                </div>
            </main>
        );
    }
}
