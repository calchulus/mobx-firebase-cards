import React from 'react';

import Flexbox from 'flexbox-react';

import {AppTop} from '../../components/apptop';
import {Navbar} from '../../components/navbar';
import {Footer} from '../../components/footer';

import styles from './layout.css';


export default function Layout(props) {
    return (
        <Flexbox flexDirection="column" minHeight="100vh">

            <Flexbox element="header" height="66px" flexDirection="column">
                <AppTop {...props} />
            </Flexbox>
            <Navbar {...props} />
            <Flexbox flexDirection="column" alignContent="center" justifyContent="center" className={styles.layout}>
                {props.children}
            </Flexbox>
            <Flexbox element="footer" flexDirection="column" className={styles.footer}>
                <Footer />
            </Flexbox>
        </Flexbox>
    );
}
