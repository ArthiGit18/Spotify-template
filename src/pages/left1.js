import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

const LeftOne = ({ setActiveSection }) => {
    return (
        <>
            <div className='optionLeft_one' onClick={() => setActiveSection('home')}>
                <HomeIcon />
                <h4>Home</h4>
            </div>
            <div className='optionLeft_one' onClick={() => setActiveSection('search')}>
                <SearchIcon />
                <h4>Search</h4>
            </div>
        </>
    );
}

export default LeftOne;
