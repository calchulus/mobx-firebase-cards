import React from 'react';

import styles from './layout.css';

export default class Layout extends React.Component {

    static defaultProps = {
        dummy: '',
    };

    static propTypes = {
        dummy: React.PropTypes.string,
    };

    render() {
        return (
            <div className={ styles.layout }>
                <h2>MainLayout</h2>
            </div>
        );
    }

}
