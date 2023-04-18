import { Icon } from "@iconify/react";
import HeadFoot from "../../components/headfoot/HeadFoot";
import "./categories.scss";
import { useNavigate } from "react-router";

export default function Categories() {
  const images = [
    "/images/pexels-rodnae-productions-7413909 4.png",
    "/images/pexels-andrea-piacquadio-933255 9.png",
    "/images/pexels-andrea-piacquadio-933255 10.png",
    "/images/pexels-andrea-piacquadio-933255 11.png",
    "/images/pexels-andrea-piacquadio-933255 12.png",
    "/images/pexels-andrea-piacquadio-933255 13.png",

    "/images/pexels-rodnae-productions-7413909 5.png",
    "/images/pexels-andrea-piacquadio-933255 14.png",
    "/images/pexels-andrea-piacquadio-933255 17.png",
    "/images/pexels-andrea-piacquadio-933255 16.png",
    "/images/pexels-andrea-piacquadio-933255 15.png",
    "/images/pexels-andrea-piacquadio-933255 18 (1).png",

    "/images/pexels-rodnae-productions-7413909 6.png",
    "/images/pexels-andrea-piacquadio-933255 19.png",
    "/images/pexels-andrea-piacquadio-933255 20.png",
    "/images/pexels-andrea-piacquadio-933255 22 (2).png",
    "/images/pexels-andrea-piacquadio-933255 21.png",
    "/images/pexels-andrea-piacquadio-933255 23 (1).png",
  ];

  const navigate = useNavigate()
  const categories = {
    categoryTitle: [
      "Administration",
      "Agriculture",
      "Arts",
      "Business",
      "Chairty",
      "Education",
      "Entertainment",
      "Health",
      "Hospitality",
      "Market Place",
      "Places",
      "Religion",
      "Science",
      "Security",
      "Sports",
      "Transportation",
    ],
    categoryDetails:
      "Launch and manage your physical and online business or service in FindMe Business app get verified and let customers find you in minutes with world wide visibility powered by multiverse technology.",
  };

  return (
    <HeadFoot>
      <div className="category">
        <div className="hero_category">
          <Icon
            icon="ph:arrow-left-bold"
            color="white"
            width="35"
            height="35"
            className="back_nav"
            onClick={() => navigate(-1)}
          />
          <div className="overlay"></div>
          {images.map((image) => {
            return (
              <div className="image">
                <img src={image} alt="category" />
                <p>Administration</p>
              </div>
            );
          })}
        </div>

        <div className="category_main">
          <h3>Category</h3>
          <div className="details">
            <p className="text">
              Launch and manage your physical and online business or service in
              FindMe Business app get verified and let customers find you in
              minutes with world wide visibility powered by multiverse
              technology.
            </p>
            <div className="image">
              <img src="/images/Group 7681 (1).png" alt="" />
            </div>
          </div>
        </div>

        <section className="category_container">
          <div className="category_details">
            <p className="title">Administration</p>
            <p>
              Launch and manage your physical and online business or service in
              FindMe Business app get verified and let customers find you in
              minutes with world wide visibility powered by multiverse
              technology.
            </p>
          </div>
          <div className="category_details">
            <p className="title">Administration</p>
            <p>
              Launch and manage your physical and online business or service in
              FindMe Business app get verified and let customers find you in
              minutes with world wide visibility powered by multiverse
              technology.
            </p>
          </div>
          <div className="category_details">
            <p className="title">Administration</p>
            <p>
              Launch and manage your physical and online business or service in
              FindMe Business app get verified and let customers find you in
              minutes with world wide visibility powered by multiverse
              technology.
            </p>
          </div>
          <div className="category_details">
            <p className="title">Administration</p>
            <p>
              Launch and manage your physical and online business or service in
              FindMe Business app get verified and let customers find you in
              minutes with world wide visibility powered by multiverse
              technology.
            </p>
          </div>
          <div className="category_details">
            <p className="title">Administration</p>
            <p>
              Launch and manage your physical and online business or service in
              FindMe Business app get verified and let customers find you in
              minutes with world wide visibility powered by multiverse
              technology.
            </p>
          </div>
          <div className="category_details">
            <p className="title">Administration</p>
            <p>
              Launch and manage your physical and online business or service in
              FindMe Business app get verified and let customers find you in
              minutes with world wide visibility powered by multiverse
              technology.
            </p>
          </div>
          <div className="category_details">
            <p className="title">Administration</p>
            <p>
              Launch and manage your physical and online business or service in
              FindMe Business app get verified and let customers find you in
              minutes with world wide visibility powered by multiverse
              technology.
            </p>
          </div>
          <div className="category_details">
            <p className="title">Administration</p>
            <p>
              Launch and manage your physical and online business or service in
              FindMe Business app get verified and let customers find you in
              minutes with world wide visibility powered by multiverse
              technology.
            </p>
          </div>
          <div className="category_details">
            <p className="title">Administration</p>
            <p>
              Launch and manage your physical and online business or service in
              FindMe Business app get verified and let customers find you in
              minutes with world wide visibility powered by multiverse
              technology.
            </p>
          </div>
          <div className="category_details">
            <p className="title">Administration</p>
            <p>
              Launch and manage your physical and online business or service in
              FindMe Business app get verified and let customers find you in
              minutes with world wide visibility powered by multiverse
              technology.
            </p>
          </div>
        </section>

        <p className="foot_note">
          Launch and manage your physical and online business or service in
          FindMe Business app get verified and let customers find you in minutes
          with.
        </p>

        <section className="bottom_nav">
          <p>Simple interface</p>
          <p>High secured</p>
          <p>Advanced technology</p>
        </section>
      </div>
    </HeadFoot>
  );
}
