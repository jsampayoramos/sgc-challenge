import React, { useEffect, useState } from "react";

import styles from "./SideRuler.module.css";

const SideRuler = ({ section }) => {
    const [transform, setTransform] = useState(0);
    const [widthOne, setwidthOne] = useState("50%");
    const [widthTwo, setwidthTwo] = useState("25%");
    const [widthThree, setwidthThree] = useState("25%");

    useEffect(() => {
        switch (section) {
            case 1:
                setTransform(0);
                setwidthOne("50%");
                setwidthTwo("25%");
                setwidthThree("25%");
                break;
            case 2:
                setTransform(23);
                setwidthOne("25%");
                setwidthTwo("50%");
                setwidthThree("25%");
                break;
            case 3:
                setTransform(45);
                setwidthOne("25%");
                setwidthTwo("25%");
                setwidthThree("50%");
                break;
            default:
                setTransform(0);
                setwidthOne("50%");
                setwidthTwo("25%");
                setwidthThree("25%");
        }
    }, [section]);

    return (
        <div className={styles.SideRuler}>
            <div>
                <h4
                    style={{
                        transform: `translateY(${transform}px)`,
                    }}
                >
                    {`0${section}`}
                </h4>
                <hr style={{ width: widthOne }} />
                <hr style={{ width: widthTwo }} />
                <hr style={{ width: widthThree }} />
            </div>
        </div>
    );
};

export default SideRuler;
