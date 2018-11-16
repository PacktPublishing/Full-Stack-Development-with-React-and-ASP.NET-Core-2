import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Villains';

class SignIn extends Component {
    state = {
        id: 0
    }

    handleEditField(event) {
        let signin = {};

        signin.id = this.state.id;
    }

    handleSignIn() {
        var id = this.refs[`villainId`].value;

        this.props.signin(id);

        this.setState({ id: 0 });
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                User:
                            </td>
                            <td>
                                <input
                                    onKeyDown={this.handleEditField.bind(this)}
                                    type="text"
                                    ref={`villainId`}
                                    name="id"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <button onClick={this.handleSignIn.bind(this)}>SignIn</button>
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
)(SignIn);
