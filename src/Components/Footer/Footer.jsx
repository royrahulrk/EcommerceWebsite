import React from 'react'
import { NavLink } from 'react-router-dom';
import iShop from "../../image/Web/iSHOP Logo.svg"
import "./Footer.css"
import {FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div>
              <button className="btn hireme-btn">
                <NavLink to="/" > Get Started </NavLink>
              </button>
            </div>
          </div>
        </section>
        {/* footer section */}

        <footer>
          <div className="grid grid-four-column footer-container" style={{gap:"12rem"}}>
            <div className="footer-about">
              {/* <h3>Thapa Technical</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p> */}
              <img src={iShop} alt="" />
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                <input type="submit" value="subscribe" />
              </form>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  <FaFacebook className="icons" />
                </div>
                <div>
                  <FaInstagram className="icons" />
                </div>
                <div>
                  <a
                    href="https"
                    target="_blank">
                    <FaTwitter className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+91 12345678978</h3>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="footer-container-b grid grid-two-column ">
              <p>
                @{new Date().getFullYear()} Rahul. All Rights Reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer