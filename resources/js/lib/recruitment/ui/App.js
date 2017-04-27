import React from "react";
import PropTypes from 'prop-types';
import Navbar from "../container/Navbar";
import Offers from "../container/Offers";
import MyOffers from "../container/MyOffers";
import MyTests from "../container/MyTests";
import MyProfile from "../container/MyProfile.js";
import MyCalendar from "../container/MyCalendar";
import Connection from "../container/Connection";

export default class App extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    renderOffers() {
        return (
            <Offers/>
        )
    }
    renderMyOffers() {
        return (
            <MyOffers/>
        )
    }
    renderMyTests() {
        return (
            <MyTests/>
        )
    }
    renderMyProfile() {
        return (
            <MyProfile/>
        )
    }
    renderMyCalendar() {
        return (
            <MyCalendar/>
        )
    }
    renderConnection() {
        return (
            <Connection/>
        )
    }

    renderContent(){
        switch (this.props.content.current) {
          case "offers":
              return this.renderOffers();
          case "my_offers":
              return this.renderMyOffers();
          case "my_tests":
              return this.renderMyTests();
          case "my_profile":
              return this.renderMyProfile();
          case "my_calendar":
              return this.renderMyCalendar();
          case "connection":
              return this.renderConnection();
          default:
              return this.renderOffers();
        }
    }

    render () {
        return (
            <div className="full-height">
                <section id="gfi-talents-header-container" className="relative">
                    <img className="absolute full-width img-cover" src="http://hackathon.gfi/resources/img/header-background.jpeg" />
                    <Navbar/>
                </section>
                <section id="gfi-talents-content">
                    {this.renderContent()}
                </section>
            </div>
        );
    }
}
