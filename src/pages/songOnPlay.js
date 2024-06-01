import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MergeTypeIcon from '@mui/icons-material/MergeType';
import RepeatIcon from '@mui/icons-material/Repeat';
import { styled } from '@mui/material/styles';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import MicExternalOnTwoToneIcon from '@mui/icons-material/MicExternalOnTwoTone';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import CastOutlinedIcon from '@mui/icons-material/CastOutlined';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import SpeakerGroupIcon from '@mui/icons-material/SpeakerGroup';
import DoneIcon from '@mui/icons-material/Done';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 5,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === '#2e2e2e' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? 'white' : '#2e2e2e',
    },
}));

const SongOnPlay = () => {
    return (
        <div className="songOnPlay">
            <div className="songPlayView">
                <img src="/assets/songsAvator/Auto Layout Horizontal (4).png" alt="avatar" />
                <div>
                    <h4>Heeriya (feat. Arijit Singh)</h4>
                    <p>Jasleen Royal, Arijit Singh, Harrykahanhai</p>
                </div>
                <DoneIcon className='logoIcon_green_songOnPlay' />
            </div>
            <div className='songPlayActions'>
                <div className='songPlayPause'>
                    <MergeTypeIcon />
                    <SkipPreviousIcon />
                    <PlayArrowIcon className='playIcon_songOnPlay' />
                    <SkipNextIcon />
                    <RepeatIcon />
                </div>
                <div className='songProgress'>
                    <small className='greyText'>0:00</small>
                    <BorderLinearProgress style={{width: "100%"}} variant="determinate" value={50} />
                    <small className='greyText'>3:00</small>
                </div>
            </div>
            <div className='songOnPlay_actionsRight'>
                <PlayCircleFilledWhiteOutlinedIcon />
                <MicExternalOnTwoToneIcon />
                <QueueMusicIcon />
                <SpeakerGroupIcon />
                <VolumeUpOutlinedIcon />
                <BorderLinearProgress style={{width: "30%"}} variant="determinate" value={50} />
                <CastOutlinedIcon />
                <AspectRatioIcon />
            </div>
        </div>
    )
}

export default SongOnPlay;