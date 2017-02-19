import React from 'react';
import Flexbox from 'flexbox-react';

import styles from './home.css';


class Home extends React.Component {

    static defaultProps = {
        dummy: '',
    };

    static propTypes = {
        dummy: React.PropTypes.string,
    };

    render() {
        return (

            <Flexbox className={styles.home}>
                <h1>Content</h1>
            </Flexbox>

        );
    }

}
export default Home;

