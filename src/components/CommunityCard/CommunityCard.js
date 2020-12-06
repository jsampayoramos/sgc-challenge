import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./CommunityCard.module.css";

const CommunityCard = (props) => {
    return (
        <div className={styles.CommunityCard}>
            <div className={styles.ImageContainer}>
                <img src={props.img} alt="food" />
            </div>
            <div className={styles.PostContent}>
                <h3>@buzzfeedfood</h3>
                <p>
                    It’s taco Tuesday! These tacos from @jesseszewczyk have no
                    added sugars and are SO good. Find the recipe from the link
                    in our bio!
                </p>
                <p>@taylormillerphoto</p>
                <div className={styles.SocialContainer}>
                    <div>
                        <FontAwesomeIcon icon="comment" />
                        <span>60</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon="heart" />
                        <span>14,7K</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityCard;
