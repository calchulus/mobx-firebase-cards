import React from 'react';

import {AppTop} from '../../components/apptop';
import {Navbar} from '../../components/navbar';

import styles from './layout.css';


export default function Layout(props) {
    return (
        <div className={styles.layout}>
            <AppTop {...props} />
            <Navbar {...props} />
            {props.children}
        </div>
    );
}
