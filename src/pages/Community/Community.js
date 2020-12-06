import React, { useState, useEffect } from "react";

import Button from "../../components/ui/Button/Button";
import CommunityCard from "../../components/CommunityCard/CommunityCard";
import FoodImageOne from "../../assets/images/food_one.png";
import BackgroundImageOneOne from "../../assets/images/detail01.png";
import BackgroundImageOneTwo from "../../assets/images/bg-detail.png";
import BackgroundImageTwoOne from "../../assets/images/detail03.png";

import styles from "./Community.module.css";

const Community = React.forwardRef((props, ref) => {
    const [cardOneClass, setCardOneClass] = useState([
        styles.CardOne,
        styles.CardDisapperar,
    ]);
    const [cardTwoClass, setCardTwoClass] = useState([
        styles.CardTwo,
        styles.CardDisapperar,
    ]);
    const [cardThreeClass, setCardThreeClass] = useState([
        styles.CardTwo,
        styles.CardDisapperar,
    ]);

    useEffect(() => {
        if (props.section === 2 && cardOneClass.length > 1) {
            setCardOneClass([styles.CardOne]);
            setTimeout(() => {
                setCardTwoClass([styles.CardTwo]);
            }, 800);
            setTimeout(() => {
                setCardThreeClass([styles.CardThree]);
            }, 1600);
        }
    }, [props.section, cardOneClass.length]);

    return (
        <section ref={ref} className={styles.Community} id="community">
            <div className={styles.SectionTitleContainer}>
                <hr />
                <h2>MEET OUR</h2>
                <h2>COMMUNITY</h2>
                <Button>KNOW MORE</Button>
                <p>
                    LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE
                    EN TORNA
                </p>
            </div>
            <div className={cardOneClass.join(" ")}>
                <div>
                    <img
                        src={BackgroundImageOneOne}
                        alt="Background Item One"
                    />
                </div>
                <div>
                    <img
                        src={BackgroundImageOneTwo}
                        alt="Background Item One"
                    />
                </div>
                <CommunityCard img={FoodImageOne} />
            </div>
            <div className={cardTwoClass.join(" ")}>
                <div>
                    <img
                        src={BackgroundImageTwoOne}
                        alt="Background Item One"
                    />
                </div>
                <CommunityCard img={FoodImageOne} />
                <div className={styles.ExtraTextContainer}>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore
                    </p>
                </div>
            </div>
            <div className={cardThreeClass.join(" ")}>
                <div className={styles.ExtraTextContainer}>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore
                    </p>
                </div>
                <CommunityCard img={FoodImageOne} />
            </div>
        </section>
    );
});

export default Community;
