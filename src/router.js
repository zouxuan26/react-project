import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {IndexPage} from "./page";
import MyApp from "./page/button";
import Profile from "./page/imag";
import ExampleComponent from "./page/http";

export class MainRouter extends React.Component {
    render() {
        const routes = [
            {path: '/button', component: MyApp, label: 'button'},
            {path: '/http', component: ExampleComponent, label: 'http'},
            {path: '/imag', component: Profile, label: 'imag'},
            {path: '/index', component: IndexPage, label: 'index'}
        ];

        return (
            <Router>
                <div>
                    {/* 放置在每个页面最下方的切换按钮 */}
                    <div style={{position: 'fixed', bottom: 0, left: 0, right: 0, padding: '10px', background: '#eee'}}>
                        {routes.map((route, index) => (
                            <React.Fragment key={route.path}>
                                {index > 0 && ' | '}
                                <Link to={route.path}>{route.label}</Link>
                            </React.Fragment>
                        ))}
                    </div>

                    {/* 页面内容 */}
                    <Switch>
                        {routes.map(route => (
                            <Route key={route.path} path={route.path} component={route.component}/>
                        ))}
                    </Switch>
                </div>
            </Router>
        );
    }
}