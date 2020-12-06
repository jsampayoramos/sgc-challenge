import React from "react";
import { HashLink } from "react-router-hash-link";

import NavigationItems from "../navigation/NavigationItems/NavigationItems";

import styles from "./Layout.module.css";

const Layout = (props) => {
    return (
        <React.Fragment>
            <header className={styles.Header}>
                <HashLink smooth to="#home" className={styles.Logo}>
                    LOGO
                </HashLink>
                <NavigationItems />
            </header>
            <main>{props.children}</main>
        </React.Fragment>
    );
};

export default Layout;
