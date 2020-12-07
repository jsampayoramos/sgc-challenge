import React, { useState } from "react";

import ToggleButton from "../navigation/ToogleButton/ToggleButton";
import Drawer from "../navigation/Drawer/Drawer";

import NavigationItems from "../navigation/NavigationItems/NavigationItems";
import SideRuler from "../navigation/SideRuler/SideRuler";

import styles from "./Layout.module.css";

const Layout = (props) => {
    const [drawer, setDrawer] = useState(false);

    return (
        <React.Fragment>
            <header className={styles.Header}>
                <NavigationItems />
                <SideRuler section={props.section} />
                <ToggleButton
                    action={() => setDrawer((prevState) => !prevState)}
                />
                <Drawer
                    status={drawer}
                    action={() => setDrawer((prevState) => !prevState)}
                />
            </header>
            <main>{props.children}</main>
        </React.Fragment>
    );
};

export default Layout;
