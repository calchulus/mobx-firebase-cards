import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import {Provider, observer, inject} from 'mobx-react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//stores

import {Login} from '../components/login';
import {ClockPage} from '../../clock'
import {GithubPage} from '../../github';
import {githubStore} from '../../github';
import DevTools from 'mobx-react-devtools';

///styles
git


function MatchWhenAuthed({component: Component, authed, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>}
        />
    )
}

function MatchWhenUnauthed({component: Component, authed, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => authed === false
                ? <Component {...props} />
                : <Redirect to='/dashboard'/>}
        />
    )
}
@inject("appStore") @observer
class App extends Component {
    constructor(props) {
        super(props)
        this.store = this.props.appStore;
    }

    componentDidMount() {
        this.authenticate()

    }

    authenticate(e) {
        if (e) e.preventDefault();
        this.props.appStore.authenticate()
    }

    render() {
        let {authenticating, authenticated} = this.props.appStore;
        return authenticating === true ? <h1>Loading</h1> : (
            <Router>
                <Provider appStore={this.store} githubStore={githubStore}>
                    <div>
                        <DevTools />
                        <MatchWhenUnauthed authed={authenticated} pattern='/' component={GithubPage}/>
                        <MatchWhenUnauthed authed={authenticated} pattern='/login' component={Login}/>

                    </div>
                </Provider>
            </Router>
        );
    }
}

export default App