import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from '../muiTheme';
import Flexbox from 'flexbox-react';
import LinearProgress from 'material-ui/LinearProgress';

import styles from './loading.css';

export default class Loading extends React.Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
                <Flexbox flexDirection="column" alignContent="center" justifyContent="center" minHeight="100vh">
                    <Flexbox flexDirection="row" alignContent="center" justifyContent="center" className={styles.loading}>
                        <LinearProgress mode="indeterminate"/>
                    </Flexbox>
                </Flexbox>
            </MuiThemeProvider>
        );
    }

}
