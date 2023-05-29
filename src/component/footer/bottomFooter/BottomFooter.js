import './bottomFooter.css'
import scroll from '../../../assets/images/Arrow_top.png'
import icon from '../../../assets/images/icons_payment 1.png'
const BottomFooter = () => {
  return (
    <div className="bFooter">
      <div>
        <span>© 2022 Coral , Inc.</span>
      </div>
      <div>
        <img src={icon}/>
      </div>
      <div className="scroll">
        <a href="#top">
          <span>Scroll to top</span>
          <img src={scroll}/>
        </a>
      </div>
    </div>
  );
};

export default BottomFooter;
