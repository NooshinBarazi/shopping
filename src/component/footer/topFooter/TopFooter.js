import "./topFooter.css";
import facebook from "../../../assets/images/facebook.png";
import twitter from "../../../assets/images/twitter.png";
import linkedin from "../../../assets/images/linkedin.png";
import dribbble from "../../../assets/images/dribbble.png";
import logo from '../../../assets/images/logo.png'
const TopFooter = () => {
  return (
    <section>
      <div className="topFooter firstColumn">
        <img src={logo}/>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </span>
        <div className="contactIcon">
          <img src={facebook} />
          <img src={twitter} />
          <img src={linkedin} />
          <img src={dribbble} />
        </div>
      </div>
      <div className="topFooter">
        <p>CATALOG</p>
        <span>Necklaces</span>
        <span>hoodies</span>
        <span>Jewelry Box</span>
        <span>t-shirt</span>
        <span>jacket</span>
      </div>
      <div className="topFooter">
        <p>ABOUT US</p>
        <span>Our Producers</span>
        <span>Sitemap</span>
        <span>FAQ</span>
        <span>About Us</span>
        <span>Terms & Conditions</span>
      </div>
      <div className="topFooter">
        <p>CUSTOMER SERVICES</p>
        <span>Contact Us</span>
        <span>Track Your Order</span>
        <span>Product Care & Repair</span>
        <span>Book an Appointment</span>
        <span>Shipping & Returns</span>
      </div>
    </section>
  );
};

export default TopFooter;
