import React, {useEffect} from 'react';
import Logo from "../components/Logo";
import Inputs from "../components/Inputs";
import Circle from "../components/Circle";

const Home = () => {

    return (
        <div>
            <Circle/>
            <Logo />
            <Inputs />
        </div>
    );
};

export default Home;