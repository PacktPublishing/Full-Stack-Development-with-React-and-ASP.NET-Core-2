import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Villains';

class FellowVillains extends Component {

    state = {
        name: "",
        powers: "",
        hobbies: "",
        editing: ""
    }

    componentWillMount() {
        // This method runs when the component is first added to the page
        this.props.requestVillains();
    }

    addVillain() {
        const villain = { name: this.state.name, powers: this.state.powers, hobbies: this.state.hobbies };
        this.props.addVillain(villain);
        setTimeout(this.props.requestVillains, 600);
    }

    toggleEditing(itemId) {
        this.setState({ editing: itemId });
    }

    handleVillainUpdate(villain) {
        this.props.updateVillain(villain);
        setTimeout(this.props.requestVillains, 600);
    }

    handleVillainDelete(villain) {
        this.props.deleteVillain(villain);
        setTimeout(this.props.requestVillains, 500);
    }

    handleEditField(event) {
        if (event.keyCode === 13) {
            let target = event.target,
                update = {};

            update.name = this.state.editing;
            update[target.name] = target.value;
        }
    }

    handleEditItem() {
        let itemId = this.state.editing;

        var editVillain = this.props.villains.find((v) => v.name === itemId);

        editVillain.powers = this.refs[`powers_${itemId}`].value;
        editVillain.hobbies = this.refs[`hobbies_${itemId}`].value;

        this.handleVillainUpdate(editVillain);
        this.setState({ editing: "" });
    }

    handleDeleteItem() {
        let itemId = this.state.editing;

        var deleteVillain = this.props.villains.find((v) => v.name === itemId);

        this.handleVillainDelete(deleteVillain);
        this.setState({ editing: "" });
    }

    renderItemOrEditField(villain) {
        if (this.state.editing === villain.name) {
            return (
                <tr key={villain.name}>
                    <td>{villain.name}</td>
                    <td>
                        <input
                            onKeyDown={this.handleEditField}
                            type="text"
                            ref={`powers_${villain.name}`}
                            name="powers"
                            defaultValue={villain.powers}
                        />
                    </td>
                    <td>
                        <input
                            onKeyDown={this.handleEditField}
                            type="text"
                            ref={`hobbies_${villain.name}`}
                            name="hobbies"
                            defaultValue={villain.hobbies}
                        />
                    </td>
                    <td>
                        <button onClick={this.handleEditItem.bind(this)} label="Update Item" >Update</button>
                    </td>
                    <td>
                        <button onClick={this.handleDeleteItem.bind(this)} label="Delete Item" >Delete</button>
                    </td>
                </tr>);
        } else {
            return (
                <tr key={villain.name}
                    onClick={this.toggleEditing.bind(this, villain.name)}
                >
                    <td>{villain.name}</td>
                    <td>{villain.powers}</td>
                    <td>{villain.hobbies}</td>
                    <td></td>
                    <td></td>
                </tr>);
        }
    }

    renderVillainsTable(props) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Powers</th>
                        <th>Hobbies</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.villains.map(villain =>
                        this.renderItemOrEditField(villain)
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        return (
            <div>
                <h1>Fellow villains</h1>
                <p>This component demonstrates fetching data from the server and working with URL parameters.</p>
                {this.renderVillainsTable(this.props)}

                <table>
                    <tbody>
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
                    </tbody>
                </table>
            </div>
        );
    }
}


export default connect(
    state => state.villains,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(FellowVillains);
