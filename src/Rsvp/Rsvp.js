import React, { Component } from 'react';
import './Rsvp.css';

import esplanade from "../assets/esplanade-watercolor.png"
import plus from "../assets/plus.png"

class Rsvp extends Component {
    constructor () {
        super()
        this.state = {
            guests: 2
        }
    }

    handlePlus = (evt) => {
        evt.preventDefault()
        console.log('add guest button works')
        if (this.state.guests < 4 && this.state.guests >= 2) {
            this.setState({ guests: this.state.guests + 1 })
        }
    }
    
    addGuest = () => {
        console.log(this.state.guests)
        return (
            <input type="text" name="name" id="name" placeholder="Guest Name" />
        )
    }

    render () {

        let guestInput3
        let guestInput4
        if (this.state.guests === 3) {
            guestInput3 = this.addGuest()
        } else if (this.state.guests === 4) {
            guestInput3 = this.addGuest()
            guestInput4 = this.addGuest()
        }

        return (
        <div className="Rsvp">
            <div className="watercolor">
                <img className="watercolor-image" src={esplanade} alt="esplanade" />
            </div>

            <div className="rsvp-form">
                <form id="fs-frm" name="survey-form" accept-charset="utf-8" action="https://formspree.io/mdogyawr" method="post">
                
                <div className="inputs">

                    <div className="name form-section">
                        <label className="guest-names bold" for="full-name">Please list the names of all guests in your party</label>
                        <input className="first-input" type="text" name="name" id="name" placeholder="Guest Name" />
                        <input type="text" name="name" id="name" placeholder="Guest Name" />
                        { guestInput3 }
                        { guestInput4 }
                        <img onClick={this.handlePlus} className="plus-sign" src={plus} alt="plus-sign" />
                    </div>

                    <div className="response form-section">
                        <label className="bold" for="welcome-rsvp">Will you be attending the Welcome Party?</label>
                        <select className="select-rsvp" name="welcome-rsvp" id="rsvp" required="">
                            <option value="0" selected="">Select One</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    <div className="response form-section">
                        <label className="bold" for="reception-rsvp">Will you be attending the Reception at Pammy's?</label>
                        <select className="select-rsvp" name="reception-rsvp" id="rsvp" required="">
                            <option value="0" selected="">Select One</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    {/* <div className="guest-count">
                        <label className="bold" for="guest-count">How many guests in your party will be attending?</label>
                        <select name="guest-count" id="guest-count" required="">
                            <option value="0" selected="">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div> */}
                    
                    <div className="meals-all form-section">
                        <p className="meal-question bold">Please select your meal</p>
                        <div className="meal-options">
                            <div className="fish meal-option">
                                <label for="fish">Red Snapper</label>
                                <select name="fish" id="fish" required="">
                                    <option value="0" selected="">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>

                            <div className="meat meal-option">
                                <label for="meat">Beef Tenderloin</label>
                                <select name="meat" id="meat" required="">
                                    <option value="0" selected="">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>

                            <div className="veggie meal-option">
                                <label for="veggie">Barlotti Beans (V)</label>
                                <select name="veggie" id="veggie" required="">
                                    <option value="0" selected="">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="diet form-section">
                        <label className="bold" for="dietary-restrictions">Please let us know of any dietary restrictions so that we may best accommodate you</label>
                        <textarea rows="4" name="diet" id="diet"></textarea>
                        <input type="hidden" name="_subject" id="email-subject" value="Survey Responses" />
                    </div>

                    <div className="submit-button form-section">
                        <input className="submit" type="submit" value="Submit" />
                    </div>
                </div>
                </form>    
            </div>
        </div>
        )
    }
}

export default Rsvp