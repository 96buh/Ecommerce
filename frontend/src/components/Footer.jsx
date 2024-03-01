import React from "react";
import styles from "../css/footer.module.css";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.storeName}>Store</div>
        <div className={styles.iconContainer}>
          <a href="https://github.com/96buh">
            <GitHubIcon />
          </a>

          <FacebookIcon />
          <InstagramIcon />
          <XIcon />
        </div>
      </div>
      <hr />
      <div className={styles.infoContainer}>
        <div>
          <h6>Company Info</h6>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        {/* col2 */}
        <div>
          <h6>Legal</h6>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div>
          <h6>Features</h6>
          <p>Business Marketing</p>
          <p>User Analytic</p>
          <p>Live Chat</p>
          <p>Unlimited Support</p>
        </div>
        <div>
          <h6>Resouce</h6>
          <p>IOS & Android</p>
          <p>Watch Demo</p>
          <p>Customers</p>
          <p>API</p>
        </div>
        <div>
          <h6>Get In Touch</h6>
          <p>
            <LocalPhoneIcon
              style={{
                color: "#23a6f0",
                verticalAlign: "middle",
                marginRight: "10px",
              }}
            />
            (+886) 968-061-529
          </p>
          <p>
            <LocationOnIcon
              style={{
                color: "#23a6f0",
                verticalAlign: "middle",
                marginRight: "10px",
              }}
            />
            4517 Washington Ave.
          </p>
          <p>
            <EmailRoundedIcon
              style={{
                color: "#23a6f0",
                verticalAlign: "middle",
                marginRight: "10px",
              }}
            />
            j29823678@gmail.com
          </p>
        </div>
      </div>
      {/* copyright */}
      <div className={styles.copyright}>
        <p style={{ fontSize: 14 }}>Copyright© {year} </p>
      </div>
    </footer>
  );
}

export default Footer;
