import React from 'react';
import { HashLink } from 'react-router-hash-link'

import styles from './NavigationItems.module.css';

const NavigationItems = props => {
    return (
        <ul className={styles.NavigationItems}>
            <div>
                <HashLink className={styles.NavigationItem}>ABOUT</HashLink>
                <HashLink className={styles.NavigationItem}>COMMUNITY</HashLink>
                <HashLink className={styles.NavigationItem}>LOCATION</HashLink>
                <HashLink className={styles.NavigationItem}>OUR MENU</HashLink>
                <HashLink className={styles.NavigationItem}>RECIPES</HashLink>
            </div>
            <div>
                <HashLink className={styles.NavigationItem}>CONTACT</HashLink>
                <HashLink className={styles.NavigationItem}>LOGIN</HashLink>
            </div>
        </ul>
    );
};

export default NavigationItems;