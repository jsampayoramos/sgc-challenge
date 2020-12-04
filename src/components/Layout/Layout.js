import React from 'react';

import NavigationItems from '../navigation/NavigationItems/NavigationItems';

import styles from './Layout.module.css';

const Layout = props => {
    return (
        <React.Fragment>
            <header className={styles.Header}>
                LOGO
                <NavigationItems />
            </header>
            <main>
                {props.children}
            </main>
        </React.Fragment>
    );
};

export default Layout;