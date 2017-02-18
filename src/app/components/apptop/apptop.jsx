import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


class Login extends Component {
    static muiName = 'FlatButton';

    render() {
        return (
            <FlatButton {...this.props}
                        label="Login"
                        containerElement={<Link to="/login" />}

            />
        );
    }
}

@observer(['appStore'])
class AppTop extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        let {appStore} = this.props;
        let {authenticated} = appStore;
        let Logged = (props) => (
            <IconMenu
                {...props}
                iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                <MenuItem primaryText="Refresh"/>
                <MenuItem primaryText="Help"/>
                <MenuItem primaryText="Sign out" onTouchTap={ e => this.handleLogout(e) }/>
            </IconMenu>
        );


        return (
            <div>
                <AppBar
                    title="Title"
                    iconElementRight={authenticated ? <Logged /> : <Login />}
                    onLeftIconButtonTouchTap={e => this.handleMenuToggle(e) }
                    style={{position: 'fixed'}}
                />
            </div>
        );
    }

    handleMenuToggle() {
        this.props.appStore.toggleMenu();
    }

    handleLogout = () => {
        this.props.appStore.logout();
    }


}

export default AppTop;


