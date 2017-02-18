import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import appStore from '../../app.store';

import TextField from 'material-ui/TextField';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';

import styles from './login.css';


@inject('appStore') @observer
class Login extends Component {
    constructor(props) {
        super(props);
        this.props.appStore.resetLogin()

    }
    render() {
        let {appStore} = this.props;
        let {registration} = appStore;
        return (
            <Card className={styles.login}>
                <CardTitle title={ !registration ? 'Login' : 'Create Account' }/>
                <CardText>
                    { !registration ? this.loginForm() : this.registerForm() }
                </CardText>
                <CardActions className={styles.cardActions}>
                    <FlatButton label="Reset" onTouchTap={ () => this.handleReset() }/>
                    <FlatButton label={!registration ? 'Create Account' :  'Login' } onTouchTap={ () => this.handleFormToggle() }/>
                    <FlatButton label='Forgot?' onTouchTap={ () => alert('lost') }/>
                </CardActions>
                <Snackbar
                    open={appStore.snackBar}
                    message={appStore.snackBarMessage}
                    autoHideDuration={4000}
                />
            </Card>
        );
    }

    registerForm() {
        let {appStore} = this.props;
        let {email, password} = appStore;
        return (
            <form>
                <TextField
                    name="email"
                    floatingLabelText="Email Address"
                    value={email}
                    floatingLabelFixed
                    fullWidth={true}
                    onChange={ (e) => this.handleInputChange(e) }
                />
                <br />
                <br />
                <TextField
                    name="password"
                    floatingLabelText="Password"
                    floatingLabelFixed
                    type="text"
                    value={password}
                    fullWidth={true}
                    onChange={ (e) => this.handleInputChange(e)}
                /><br />
                <div>
                    <RaisedButton label="Create Account" primary={true} fullWidth={true}
                                  onTouchTap={ () => this.handleSignUp() }/>
                </div>
            </form>
        );
    }

    loginForm() {
        let {appStore} = this.props;
        let {email, password} = appStore;
        return (
            <form>
                <TextField
                    name="email"
                    floatingLabelText="Email Address"
                    value={email}
                    floatingLabelFixed
                    fullWidth={true}
                    onChange={ (e) => this.handleInputChange(e)}
                />
                <br />
                <br />
                <TextField
                    name="password"
                    floatingLabelText="Password"
                    floatingLabelFixed
                    type="password"
                    value={password}
                    fullWidth={true}
                    onChange={ (e) => this.handleInputChange(e)}
                /><br />
                <div>
                    <RaisedButton label="Login" primary={true} fullWidth={true}
                                  onTouchTap={ () => this.handleLogin() }/>
                </div>
            </form>
        );
    }

    handleReset() {
        appStore.resetFromInputs();
    }

    handleLogin() {
        (!appStore.email || !appStore.password) ?
        appStore.snackBarShow('Please enter your account!')
        :
        appStore.emailLogin();
    }

    handleSignUp() {
        (!appStore.email || !appStore.password) ?
            appStore.snackBarShow('Please enter your account!')
            :
            appStore.emailSignUp();
    }

    handleInputChange(e) {
        appStore.setFormInput([e.target.name], e.target.value);
    }
    handleFormToggle() {
        appStore.toggleRegistration();
    }
}

export default Login;
