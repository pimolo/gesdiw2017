import React from "react";
import PropTypes from 'prop-types';
import Navbar from "../container/Navbar";

export default class App extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentWillMount () {

    }


    renderOffers() {
        return (
            <h2>OFFERS</h2>
        )
    }
    renderMyOffers() {
        return (
            <h2>MY OFFERS</h2>
        )
    }
    renderMyTests() {
        return (
            <h2>MY TESTS</h2>
        )
    }
    renderMyProfile() {
        return (
            <h2>MY PROFILE</h2>
        )
    }
    renderMyCalendar() {
        return (
            <h2>MY CALENDAR</h2>
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
          default:
              return this.renderOffers();
        }
    }

    render () {
        return (
            <div className="full-height">
                <section id="gfi-talents-header-container">
                    <Navbar/>
                </section>
                <section id="gfi-talents-content">
                    {this.renderContent()}
                </section>
            </div>
        );
    }
}
