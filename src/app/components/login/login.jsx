import React from 'react';

import styles from './login.css';

export default class Login extends React.Component {

    static defaultProps = {
        dummy: '',
    };

    static propTypes = {
        dummy: React.PropTypes.string,
    };

    render() {
        return (
            <div className={ styles.login }>
                <h2>Login</h2>
            </div>
        );
    }

}
