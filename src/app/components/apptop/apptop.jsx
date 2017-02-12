import React, {Component} from 'react';
import {observer} from 'mobx-react';

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
            <FlatButton {...this.props} label="Login" />
        );
    }
}

@observer(['appStore'])
class AppTop extends React.Component {
    constructor(props) {
        super(props);


    }
    handleMenuToggle = () => { this.props.appStore.toggleMenu(); };

    render() {
        let props = this.props;
        let { authenticated } = props.appStore;
        let Logged = (props) => (
            <IconMenu
                {...props}
                iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Sign out" />
            </IconMenu>
        );



        return (
            <div>
                <AppBar
                    title="Title"
                    iconElementRight={authenticated ? <Logged /> : <Login />}
                    onLeftIconButtonTouchTap={this.handleMenuToggle}
                />
            </div>
        );
    }

}

export default AppTop;


