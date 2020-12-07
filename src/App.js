import React, { useState, useEffect, useRef } from "react";

import Layout from "./components/Layout/Layout";
import Homepage from "./pages/Homepage/Homepage";
import Community from "./pages/Community/Community";
import OurMenu from "./pages/OurMenu/OurMenu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

library.add(faHeart, faComment);

const App = () => {
    const [section, setSection] = useState(1);
    const [sectionTwo, setSectionTwo] = useState(null);
    const [sectionThree, setSectionThree] = useState(null);
    const [sectionThreeHeight, setSectionThreeHeight] = useState(null);
    const [yPosition, setYPosition] = useState(0);
    const homepageRef = useRef(null);
    const communityRef = useRef(null);
    const ourMenuRef = useRef(null);

    useEffect(() => {
        setSectionTwo(communityRef.current.offsetTop);
        setSectionThree(ourMenuRef.current.offsetTop);
        setSectionThreeHeight(ourMenuRef.current.offsetHeight);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setYPosition(window.scrollY);
            if (
                window.scrollY < sectionTwo * 0.4 &&
                sectionTwo &&
                section !== 1
            ) {
                setSection(1);
            }

            if (
                window.scrollY > sectionTwo * 0.4 &&
                window.scrollY < sectionThree * 0.7 &&
                sectionTwo &&
                sectionThree &&
                section !== 2
            ) {
                setSection(2);
            }

            if (
                window.scrollY > sectionThree * 0.7 &&
                sectionThree &&
                section !== 3
            ) {
                setSection(3);
            }
        });
    });

    return (
        <Layout section={section}>
            <Homepage ref={homepageRef} />
            <Community section={section} ref={communityRef} />
            <OurMenu
                section={section}
                sectionHeight={sectionThreeHeight}
                sectionStart={sectionThree * 0.5}
                ref={ourMenuRef}
                scrollY={yPosition}
            />
        </Layout>
    );
};

export default App;
