import React from "react";
import { HashLink } from "react-router-hash-link";

import styles from "./NavigationItems.module.css";

const NavigationItems = (props) => {
    return (
        <ul className={styles.NavigationItems}>
            <div>
                <HashLink smooth to="#home" className={styles.Logo}>
                    LOGO
                </HashLink>
                <HashLink smooth to="#about" className={styles.NavigationItem}>
                    ABOUT
                </HashLink>
                <HashLink
                    smooth
                    to="#community"
                    className={styles.NavigationItem}
                >
                    COMMUNITY
                </HashLink>
                <HashLink
                    smooth
                    to="#location"
                    className={styles.NavigationItem}
                >
                    LOCATION
                </HashLink>
                <HashLink
                    smooth
                    to="#ourmenu"
                    className={styles.NavigationItem}
                >
                    OUR MENU
                </HashLink>
                <HashLink
                    smooth
                    to="#recipes"
                    className={styles.NavigationItem}
                >
                    RECIPES
                </HashLink>
            </div>
            <div>
                <HashLink className={styles.NavigationItem}>CONTACT</HashLink>
                <HashLink className={styles.NavigationItem}>LOGIN</HashLink>
            </div>
        </ul>
    );
};

export default NavigationItems;
