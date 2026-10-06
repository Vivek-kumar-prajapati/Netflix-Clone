import facebook_icon from "../../assets/facebook_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
      </div>

      <ul>
        <li>Audio Description</li>
        <li>Help Center </li>
        <li>Gift Card</li>
        <li>Media Center</li>
        <li>Inverter Reltions</li>
        <li>Jobs</li>
        <li>Terms Of Use </li>
        <li>Privacy</li>
        <li>Legal Notice </li>
        <li>Cookies Prefrences</li>
        <li>Corporate Informatin</li>
        <li>Contact Us</li>
        <p className="copy-right">@ 1997 - 2023 Netflix ,Inc.</p>
      </ul>
    </div>
  );
};

export default Footer;
