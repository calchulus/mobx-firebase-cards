import React from 'react';
import {observer} from 'mobx-react';

/* material-ui */
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import CancelIcon from 'material-ui/svg-icons/navigation/cancel';
import Divider from 'material-ui/Divider';

@observer(['appStore'])
class Navbar extends React.Component {

    constructor(props) {
        super(props);

    }
    handleClose = () =>{
        this.props.appStore.toggleMenu();
    }
    render() {
        let { menuToggle } = this.props.appStore;
        return (

                <Drawer docked={false}
                        width={224}
                        open={ menuToggle }
                >
                    <Menu>
                        <MenuItem onTouchTap={this.handleClose} primaryText="Cards of the Magi" rightIcon={<CancelIcon />} />
                        <Divider />
                    </Menu>
                </Drawer>

        );
    }
}

export default Navbar;
