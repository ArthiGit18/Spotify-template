import '../index.css';
import HomeSection from './HomeSection.js';
import LeftOne from './left1';
import LeftTwo from './left2';
import SongOnPlay from './songOnPlay.js';

const Main = () => {
    return (
        <div className="background_overall">
            <div className="container">
                <div className="Layout">
                    <div className="Left">
                        <div className="left1">
                            <LeftOne />
                        </div>
                        <div className="left2">
                            <LeftTwo />
                        </div>
                    </div>
                    <div className="Right">
                        <HomeSection />
                    </div>
                </div>

                <SongOnPlay />
            </div>
        </div>
    )
}

export default Main;