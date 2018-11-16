import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/Villains';

class FellowVillains extends Component {

    state = {
        name: "",
        powers: "",
        hobbies: ""
    };

    componentWillMount() {
        // This method runs when the component is first added to the page
        this.props.requestVillains();
    }

    addVillain() {
        //const villain = { name: "Smoke Jumper", powers: "Can control fire and smoke", hobbies: "Hijacking, arson, poetry" };
        const villain = { name: this.state.name, powers: this.state.powers, hobbies: this.state.hobbies };
        this.props.addVillain(villain);
        this.props.requestVillains();
    }

    render() {
        return (
            <div>
                <h1>Fellow villains</h1>
                <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
                {renderVillainsTable(this.props)}

                <table>
                    <tr>
                        <td>
                            Name:
                        </td>
                        <td>
                            <input id="villainName" type="text" value={this.state.name} onChange={(ev) => this.setState({ name: ev.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Powers:
                        </td>
                        <td>
                            <input id="villainPowers" type="text" value={this.state.powers} onChange={(ev) => this.setState({ powers: ev.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Hobbies:
                        </td>
                        <td>
                            <input id="villainHobbies" type="text" value={this.state.hobbies} onChange={(ev) => this.setState({ hobbies: ev.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button onClick={this.addVillain.bind(this)}>Add</button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

function renderVillainsTable(props) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Powers</th>
                    <th>Hobbies</th>
                </tr>
            </thead>
            <tbody>
                {props.villains.map(villain =>
                    <tr key={villain.name}>
                        <td>{villain.name}</td>
                        <td>{villain.powers}</td>
                        <td>{villain.hobbies}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default connect(
    state => state.villains,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(FellowVillains);
