import React from "react";

import styles from "./MenuCard.module.css";

const MenuCard = (props) => {
    return (
        <div className={styles.MenuCard}>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <div>{props.price}</div>
        </div>
    );
};

export default MenuCard;
