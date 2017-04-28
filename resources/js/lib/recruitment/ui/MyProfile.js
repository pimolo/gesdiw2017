import React from 'react';
import TextField from 'material-ui/TextField';

const styles = {
    "p": {
        "margin": "10px 0"
    },
    "select-domain": {
        display: "block",
        margin: "0 auto"
    },
    "launch-test-button" : {
        "color": "white",
        "text-transform": "uppercase",
        "width": "14vw",
        "margin": "0 auto",
        "padding": "5px"
    }
};

export default class MyProfile extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <main className="text-align-center">
                <h2 className="text-uppercase">Mon compte</h2>
                <div>
                    <TextField
                        disabled={true}
                        hintText="Antoine Machin"
                    /><br />
                    <br />
                    <TextField
                        hintText="The hint text can be as long as you want, it will wrap."
                    /><br />
                    <TextField
                        id="text-field-default"
                        defaultValue="Default Value"
                    /><br />
                    <TextField
                        hintText="Hint Text"
                        floatingLabelText="Floating Label Text"
                    /><br />
                    <TextField
                        defaultValue="Default Value"
                        floatingLabelText="Floating Label Text"
                    /><br />
                    <TextField
                        hintText="Hint Text"
                        floatingLabelText="Fixed Floating Label Text"
                        floatingLabelFixed={true}
                    /><br />
                    <TextField
                        hintText="Password Field"
                        floatingLabelText="Password"
                        type="password"
                    /><br />
                    <TextField
                        hintText="MultiLine with rows: 2 and rowsMax: 4"
                        multiLine={true}
                        rows={2}
                        rowsMax={4}
                    /><br />
                    <TextField
                        hintText="Message Field"
                        floatingLabelText="MultiLine and FloatingLabel"
                        multiLine={true}
                        rows={2}
                    /><br />
                    <TextField
                        hintText="Full width"
                        fullWidth={true}
                    />
                </div>
            </main>
        );
    }
}
