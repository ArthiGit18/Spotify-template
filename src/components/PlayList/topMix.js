import React from 'react';
import '../../index.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import homeData from '../../data/homeData.json';
import NavListSongs from './navSongList';
import Footer from '../../pages/footerSection';

const PlayList = () => {
  return (
    <div className='home_Main_bg_scroll'>
      <NavListSongs />
      <div style={{ margin: "0 30px" }}>

        <div className="songs_header">
          <h2>Made For You</h2>
        </div>

        <div className="songs_list_home">
          {homeData.madeForYou.map((song, index) => (
            <div key={index} className="song_item">
             <div className='songs_Img_Queue'>
                <img src={song.img} alt="song Banner" className='' />
                <PlayArrowIcon className='logoIcon_green_homeMix' />
              </div>
              <h4>{song.title}</h4>
              <p className='greyText'>{song.description}</p>
            </div>
          ))}
        </div>

        <div className="songs_header">
          <h2>Best of End</h2>
        </div>

        <div className="songs_list_home">
          {homeData.bestOfEnd.map((song, index) => (
            <div key={index} className="song_item">
              <div className='songs_Img_Queue'>
                <img src={song.img} alt="song Banner" className='' />
                <PlayArrowIcon className='logoIcon_green_homeMix' />
              </div>
              <h4>{song.title}</h4>
              <p className='greyText'>{song.description}</p>
            </div>
          ))}
        </div>

        <div className="songs_header">
          <h2>Recommended station</h2>
        </div>

        <div className="songs_list_home">
          {homeData.bestOfEnd.map((song, index) => (
            <div key={index} className="song_item">
             <div className='songs_Img_Queue'>
                <img src={song.img} alt="song Banner" className='' />
                <PlayArrowIcon className='logoIcon_green_homeMix' />
              </div>
              <h4>{song.title}</h4>
              <p className='greyText'>{song.description}</p>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default PlayList;
