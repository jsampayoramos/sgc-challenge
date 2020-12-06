import React, { useRef, useEffect } from "react";

import Button from "../../components/ui/Button/Button";
import MenuCard from "../../components/MenuCard/MenuCard";
import * as foodMenu from "./ourMenuContent";

import styles from "./OurMenu.module.css";

const OurMenu = React.forwardRef((props, ref) => {
    const starters = foodMenu.starters.map((starter) => (
        <MenuCard key={starter.title} {...starter} />
    ));

    const mainCourses = foodMenu.mainCourses.map((course) => (
        <MenuCard key={course.title} {...course} />
    ));

    const sides = foodMenu.sides.map((side) => (
        <MenuCard key={side.title} {...side} />
    ));

    const desserts = foodMenu.desserts.map((dessert) => (
        <MenuCard key={dessert.title} {...dessert} />
    ));

    return (
        <section className={styles.OurMenu} id="ourmenu" ref={ref}>
            <div className={styles.TitleContainer}>
                <h2>
                    <hr />
                    OUR MENU
                </h2>
                <Button>KNOW MORE</Button>
            </div>
            <div className={styles.CollumOne}>
                <h2>STARTERS</h2>
                {starters}
            </div>
            <div className={styles.CollumTwo}>
                <h2>MAIN COURSES</h2>
                {mainCourses}
            </div>
            <div className={styles.CollumOne}>
                <h2>SIDES</h2>
                {sides}
            </div>
            <div className={styles.CollumTwo}>
                <h2>DESSERTS</h2>
                {desserts}
            </div>
        </section>
    );
});

export default OurMenu;
