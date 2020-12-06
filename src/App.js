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
    const communityRef = useRef(null);
    const ourMenuRef = useRef(null);
    const homepageRef = useRef(null);

    useEffect(() => {
        setSectionOne(homepageRef.current.offsetHeight);
        setSectionTwo(communityRef.current.offsetHeight);
        setSectionThree(ourMenuRef.current.offsetHeight);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            // if (
            //     window.scrollY <
            //         homepageRef.current.offsetHeight +
            //             homepageRef.current.offsetHeight / 3 &&
            //     section !== 1
            // ) {
            //     setSection(1);
            // }

            if (
                window.scrollY > sectionOne - sectionOne / 3 &&
                window.scrollY < sectionTwo &&
                section !== 2
            ) {
                setSection(2);
            }
            // if (
            //     window.scrollY > communityRef.current.offsetHeight &&
            //     section !== 3
            // ) {
            //     setSection(3);
            // }
        });
    });

    return (
        <Layout>
            <Homepage ref={homepageRef} />
            <Community section={section} ref={communityRef} />
            <OurMenu ref={ourMenuRef} />
        </Layout>
    );
};

export default App;
