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
    const [sectionOne, setSectionOne] = useState(null);
    const [sectionTwo, setSectionTwo] = useState(null);
    const [sectionThree, setSectionThree] = useState(null);
    const [sectionTwoHeight, setSectionTwoHeight] = useState(null);
    const [sectionThreeHeight, setSectionThreeHeight] = useState(null);
    const [yPosition, setYPosition] = useState(0);
    const communityRef = useRef(null);
    const ourMenuRef = useRef(null);
    const homepageRef = useRef(null);

    useEffect(() => {
        setSectionOne(homepageRef.current.offsetTop);
        setSectionTwo(communityRef.current.offsetTop);
        setSectionThree(communityRef.current.offsetHeight);
        setSectionThreeHeight(ourMenuRef.current.offsetHeight);
        setSectionTwoHeight(communityRef.current.offsetHeight);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setYPosition(window.scrollY);
            if (
                window.scrollY < sectionTwo &&
                section !== 1 &&
                sectionTwo !== null
            ) {
                setSection(1);
            }

            if (
                window.scrollY > sectionTwo &&
                window.scrollY < sectionThree &&
                section !== 2 &&
                sectionTwo !== null &&
                sectionThree !== null
            ) {
                setSection(2);
            }

            if (
                window.scrollY > sectionThree &&
                section !== 3 &&
                sectionThree !== null
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
                sectionStart={sectionThree}
                ref={ourMenuRef}
                scrollY={yPosition}
            />
        </Layout>
    );
};

export default App;
