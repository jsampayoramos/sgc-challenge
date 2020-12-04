import React from 'react';

import styles from './Homepage.module.css';
import Stamp from '../../assets/images/stamp@2x.png';

const Homepage = () => {
    return (
        <section className={styles.Homepage}>
            <img src={Stamp} alt='Logo stamp' />
            <div>
                <h2>THE BEST FOODIE</h2>
                <h2>EXPERIENCE</h2>
                <h2>NOW IN LONDON</h2>
            </div>
        </section>
    );
};

export default Homepage;