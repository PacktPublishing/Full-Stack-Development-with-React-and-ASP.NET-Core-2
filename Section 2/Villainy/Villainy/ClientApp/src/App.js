import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import FellowVillains from './components/FellowVillains';
import MyProfile from './components/MyProfile';

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/FellowVillains' component={FellowVillains} />
        <Route path='/FellowVillains/:id' component={FellowVillains} />
        <Route path='/MyProfile' component={MyProfile} />
        <Route path='/signin' component={MyProfile} />
    </Layout>
);
