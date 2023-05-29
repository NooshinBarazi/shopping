import BottomFooter from "./bottomFooter/BottomFooter";
import TopFooter from "./topFooter/TopFooter";
import './bottomFooter/bottomFooter.css'

const Footer = () => {
    return ( 
        <div className="footer">
            <TopFooter />
            <BottomFooter />
        </div>
     );
}
 
export default Footer;