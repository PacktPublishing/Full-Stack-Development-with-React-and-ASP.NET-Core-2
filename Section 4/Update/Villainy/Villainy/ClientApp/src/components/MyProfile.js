import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Villains';

class FellowVillains extends Component {

    componentWillMount() {
        this.props.requestVillain("junq");
    }

    renderItem(villain) {
        return (
            <tr key={villain.name}>
                <td>{villain.name}</td>
                <td>{villain.powers}</td>
                <td>{villain.hobbies}</td>
                <td></td>
                <td></td>
            </tr>);
    }

    renderVillainTable(props) {
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
                    {
                        this.renderItem(props.villain)
                    }
                </tbody>
            </table>
        );
    }

    render() {
        return (
            <div>
                <h1>Fellow villain</h1>
                {this.renderVillainTable(this.props)}
            </div>
        );
    }
}

export default connect(
    state => state.villains,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(FellowVillains);
