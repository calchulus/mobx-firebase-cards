import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, } from 'react-router-dom';
import {Provider, observer, inject} from 'mobx-react';

import DevTools from 'mobx-react-devtools';

//stores
import {Login} from '../components/login';
import {githubStore} from '../../github';
import {clockStore} from '../../clock';
import {store} from '../../store';


// "pages"
import {ClockPage} from '../../clock';
import {GithubPage} from '../../github';

///styles and layout material-ui
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Layout} from '../components/layout';

/*function MatchWhenAuthed({component: Component, authed, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <comp />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>}
        />
    );
}*/

function MatchWhenUnauthed({component: Component, authed, ...rest}) {
    return (

        <Route
            {...rest}
            render={(props) => authed === false
                ? <Component {...props} />
                : <Redirect to='/login'/>}
        />

    );
}

@inject('appStore') @observer
class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.authenticate();

    }

    authenticate(e) {
        if (e) { e.preventDefault(); }
        this.props.appStore.authenticate();
    }

    render() {
        let props = this.props;
        let {authenticating, authenticated, loading} = props.appStore;
        let appStore = props.appStore;
        let stores= {store, appStore, githubStore, clockStore};

        return (authenticating === true || loading === true)? <h1>Loading...</h1> : (
            <MuiThemeProvider  muiTheme={getMuiTheme(darkBaseTheme)}>

                <Router>
                    <Provider {...stores} >
                                <Layout {...props}>
                                    <MatchWhenUnauthed authed={authenticated} exact path='/' component={GithubPage}/>
                                    <MatchWhenUnauthed authed={authenticated} excat path='/clock' component={ClockPage}/>
                                    <MatchWhenUnauthed authed={authenticated} exact path='/login' component={Login}/>

                                    <DevTools />
                                </Layout>
                    </Provider>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
