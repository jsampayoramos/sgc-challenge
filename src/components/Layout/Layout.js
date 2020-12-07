import React from "react";
import { HashLink } from "react-router-hash-link";

import NavigationItems from "../navigation/NavigationItems/NavigationItems";
import SideRuler from "../navigation/SideRuler/SideRuler";

import styles from "./Layout.module.css";

const Layout = (props) => {
    return (
        <React.Fragment>
            <header className={styles.Header}>
                <NavigationItems />
                <SideRuler section={props.section} />
            </header>
            <main>{props.children}</main>
        </React.Fragment>
    );
};

export default Layout;
