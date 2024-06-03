import React from "react";
import HomeHeader from "./HomeSection/homeHeader";

const Navbar = ({ handleInstallAppClick }) => {

    return (
        <>
            <HomeHeader onInstallAppClick={handleInstallAppClick} />
        </>
    );
}

export default Navbar;
