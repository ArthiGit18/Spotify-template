import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Footer = () => {
    return (
        <div className="footerMain" >
            <div className='footerContent'>
                <div className="footercontext">
                    <h2>Company</h2>
                    <p className='greyText'>About</p>
                    <p className='greyText'>Jobs</p>
                    <p className='greyText'>For the Record</p>
                </div>
                <div className="footercontext">
                    <h2>For Artists</h2>
                    <p className='greyText'>Developers</p>
                    <p className='greyText'>Advertising</p>
                    <p className='greyText'>Investors</p>
                    <p className='greyText'>Vendors</p>
                </div>
                <div className="footercontext">
                    <h2>Useful links</h2>
                    <p className='greyText'>Support</p>
                    <p className='greyText'>Free Mobile App</p>
                </div>
                <div className="footercontext">
                    <h2>Spotify Plans</h2>
                    <p className='greyText'>Premium Individual</p>
                    <p className='greyText'>Premium Duo</p>
                    <p className='greyText'>Premium Family</p>
                    <p className='greyText'>Premium Student</p>
                    <p className='greyText'>Spotify Free</p>
                </div>
                <div className="logoFooter">
                    <InstagramIcon className='logoIcon' />
                    <TwitterIcon className='logoIcon' />
                    <FacebookOutlinedIcon className='logoIcon' />
                </div>
            </div>
            <hr></hr>
            <div className='footerCopyright'>
                <div className='copyrightMenu'>
                    <p className='greyText'>Legal</p>
                    <p className='greyText'>Safety & Privacy Center</p>
                    <p className='greyText'>Privacy Policy</p>
                    <p className='greyText'>Cookies</p>
                    <p className='greyText'>About Ads</p>
                    <p className='greyText'>Accessibility</p>
                </div>
                <div className='copyrightYear'>
                    <p className='greyText'>© 2024 Spotify AB</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;