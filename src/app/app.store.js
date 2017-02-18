import {action, observable} from 'mobx';
import {FB, FBauth} from '../core';

class AppStore {
    @observable authenticated;
    @observable authenticating;
    @observable user;
    @observable authError;
    @observable snackBar;
    @observable snackBarMessage;
    @observable email;
    @observable password;
    @observable registration;
    @observable showSideBar;


    constructor() {
        this.authenticated = false;
        this.authenticating = false;
        this.user = FB.currentUser;
        this.loading = false;
        this.showSideBar = false;
        this.authError = null;
        this.snackBar = false;
        this.snackBarMessage = '';
        this.email = '';
        this.password = '';
        this.registration = '';
        this.login = false;
    }


    @action toggleMenu() {
        this.showSideBar = !this.showSideBar;
    }

    @action snackBarShow(msg) {
        this.snackBar = true;
        this.snackBarMessage = !msg ? '' : msg;
    }

    @action authenticate() {
        this.authenticating = true;
        FBauth().onAuthStateChanged((user) => {
            if (user) {
                this.user = user;
                this.authenticated = true;
                this.authenticating = false;
            } else {
                this.user = null;
                this.authenticated = false;
                this.authenticating = false;
            }
        });

    }

    @action emailLogin() {
        if (this.user) {
            return Promise.resolve(this.user);
        }
        this.authenticating = true;
        this.authenticated = false;
        return FBauth().signInWithEmailAndPassword(this.email, this.password)
            .then(user => {
                this.authError = null;
                this.user = user;
                this.authenticating = false;
                this.authenticated = true;
            })
            .catch(error => {
                this.authError = error;
                this.authenticating = false;
                this.authenticated = false;
                this.snackBar = true;
                this.snackBarMessage = 'Invaild Account Info';
            });
    }

    @action
    setFormInput(input, value) {
        this[input] = value;
    }

    @action
    resetFromInputs() {
        this.email= '';
        this.password= '';
    }
    @action
    resetLogin() {
        this.email= '';
        this.password= '';
        this.registration= false;
    }

    @action
    toggleRegistration() {
        this.registration = !this.registration;
    }

    @action
    emailSignUp() {
        FBauth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
            this.registration = false;
            this.snackBarMessage = 'Success Now Login !';
            this.snackBar = true;
        })
        .catch(function(error) {
            this.snackBarMessage = 'Sign Up Error';
            this.snackBar = true;
        });
    }

    @action logout() {
        FBauth().signOut();
    }
}

let appStore = new AppStore();

export default appStore;
