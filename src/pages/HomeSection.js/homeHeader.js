import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DownloadIcon from '@mui/icons-material/Download';
import '../../index.css';

const HomeHeader = () => {
    return (
        <div className='navbar_home'>
            <div className='homeHeader_Main'>
                <div className='homeHeader_arrow'>
                    <KeyboardArrowLeftIcon className="muiArrow commonBg_Icon" />
                    <KeyboardArrowRightIcon className="muiArrow commonBg_Icon" />
                </div>
                <div className='homeHeader_btns'>
                    <h4 className="commonBg_text_white commonBg_text">Explore Premium</h4>

                    <h4 className="commonBg_text_black commonBg_text"> <DownloadIcon />Install App</h4>
                    <NotificationsNoneIcon className="commonBg_Icon" />
                    <h4 className="commonBg_text_green commonBg_text">Sign Up</h4>
                </div>
            </div>
            <div className='homeNavList' style={{margin: "20px 0"}}>
                <h4 className='commonBg_text commonBg_text_white'>All</h4>
                <h4 className='commonBg_text commonBg_text_gray'>Music</h4>
                <h4 className='commonBg_text commonBg_text_gray'>Podcasts</h4>
            </div>
        </div>

    )
}

export default HomeHeader;