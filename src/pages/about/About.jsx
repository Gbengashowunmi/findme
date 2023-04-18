import React, { useEffect, useState } from "react";
import HeadFoot from "../../components/headfoot/HeadFoot";
import "./about.scss";
import { Icon } from "@iconify/react";
import MultiverseCard from "../../components/MultiverseCard";
import AOS from "aos";
import "aos/dist/aos.css";
import Dcarousel from "../../components/Dcarousel";

export default function About() {
  const [tab, setTab] = useState("profile");
  const handleTab = (tab) => {
    setTab(tab);
  };

  // initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
      <div className="about">
    <HeadFoot>
        <div className="about_container">
          <aside>
            <section className="hero">
              <div className="hero_image">
                <img src="/images/about-hero.png" alt="hero" />
              </div>
            </section>
          </aside>
          <aside>
            <section className="dashboard_section">
              <button>FINDME FOR BUSINESS</button>
              <article
                className="dashboard_content"
                data-aos="zoom-in-up"
                data-aos-offset="-350"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
                data-aos-anchor-placement="top-center">
                <div className="image">
                  <img src="/images/dashboard_image.png" alt="dashboard" />
                </div>
                <div className="content">
                  <h3>ADVANCED FULL BUSINESS DASHBOARD</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, vitae? Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Libero cum itaque omnis laboriosam odio ea
                    suscipit, obcaecati labore dignissimos aspernatur accusamus
                    nesciunt molestias incidunt quasi. Commodi accusantium porro
                    ratione voluptatum.
                  </p>
                </div>
              </article>
            </section>
          </aside>
          <aside>
            <section className="open_for_business">
              <article className="open_for_business_text">
                <h3
                  data-aos="zoom-in-up"
                  data-aos-offset="-350"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-once="false"
                  data-aos-anchor-placement="top-center">
                  <span className="green">Open</span> for Business ? <br /> Sell
                  from your <br /> Comfort <span className="orange">24/7</span>
                </h3>
                <h4
                  data-aos="zoom-in-up"
                  data-aos-offset="-350"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-once="false"
                  data-aos-anchor-placement="top-center">
                  <span>Think it</span> CREATE IT
                </h4>
                <p
                  data-aos="zoom-in-up"
                  data-aos-offset="-350"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-once="false"
                  data-aos-anchor-placement="top-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto ex similique unde eveniet eaque sit vitae dolorem
                  voluptas voluptates vero? Tempore iure repudiandae ipsam.
                </p>
              </article>
              <div
                className="image"
                data-aos="zoom-in-up"
                data-aos-offset="-350"
                data-aos-delay="50"
                data-aos-duration="2500"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
                data-aos-anchor-placement="top-center">
                <img
                  src="/images/pexels-ron-lach-8706576 1.png"
                  alt="/business"
                />
              </div>
            </section>
          </aside>
          <aside>
            <section className="power_of_multiverse">
              <h4>POWER OF THE MULTIVERSE TECHNOLOGY</h4>
              <ul>
                <li
                  className={tab === "profile" ? "active" : ""}
                  onClick={() => handleTab("profile")}>
                  Business profile
                </li>
                <li
                  className={tab === "network" ? "active" : ""}
                  onClick={() => handleTab("network")}>
                  Business Network
                </li>
                <li
                  className={tab === "dashboard" ? "active" : ""}
                  onClick={() => handleTab("dashboard")}>
                  Business dashboard
                </li>
              </ul>
              {/* card */}
              <div
                hidden={tab !== "profile"}
                data-aos="zoom-in-up"
                data-aos-offset="-400"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
                data-aos-anchor-placement="top-center">
                <MultiverseCard
                  image="/images/Group7699.png"
                  caption="Integrate all your business profiles, website, apps into your app"
                  head="GIVE YOUR BUSINESS PUBLICITY"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          ex similique unde eveniet eaque sit vitae dolorem voluptas voluptates
          vero? Tempore iure repudiandae ipsam, praesentium suscipit delectus
          repellendus ipsa vitae magni provident voluptatem mollitia ullam."
                />
              </div>
              <div hidden={tab !== "network"}>
                <MultiverseCard
                  image="/images/Group 7700.png"
                  caption="Integrate all your business profiles, website, apps into your app"
                  head="GIVE YOUR BUSINESS PUBLICITY"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          ex similique unde eveniet eaque sit vitae dolorem voluptas voluptates
          vero? Tempore iure repudiandae ipsam, praesentium suscipit delectus
          repellendus ipsa vitae magni provident voluptatem mollitia ullam."
                />
              </div>
              <div hidden={tab !== "dashboard"}>
                <MultiverseCard
                  image="/images/pexels-rodnae-productions-8052844 1.png"
                  caption="Integrate all your business profiles, website, apps into your app"
                  head="GIVE YOUR BUSINESS PUBLICITY"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          ex similique unde eveniet eaque sit vitae dolorem voluptas voluptates
          vero? Tempore iure repudiandae ipsam, praesentium suscipit delectus
          repellendus ipsa vitae magni provident voluptatem mollitia ullam."
                />
              </div>
            </section>
          </aside>
          <aside>
            <section className="users">
              <button>FINDME FOR USERS</button>
              <section className="users_content">
                <div
                  className="card"
                  data-aos="zoom-in-up"
                  data-aos-offset="-350"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-once="false"
                  data-aos-anchor-placement="top-center">
                  <div className="image">
                    <img src="/images/Group-7699 (1).png" alt="card1" />
                  </div>
                  <h4 className="card_header">
                    Shop from anywhere and everywhere
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque similique, mollitia error blanditiis rerum et in ad
                    modi voluptates.
                  </p>
                </div>
                <div
                  className="card"
                  data-aos="zoom-in-up"
                  data-aos-offset="-350"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-once="false"
                  data-aos-anchor-placement="top-center">
                  <div className="image">
                    <img src="/images/Group-7699.png" alt="card1" />
                  </div>
                  <h4 className="card_header">
                    Shop from anywhere and everywhere
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque similique, mollitia error blanditiis rerum et in ad
                    modi voluptates.
                  </p>
                </div>
                <div
                  className="card"
                  data-aos="zoom-in-up"
                  data-aos-offset="-350"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-once="false"
                  data-aos-anchor-placement="top-center">
                  <div className="image">
                    <img
                      src="/images/pexels-cottonbro-7223505 1.png"
                      alt="card1"
                    />
                  </div>
                  <h4 className="card_header">
                    Shop from anywhere and everywhere
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque similique, mollitia error blanditiis rerum et in ad
                    modi voluptates.
                  </p>
                </div>
              </section>
            </section>
          </aside>
          <aside>
            <section className="what_can_you_do">
              <h4>
                WHAT CAN YOU DO WITH FIND<span>ME</span> IS LIMITLESS
              </h4>
              <div>
                <Dcarousel />
              </div>
            </section>
          </aside>
          <aside>
            <section className="covering_the_journey">
              <div className="overlay"></div>
              <div className="image">
                <img src="/images/journey.png" alt="" />
              </div>
              <article className="left">
                <h4>COVERING THE JOURNEY AHEAD</h4>
                <div className="icon_wrapper">
                  <div className="icons">
                    <Icon
                      icon="ph:clock-countdown-bold"
                      width="70"
                      height="70"
                    />
                    <p>Ride Sharing</p>
                  </div>
                  <div className="icons">
                    <Icon
                      icon="ph:clock-countdown-bold"
                      width="70"
                      height="70"
                    />
                    <p>Sechedule Trip</p>
                  </div>
                  <div className="icons">
                    <Icon
                      icon="iconoir:profile-circle"
                      width="70"
                      height="70"
                    />
                    <p>Everything Transport</p>
                  </div>
                </div>
              </article>
              <article className="right">
                <div className="right_content">
                  <p>BOOK YOUR NEXT TRIP</p>
                  <button>BOOK NOW</button>
                </div>
              </article>
            </section>
          </aside>
          <aside>
            <section className="eco">
              <div
                className="eco_image"
                data-aos="zoom-in-up"
                data-aos-offset="-350"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
                data-aos-anchor-placement="top-center">
                <img src="/images/Group_7699.png" alt="eco" />
              </div>
              <article
                className="content"
                data-aos="zoom-in-up"
                data-aos-offset="-350"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
                data-aos-anchor-placement="top-center">
                <span>
                  <h3>ECO </h3>
                  <Icon
                    icon="bxs:leaf"
                    color="#41e233"
                    width="40"
                    height="40"
                  />
                </span>
                <h5>POWER OF THE MULTIVERSE</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  nobis dolorum pariatur placeat at fugit aspernatur magni.
                  Debitis, quasi commodi!
                </p>
                <span className="button">
                  <button>READ MORE</button>
                  <Icon
                    icon="material-symbols:arrow-right-alt-rounded"
                    width="30"
                    height="30"
                  />
                </span>
              </article>
            </section>
          </aside>
          <aside>
            <section className="charity">
              <div className="charity_content">
                <Icon icon="ph:clock-countdown-bold" width="50" height="50" />

                <h3>FINDME CHARITY</h3>
                <h5>
                  Help a <span>PERSON</span> today
                </h5>
                <p>
                  Give (Money, Food, Clothing etc) Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Dolore consectetur neque quos
                  rerum eos consequuntur commodi, nulla cupiditate impedit
                  saepe?
                  <br />
                  <span className="green">Donate now</span>
                </p>
                <div className="charity_icon_wrapper">
                  <div className="icons">
                    <Icon
                      icon="ph:clock-countdown-bold"
                      width="40"
                      height="40"
                    />
                    <p>Ride Sharing</p>
                  </div>
                  <div className="icons">
                    <Icon
                      icon="ph:clock-countdown-bold"
                      width="40"
                      height="40"
                    />
                    <p>Sechedule Trip</p>
                  </div>
                  <div className="icons">
                    <Icon
                      icon="iconoir:profile-circle"
                      width="40"
                      height="40"
                    />
                    <p>Everything Transport</p>
                  </div>
                </div>
              </div>
              <div className="image">
                <img src="/images/Group_7700.png" alt="" />
                <span>
                  <button>READ MORE</button>
                  <Icon
                    icon="material-symbols:arrow-right-alt-rounded"
                    width="30"
                    height="30"
                  />
                </span>
              </div>
            </section>
          </aside>
          <aside>
            <section className="places">
              <div className="places_content">
                <h2>PLACES</h2>
                <span>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,
                    aut! Tempora omnis harum consectetur voluptatem neque vel
                    cupiditate, nihil voluptates.
                  </p>
                  <h4>FindMe is Global</h4>
                </span>
              </div>
            </section>
          </aside>
          <aside>
            <div className="bottom">
              <p>
                Get your verified business Organized Globally Publicized and
                Selling in minutes
              </p>
              <button>Get Started Now</button>
            </div>
          </aside>
        </div>
    </HeadFoot>
    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quisquam ipsa qui fugit deleniti provident eos! Autem temporibus magnam consectetur nemo eveniet voluptatum adipisci? Veniam dolorum error et ipsam quos?</p> */}
      </div>
  );
}
