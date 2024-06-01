import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

const LeftOne = () => {
    return(
        <>
            <div className='optionLeft_one'>
                <HomeIcon />
                <h4>Home</h4>
            </div>
            <div className='optionLeft_one'>
                <SearchIcon />
                <h4>Search</h4>
            </div>
        </>
    )
}

export default LeftOne;