import React from 'react';
import { connect } from 'react-redux';

const MyProfile = props => (
    <div>
        <h1>Me</h1>
        <p>This is my personal page</p>
        <p>Here you will be able to edit and view your profile</p>
    </div>
);

export default connect()(MyProfile);
