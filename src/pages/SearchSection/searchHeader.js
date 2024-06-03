import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search'
import DownloadIcon from '@mui/icons-material/Download';

import { TextField } from '@mui/material';

const SearchHeader = () => {
    return (
        <div className='navbar_home'>
            <div className='homeHeader_Main'>
                <div className='homeHeader_arrow'>
                    <KeyboardArrowLeftIcon className="muiArrow commonBg_Icon" />
                    <KeyboardArrowRightIcon className="muiArrow commonBg_Icon" />
                    <div className="div_inputField">
                        <SearchIcon className="icon_inputField" />
                        <input type="text" className='textField_search' variant="outlined" placeholder="What do you want to play" />
                    </div>
                </div>
                <div className='homeHeader_btns'>

                    <h4 className="commonBg_text_black commonBg_text"> <DownloadIcon />Install App</h4>
                    <NotificationsNoneIcon className="commonBg_Icon" />
                    <h4 className="commonBg_text_green commonBg_text">Sign Up</h4>
                </div>
            </div>

        </div>

    )
}

export default SearchHeader;