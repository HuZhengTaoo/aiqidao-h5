import React from "react";
import { Route, Switch } from "react-router-dom";

import IndexComponents from './components/index';
import Share from './components/share';
import Search from './components/search';
import Result from './components/result';
import Group from './components/qqgroup';
import Test from './components/test';


const routes = (
	<Switch>
		<Route path="/test" component={Test}/>
		<Route path="/search" component={Search} />
		<Route path="/share" component={Share} />
		<Route path="/result" component={Result} />
		<Route path="/group" component={Group} />
		<Route path="/" component={IndexComponents} />
		
	</Switch>
);


export default routes