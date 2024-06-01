import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import homeData from '../../data/homeData.json';

const NavListSongs = () => {
    return (
        <div className="horizontalList" style={{ margin: "30px" }}>
            {homeData.songs.map(song => (
                <div key={song.id} className="horizontalList_songs">
                    <img src={song.imgSrc} alt="avatar" />
                    <h4>{song.title}</h4>
                    <PlayArrowIcon className='logoIcon_green_horizontalnav' />
                </div>
            ))}
        </div>
    );
}

export default NavListSongs;
