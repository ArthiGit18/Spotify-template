import React, { useState } from 'react';
import '../index.css';
import HomeSection from './HomeSection';
import SearchSection from './SearchSection'; // Import the SearchSection component
import LeftOne from './left1';
import LeftTwo from './left2';
import SongOnPlay from './songOnPlay.js';

const Main = () => {
    const [activeSection, setActiveSection] = useState('home'); // Default to 'home'

    return (
        <div className="background_overall">
            <div className="container">
                <div className="Layout">
                    <div className="Left">
                        <div className="left1">
                            <LeftOne setActiveSection={setActiveSection} />
                        </div>
                        <div className="left2">
                            <LeftTwo />
                        </div>
                    </div>
                    <div className="Right">
                        {activeSection === 'home' && <HomeSection />}
                        {activeSection === 'search' && <SearchSection />}
                    </div>
                </div>

                <SongOnPlay />
            </div>
        </div>
    );
}

export default Main;
