import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import SongsList from './songsList';

const LeftTwo = () => {
    return (
        <>
            <div className='optionLeft_two'>
                <FolderCopyIcon className='iconfolder' />
                <h4 className='textlibrary'>Your Library</h4>
                <AddIcon className='iconPlus' />
                <ArrowForwardIcon className='iconarrow' />
            </div>

            <div className='home_Lefttwo'>
                <p className='menuBar'>PlayLists</p>
                <p className='menuBar'>Artists</p>
                <p className='menuBar'>Albums</p>
            </div>

            <div className='' style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <SearchIcon />
                <p style={{ display: "flex", alignItems: "center", columnGap: "10px" }}>Recents <ListIcon /></p>
            </div>

            <div>
                <SongsList />
            </div>
        </>
    )
}

export default LeftTwo;