import React from 'react';

const songs = [
    {
        id: 1,
        imgSrc: '/assets/songsAvator/Auto Layout Horizontal (1).png',
        title: 'This is ColdPlay',
        description: 'Playlist'
    },
    {
        id: 2,
        imgSrc: '/assets/songsAvator/Auto Layout Horizontal (2).png',
        title: 'This is Imagine Dragons',
        description: 'Playlist'
    },
    {
        id: 3,
        imgSrc: '/assets/songsAvator/Auto Layout Horizontal (3).png',
        title: 'The Scientist',
        description: 'Song Coldplay'
    },
    {
        id: 4,
        imgSrc: '/assets/songsAvator/Auto Layout Horizontal (4).png',
        title: 'Hymn for the Weekend',
        description: 'Songs Coldplay'
    },
    {
        id: 5,
        imgSrc: '/assets/songsAvator/Auto Layout Horizontal (5).png',
        title: 'Maroon 5',
        description: 'Artist'
    },
    {
        id: 6,
        imgSrc: '/assets/songsAvator/Auto Layout Horizontal.png',
        title: 'This is Imagine Dragons',
        description: 'Playlist'
    },
    {
        id: 7,
        imgSrc: '/assets/songsAvator/Frame.png',
        title: 'Maroon 5',
        description: 'Artist'
    },
    {
        id: 8,
        imgSrc: '/assets/songsAvator/Frame.png',
        title: 'Maroon 5',
        description: 'Artist'
    },
    {
        id: 9,
        imgSrc: '/assets/songsAvator/Frame.png',
        title: 'Maroon 5',
        description: 'Artist'
    },
];

const SongsList = () => {
    return (
        <div className="songsListContainer">
            {songs.map(song => (
                <div key={song.id} className="playlist">
                    <img src={song.imgSrc} alt="avator" />
                    <div>
                        <h4>{song.title}</h4>
                        <p className='greyText'>{song.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SongsList;
