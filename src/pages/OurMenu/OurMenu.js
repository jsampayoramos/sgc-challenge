import React, { useState, useEffect } from "react";

import Button from "../../components/ui/Button/Button";
import MenuCard from "../../components/MenuCard/MenuCard";
import * as foodMenu from "./ourMenuContent";

import styles from "./OurMenu.module.css";

const OurMenu = React.forwardRef((props, ref) => {
    const [transform, setTranform] = useState(props.sectionHeight);
    const [viewportWidth, setViewportWidth] = useState(null);

    useEffect(() => {
        if (props.scrollY > props.sectionStart) {
            setTranform(
                props.sectionHeight - (props.scrollY - props.sectionStart)
            );
        }
    }, [props.scrollY, props.sectionStart, props.sectionHeight]);

    useEffect(() => {
        setViewportWidth(window.innerWidth);
    }, []);

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
            <div>
                <div className={styles.TitleContainer}>
                    <h2>
                        <hr />
                        OUR MENU
                    </h2>
                    <Button>KNOW MORE</Button>
                </div>
                <div className={styles.CollumOne}>
                    <div
                        style={{
                            transform:
                                viewportWidth > 850
                                    ? `translateY(${-transform}px)`
                                    : "0",
                        }}
                    >
                        <h2>STARTERS</h2>
                        {starters}
                    </div>
                </div>
                <div className={styles.CollumTwo}>
                    <div
                        style={{
                            transform:
                                viewportWidth > 850
                                    ? `translateY(${transform}px)`
                                    : 0,
                        }}
                    >
                        <h2>MAIN COURSES</h2>
                        {mainCourses}
                    </div>
                </div>
                <div className={styles.CollumThree}>
                    <div
                        style={{
                            transform:
                                viewportWidth > 850
                                    ? `translateY(${-transform + 100}px)`
                                    : 0,
                        }}
                    >
                        <h2>SIDES</h2>
                        {sides}
                    </div>
                </div>
                <div className={styles.CollumFour}>
                    <div
                        style={{
                            transform:
                                viewportWidth > 850
                                    ? `translateY(${transform - 100}px)`
                                    : 0,
                        }}
                    >
                        <h2>DESSERTS</h2>
                        {desserts}
                    </div>
                </div>
            </div>
        </section>
    );
});

export default OurMenu;
