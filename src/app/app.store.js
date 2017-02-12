import {action, observable} from 'mobx';
import {FB, FBauth} from '../core';

class AppStore {
    @observable authenticated;
    @observable authenticating;
    @observable user;
    @observable menuToggle;


    constructor() {
        this.authenticated = false;
        this.authenticating = false;
        this.user = FB.currentUser;
        this.loading = false;
        this.menuToggle = false;


    }


    @action toggleMenu() {
        this.menuToggle = !this.menuToggle;
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
}

let appStore = new AppStore();

export default appStore;
