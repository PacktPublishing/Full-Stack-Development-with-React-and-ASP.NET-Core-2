import { Col, Grid, Row } from 'react-bootstrap';
import NavMenu from './NavMenu';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Villains';

class Layout extends Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col sm={12}>
                        <Row className="justify-content-center">
                            <Col>
                                <NavMenu currId={this.props.currId} />
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col className="justify-content-left">
                                {this.props.children}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    };
};

export default connect(
    state => state.villains,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Layout);
