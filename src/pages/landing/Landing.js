import React from "react";
import Carousel from "../../components/carousel/Carousel";
import Category from "../../components/categoryCard/Category";
import CheckThis from "../../components/checkthis/CheckThis";
import HeadFoot from "../../components/headfoot/HeadFoot";
import Nearby from "../../components/nearby/Nearby";
import PopularCard from "../../components/popular/PopularCard";
import PopularBusiness from "../../components/popularBusiness/PopularBusiness";
import Product from "../../components/productoftheweek/Product";
import WhatsNew from "../../components/whatsnew/WhatsNew";
import "./landing.scss";
export default function Landing() {
  return (
    <div>
      <HeadFoot>
        <Carousel />
        {/* Categories */}
        <section className="category">
          <header>
            <p className="title bold">Categories</p>
            <p className="see">See all</p>
          </header>
          <div className="category_wrapper">
            <div>
              <Category image="/images/car_cartegory.png" name="Transport" />
            </div>
            <div>
              <Category image="/images/delivery.png" name="delivery" />
            </div>
            <div>
              <Category image="/images/food.png" name="Food" />
            </div>
            <div>
              <Category image="/images/business.png" name="Business" />
            </div>
            <div>
              <Category image="/images/service.png" name="Service" />
            </div>
            <div>
              <Category image="/images/market.png" name="Market Place" />
            </div>

            <div>
              <Category image="/images/admin.png" name="Administration" />
            </div>
            <div>
              <Category image="/images/agric.png" name="Agriculture" />
            </div>
            <div>
              <Category image="/images/art.png" name="Art" />
            </div>
          </div>
        </section>
        {/* What's new on Findme */}
        <section className="category">
          <header>
            <p className="bold">What's new on Findme ?</p>
            <p className="see">See all</p>
          </header>
          <div className="category_wrapper">
            <div>
              <WhatsNew image="/images/image1.png" />
            </div>
            <div>
              <WhatsNew image="/images/new1.png" />
            </div>
            <div>
              <WhatsNew image="/images/new2.png" />
            </div>
            <div>
              <WhatsNew image="/images/new3.png" />
            </div>
            <div>
              <WhatsNew image="/images/image1.png" />
            </div>
            <div>
              <WhatsNew image="/images/new1.png" />
            </div>
            <div>
              <WhatsNew image="/images/new2.png" />
            </div>
            <div>
              <WhatsNew image="/images/new3.png" />
            </div>
          </div>
        </section>
        {/* Nearby */}
        <section className="category">
          <header>
            <p className="nearby_head bold">Nearby</p>
            <p className="see">See all</p>
          </header>
          <div className="category_wrapper">
            <div>
              <Nearby image="/images/Rectangle 2932.png" />
            </div>
            <div>
              <Nearby image="/images/macdonalds1.png" />
            </div>
            <div>
              <Nearby image="/images/waiste.png" />
            </div>
            <div>
              <Nearby image="/images/dominios.png" />
            </div>
            <div>
              <Nearby image="/images/bike.png" />
            </div>
            <div>
              <Nearby image="/images/macdonalds1.png" />
            </div>
            <div>
              <Nearby image="/images/waiste.png" />
            </div>
            <div>
              <Nearby image="/images/dominios.png" />
            </div>
            <div>
              <Nearby image="/images/bike.png" />
            </div>
          </div>
        </section>
        {/* Product of the week */}
        <section className="category">
          <header>
            <p className="bold">Product of the week</p>
            <p className="see">See all</p>
          </header>
          <div className="category_wrapper">
            <div>
              <Product image="/images/b3a021110738469a9d0dcba15138db10 11.png" />
            </div>
            <div>
              <Product image="/images/donut.png" />
            </div>
            <div>
              <Product image="/images/pizza.png" />
            </div>
            <div>
              <Product image="/images/b3a021110738469a9d0dcba15138db10 11.png" />
            </div>
            <div>
              <Product image="/images/donut.png" />
            </div>
            <div>
              <Product image="/images/pizza.png" />
            </div>
          </div>
        </section>
        {/* Brands */}
        {/* <section className="category">
        <header>
          <p className="bold" className="check_this_head">Brands</p>
          <p className="see">See all</p>
        </header>
        <div className="category_wrapper">
          <div>
            <BrandCard />
          </div>
        </div>
      </section> */}
        {/* Check this out */}
        <section className="category">
          <header>
            <p className="check_this_head bold">Check this out</p>
            <p className="see">See all</p>
          </header>
          <div className="category_wrapper">
            <div>
              <CheckThis image="/images/car1.png" />
            </div>
            <div>
              <CheckThis image="/images/car2.png" />
            </div>
            <div>
              <CheckThis image="/images/car3.png" />
            </div>
            <div>
              <CheckThis image="/images/car1.png" />
            </div>
            <div>
              <CheckThis image="/images/car2.png" />
            </div>
          </div>
        </section>
        {/* Popular Services */}
        <section className="category">
          <header>
            <p className="check_this_head bold">Popular Business</p>
            <p className="see">See all</p>
          </header>
          <div className="category_wrapper">
            <div>
              <PopularBusiness
                image="/images/dhl.png"
                logo="/images/logo.png"
                vendor="Alamande & sons ltd"
                service="Shoe Maker"
                businessInfo="Information about this business is lopesum about it and more knowledge
          experience if life ..."
              />
            </div>
            <div>
              <PopularBusiness
                image="/images/dominios.png"
                logo="/images/logo.png"
                vendor="Alamande & sons ltd"
                service="Shoe Maker"
                businessInfo="Information about this business is lopesum about it and more knowledge
          experience if life ..."
              />
            </div>
            <div>
              <PopularBusiness
                image="/images/shoprite.png"
                logo="/images/logo.png"
                vendor="Alamande & sons ltd"
                service="Shoe Maker"
                businessInfo="Information about this business is lopesum about it and more knowledge
          experience if life ..."
              />
            </div>
            <div>
              <PopularBusiness
                image="/images/tesla.png"
                logo="/images/logo.png"
                vendor="Alamande & sons ltd"
                service="Shoe Maker"
                businessInfo="Information about this business is lopesum about it and more knowledge
          experience if life ..."
              />
            </div>
            <div>
              <PopularBusiness
                image="/images/macdonalds1.png"
                logo="/images/logo.png"
                vendor="Alamande & sons ltd"
                service="Shoe Maker"
                businessInfo="Information about this business is lopesum about it and more knowledge
          experience if life ..."
              />
            </div>
            <div>
              <PopularBusiness
                image="/images/tesla.png"
                logo="/images/logo.png"
                vendor="Alamande & sons ltd"
                service="Shoe Maker"
                businessInfo="Information about this business is lopesum about it and more knowledge
          experience if life ..."
              />
            </div>
          </div>
        </section>
        {/* Popular Services */}
        <section className="category">
          <header>
            <p className="check_this_head bold">Popular Services</p>
            <p className="see">See all</p>
          </header>
          <div className="category_wrapper">
            <div>
              <PopularCard
                image="/images/picture.png"
                logo="/images/logo.png"
                vendor="Alamande & sons ltd"
                service="Shoe Maker"
                businessInfo="Information about this business is lopesum about it and more knowledge
          experience if life ..."
              />
            </div>
            <div>
              <PopularCard
                image="/images/Rectangle 2934.png"
                logo="/images/logo2.png"
                vendor="Hair Forest"
                service="Salon"
                businessInfo="Information about this business is lopesum about it and more knowledge
          experience if life ..."
              />
            </div>
          </div>
        </section>
        {/* Popular Products */}
        <section className="category">
          <header>
            <p className="check_this_head bold">Popular Products</p>
            <p className="see">See all</p>
          </header>
          <div className="category_wrapper">
            <div>
              <Product image="/images/b3a021110738469a9d0dcba15138db10 11.png" />
            </div>
            <div>
              <Product image="/images/b3a021110738469a9d0dcba15138db10 11.png" />
            </div>
            <div>
              <Product image="/images/donut.png" />
            </div>
            <div>
              <Product image="/images/pizza.png" />
            </div>
            <div>
              <Product image="/images/b3a021110738469a9d0dcba15138db10 11.png" />
            </div>
          </div>
        </section>
      </HeadFoot>
    </div>
  );
}
