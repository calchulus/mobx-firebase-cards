import React from 'react';

import styles from './dashboard.css';

export default class Dashboard extends React.Component {

    static defaultProps = {
        dummy: '',
    };

    static propTypes = {
        dummy: React.PropTypes.string,
    };

    render() {
        return (
            <div className={ styles.dashboard }>
                <h2>Dashboard</h2>
            </div>
        );
    }

}
