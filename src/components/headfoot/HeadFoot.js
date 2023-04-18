import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import TemporaryDrawer from "../TemporaryDrawer";
import "./headfoot.scss";

export default function HeadFoot({ children }) {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".headfoot_header");
    const scrollTop = window.scrollY;
    scrollTop >= 40
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };
  return (
    <div className="headfoot_wrapper">
      <header className="headfoot_header">
        <div className="nav_bar">
          <TemporaryDrawer />
        </div>
        <div className="image">
          <Link to="/">
            <img src="/images/Find Me Logo_findme wordmark.png" alt="logo" className="logo" />
          </Link>
        </div>
        <div className="location">
          <Icon icon="ion:location-sharp" color="red" width="25" height="25" />
        </div>
        <div className="search">
          <Icon
            icon="ep:search"
            className="icon"
            width="20"
            height="20"
            color="#787878"
          />
          <input placeholder="Find anything" />
          {/* <Icon /> */}
          <Icon
            icon="mdi:google-lens"
            rotate={3}
            className="camera"
            width="18"
            height="18"
            color="#787878"
          />
          <Icon
            icon="clarity:microphone-line"
            className="mike"
            width="18"
            height="18"
            color="#787878"
          />
        </div>
        <div className="cart_alert_login">
          <div className="cart_alert">
            <Icon icon="ph:shopping-cart-simple-bold" width="18" height="18" />
            <Icon icon="bi:bell" width="18" height="18" />
          </div>
          <div className="reg_login">
            <Link to="https://findme-task.vercel.app/">
              <button>Register</button>
            </Link>
            <Link to="https://findme-task.vercel.app/login">
              <h4 className="login">Login</h4>
            </Link>
          </div>
        </div>
      </header>
      <section className="header_bottom">
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/service">
            <li>Service</li>
          </NavLink>
          <NavLink to="/publish">
            <li>Publish</li>
          </NavLink>

          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </section>
      {children}
      {/* FOOTER */}

      <footer className="footer">
        <section className="footer_head">
          <div className="image">
            <img src="/images/Find Me Logo_findme logo icon.png" alt="logo" />
          </div>
          <p>LIMITLESS POSSIBILITIES</p>
          <div className="socials">
            <Icon icon="et:facebook" width="30" height="30" />
            <Icon icon="ph:instagram-logo-thin" width="30" height="30" />
            <Icon icon="et:linkedin" width="30" height="30" />
            <Icon icon="et:twitter" width="30" height="30" />
          </div>
        </section>
        <section className="home_service_features">
          <ul>
            <h4>Home</h4>
            <li>About us</li>
            <li>Categories</li>
            <li>Features</li>
            <li>Publish</li>
            <li>Terms</li>
          </ul>
          <ul>
            <h4>SERVICES</h4>
            <li>Plans</li>
            <li>Business Dashboard</li>
            <li>Business Networks</li>
            <li>Integrations</li>
            <li>Multiverse</li>
          </ul>
          <ul>
            <h4>FEATURES</h4>
            <li>Create</li>
            <li>Wallet</li>
            <li>E-App</li>
            <li>Charity</li>
            <li>Eco</li>
          </ul>
          <ul>
            <h4>CONTACT</h4>
            <li>Download APP</li>
            <li>Support</li>
            <li>FAQ</li>
            <li>Find Agent</li>
            <li>Service Centers</li>
          </ul>
        </section>
        <span> &#169; Copyright FindMe.com - All rights reserved.</span>
      </footer>
    </div>
  );
}
