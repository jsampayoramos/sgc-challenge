import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

import styles from "./Drawer.module.css";

const Drawer = ({ status, action }) => {
    const [drawerClass, setDrawerClass] = useState([styles.Drawer]);

    if (status && drawerClass.length === 1) {
        setDrawerClass((prevState) => [...prevState, styles.DrawerOpen]);
    }

    if (!status && drawerClass.length > 1) {
        setDrawerClass((prevState) => [styles.Drawer]);
    }

    return (
        <React.Fragment>
            <div className={drawerClass.join(" ")}>
                <HashLink smooth to="#home" className={styles.Logo}>
                    LOGO
                </HashLink>
                <HashLink smooth to="#" className={styles.Item}>
                    ABOUT
                </HashLink>
                <HashLink smooth to="#community" className={styles.Item}>
                    COMMUNITY
                </HashLink>
                <HashLink smooth to="#" className={styles.Item}>
                    LOCATION
                </HashLink>
                <HashLink smooth to="#ourmenu" className={styles.Item}>
                    OUR MENU
                </HashLink>
                <HashLink smooth to="#" className={styles.Item}>
                    RECIPES
                </HashLink>
                <HashLink smooth to="#" className={styles.Item}>
                    CONTACT
                </HashLink>
                <HashLink smooth to="#" className={styles.Item}>
                    LOGIN
                </HashLink>
            </div>
            {status ? (
                <div className={styles.Modal} onClick={action}></div>
            ) : null}
        </React.Fragment>
    );
};

export default Drawer;
