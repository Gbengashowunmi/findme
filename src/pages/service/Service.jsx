import { Icon } from "@iconify/react";
import HeadFoot from "../../components/headfoot/HeadFoot";
import MultiverseCard from "../../components/MultiverseCard";
import Plan from "../../components/Plan";
import Product from "../../components/productoftheweek/Product";
import Reviews from "../../components/reviews/Reviews";
import "./service.scss";
import { Link } from "react-router-dom";
import FindMeSlides from "../../components/FindMeSlides";
import BusinessSlide from "../../components/businessslide/BusinessSlide";

export default function Service() {
  return (
    // using about classname inorder to inherit the styling from about.scss
    <div className="about service">
      <HeadFoot>
        {/* using about_container classname inorder to inherit the styling from about.scss  */}
        <div className="about_container">
          <aside>
            <section className=" hero service_hero">
              <div className="hero_image">
                <img src="/images/service_hero.png" alt="hero" />
              </div>
            </section>
          </aside>
          {/* using power_of_multiverse" classname inorder to inherit the styling from about.scss  */}
          <section className="power_of_multiverse">
            <h4>PEEK A BOO ON SOME FEATURES FOR YOUR BUSINESS</h4>
            {/* <HorizontalSlider/> */}
            <MultiverseCard
              image="/images/Group7699.png"
              caption="Integrate all your business profiles, website, apps into your app"
              head="EASIEST SET UP"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          ex similique unde eveniet eaque sit vitae dolorem voluptas voluptates
          vero? Tempore iure repudiandae ipsam, praesentium suscipit delectus
          repellendus ipsa vitae magni provident voluptatem mollitia ullam."
            />
          </section>
          <section className="findme_category">
            <h3>FINDME CATEGORY</h3>
            <p>
              Welcome to the Multiverse of Madness also known as{" "}
              <span>Findme Category</span> which consists of over 9000 Business
              categories which Findme broke down to the most simples amazing
              interconnected and interactable functionality in the world today
              in one App.
            </p>
            <div className="categories_nav">
              <Link to="/categories">
                <h4>
                  ALL CATEGORIES {/* <span> */}
                  <Icon
                    icon="material-symbols:arrow-right-alt-rounded"
                    width="30"
                    height="30"
                  />
                  {/* </span> */}
                </h4>
              </Link>
            </div>
            <div className="image">
              <FindMeSlides />
            </div>
          </section>
          <section className="business_plan">
            <h3>BUSINESS PLANS</h3>
            <h3 className="orange">NO MONTHLY SUBSCRIPTION</h3>
            <article>
              <BusinessSlide />
            </article>
          </section>
          <section className="white_label">
            <button>
              <h3>WHITE LABEL</h3>
            </button>
            <h3>TURN YOUR BUSINESS TO A FULLY INTEGRATABLE APP</h3>
            <p>
              Launch and manage your physical and online business or service in
              the multiverse get verified and let customers find you in minutes
              with world wide visibility.
            </p>
            <p className="see_full_plan">
              See full Business plan
              <Icon
                icon="material-symbols:arrow-right-alt-rounded"
                width="35"
                height="35"
              />
            </p>
          </section>
          {/* PRODUCTS  */}
          <section className="products category">
            <h3>Products</h3>
            <div className="category_wrapper">
              <div>
                <Product image="/images/shirt4.png" />
              </div>
              <div>
                <Product image="/images/shirt3.png" />
              </div>
              <div>
                <Product image="/images/shirt2.png" />
              </div>
              <div>
                <Product image="/images/shirt1.png" />
              </div>
              <div>
                <Product image="/images/shirt4.png" />
              </div>
              <div>
                <Product image="/images/shirt3.png" />
              </div>
            </div>
          </section>
          {/* REVIEWS  */}
          <section className="reviews">
            <h3>REVIEWS</h3>
            <div className="reviews_container">
              <Reviews />
            </div>
            <div className="rating">
              <Icon icon="material-symbols:star-rounded" color="#ffc400" />
            </div>
            <input
              type="text"
              placeholder="What do you think about Findem App"
            />
            <div>
              <button>SUBMIT</button>
            </div>
          </section>
          {/* integration  */}
          <section className="integration">
            <div className="header">
              <h2>INTEGRATION</h2>
              <div className="search">
                <Icon
                  icon="ep:search"
                  className="icon"
                  width="20"
                  height="20"
                  color="#fff"
                />
                <input type="text" placeholder="find integration" />
              </div>
            </div>
            <p>
              Launch and manage your physical and online business or service in
              FindMe Business app get verified and let customers find you in
              minutes with world wide visibility powered by multiverse
              technology.
            </p>
            <div className="branches">
              <div className="branch">
                <h3>API</h3> <div className="box"></div>
              </div>
              <div className="branch">
                <h3>THIRD PARTY</h3> <div className="box"></div>
              </div>
              <div className="branch">
                <h3>BUSINESS</h3> <div className="box"></div>
              </div>
            </div>

            <div className="logo_tree">
              <img src="/images/integration.png" alt="" />
            </div>
            <div className="more_nav">
              <p>
                MORE NAVIGATION
                <Icon
                  icon="material-symbols:arrow-right-alt-rounded"
                  width="30"
                  height="30"
                />
              </p>
            </div>
          </section>
          {/* service_multiverse  */}
          <section className="service_multiverse">
            <div className="image">
              <img src="/images/service_multiverse.png" alt="" />
            </div>
            <div className="service_multiverse_content">
              <h2>MULTIVERSE</h2>
              <h2 className="reflection">MULTIVERSE</h2>
              <p>
                <strong> What the Multiverse means for your business</strong>
              </p>
              <p>
                Launch and manage your physical and online business or service
                in FindMe Business app get verified and let customers find you
                in minutes with world wide visibility powered by multiverse
                technology.
              </p>
            </div>
            <button>ENTER</button>
          </section>
        </div>
      </HeadFoot>
    </div>
  );
}
