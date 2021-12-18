import '../../App.css';
import './Footer.scss';
import zidLogo from '../../assets/zid-logo.png'
import { FaYoutube, FaTwitter, FaCommentAlt } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { BsInstagram, BsFillArrowUpCircleFill } from 'react-icons/bs';
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div>
                        <div className="footer-logo"><img src={zidLogo} alt="logo"></img></div>
                    </div>
                    <div className="links d-flex">
                        <FaYoutube></FaYoutube>
                        <GrLinkedinOption></GrLinkedinOption>
                        <BsInstagram></BsInstagram>
                        <FaTwitter></FaTwitter>
                    </div>
                    <div className="footer-icons">
                        <BsFillArrowUpCircleFill className=''></BsFillArrowUpCircleFill>
                        <div className="comment-icon"><FaCommentAlt></FaCommentAlt></div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Footer;