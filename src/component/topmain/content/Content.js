import contentImg from "../../../assets/images/image-product.png";
import bag from '../../../assets/images/Bag_alt-white.png'
import './content.css'

const Content = () => {
  return (
    <div className="content">
      <div className="contentDecs">
        <p>Collections</p>
        <span>
          you can explore ans shop many differnt collection from various barands
          here.
        </span>
       <a href='#shop'> <div className="btnShop">
            <img src={bag} className='bagIcon'/>
            <span>shop now</span>
        </div></a>
      </div>
      <div>
        <img src={contentImg} className="contentImg" />
      </div>
    </div>
  );
};

export default Content;
