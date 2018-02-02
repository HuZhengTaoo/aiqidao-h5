import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//
import routes from './route.js';

import './css/animate.css';

class AppContainer extends React.Component {
    render() {
        return <Router children={routes} />;
    }
}

export default AppContainer;
