import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import MdRestore from 'react-icons/lib/md/restore';
import Favorites from 'react-icons/lib/md/favorite';

const nearbyIcon = <IconLocationOn />;


 let Favs = <FontIcon className="material-icons-favorite" />

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class Footer extends Component {
    state = {
        selectedIndex: 0,
    };

    select = (index) => this.setState({selectedIndex: index});

    render() {
        return (
            <Paper zDepth={1} style={{position: 'fixed', bottom: 0, width: '100%'}}>
                <BottomNavigation selectedIndex={this.state.selectedIndex}  >
                    <BottomNavigationItem
                        label="Recents"
                        icon={<MdRestore />}
                        onTouchTap={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        label="Favorites"
                        icon={<Favorites />}
                        onTouchTap={() => this.select(1)}
                    />
                    <BottomNavigationItem
                        label="Nearby"
                        icon={nearbyIcon}
                        onTouchTap={() => this.select(2)}
                    />
                </BottomNavigation>
            </Paper>
        );
    }
}

export default Footer;