import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import {Provider, observer, inject} from 'mobx-react';

import DevTools from 'mobx-react-devtools';

//stores

import {Home} from '../../home';
import {githubStore} from '../../github';
import {clockStore} from '../../clock';
import {store} from '../../store';
import LoginForm from '../components/login';

// "pages/components"
import {ClockPage} from '../../clock';
import {Loading} from '../components/loading';
import {Login} from '../components/login';
import {Dashboard} from '../../dashboard';

///styles and layout material-ui
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from '../components/muiTheme';
import {Layout} from '../components/layout';

function MatchWhenAuthed({component: Component, authed, ...rest}) {
    return (

        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to='/login'/>}
        />

    );
}

function MatchWhenUnauthed({component: Component, authed, ...rest}) {
    return (

        <Route
            {...rest}
            render={(props) => authed === false
                ? <Component {...props} />
                : <Redirect to='/dashboard'/>}
        />

    );
}

@inject('appStore') @observer
class App extends Component {
    constructor(props) {
        super(props);
        if (!this.props.appStore.user) {
            this.props.appStore.authenticate();
        }
    }


    authenticate(e) {
        if (e) {
            e.preventDefault();
        }
        this.props.appStore.authenticate();
    }

    render() {
        let props = this.props;
        let {authenticating, authenticated, loading} = props.appStore;
        let appStore = props.appStore;
        let stores = {store, appStore, githubStore, clockStore};

        return (authenticating === true || loading === true) ? <Loading /> : (
            <MuiThemeProvider muiTheme={getMuiTheme(theme)}>

                <Router>
                    <Provider {...stores} >
                        <Layout {...props}>
                            <Switch>
                                <MatchWhenUnauthed authed={authenticated} exact path='/' component={Home}/>
                                <MatchWhenUnauthed authed={authenticated} excat path='/clock' component={ClockPage}/>
                                <MatchWhenUnauthed authed={authenticated} exact path='/login' form={LoginForm} component={Login}/>
                                <MatchWhenUnauthed authed={authenticated} exact path='/home' component={Home}/>
                                <MatchWhenAuthed   authed={authenticated} exact path="/dashboard" component={Dashboard} />

                                <DevTools />
                            </Switch>
                        </Layout>
                    </Provider>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
