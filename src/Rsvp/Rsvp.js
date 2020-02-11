import React from 'react';
import './Rsvp.css';

import esplanade from "../assets/esplanade-watercolor.png"

const Rsvp = () => {
    return (
        <div className="Rsvp">
            <div className="watercolor">
                <img className="watercolor-image" src={esplanade} alt="esplanade" />
            </div>

            <div className="rsvp-form">
                <form id="fs-frm" name="survey-form" accept-charset="utf-8" action="https://formspree.io/mdogyawr" method="post">
                
                <div className="inputs">

                    <div className="name">
                        <label for="full-name">Your Name(s)</label>
                        <input type="text" name="name" id="full-name" placeholder="First and Last" required="" />
                    </div>

                    <div className="response">
                        <label for="rsvp">Can you make it?</label>
                        <select name="rsvp" id="rsvp" required="">
                            <option value="0" selected="">Yes</option>
                            <option value="1">No</option>
                        </select>
                    </div>

                    <div className="guest-count">
                        <label for="guest-count">How many guests in your party will be attending?</label>
                        <select name="guest-count" id="guest-count" required="">
                            <option value="0" selected="">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>

                    <div className="meal-options">
                        <div className="fish meal-option">
                            <label for="fish">Fish</label>
                            <select name="fish" id="fish" required="">
                                <option value="0" selected="">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>

                        <div className="meat meal-option">
                            <label for="meat">Meat</label>
                            <select name="meat" id="meat" required="">
                                <option value="0" selected="">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>

                        <div className="veggie meal-option">
                            <label for="veggie">Vegetarian</label>
                            <select name="veggie" id="veggie" required="">
                                <option value="0" selected="">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>

                    <div className="diet">
                        <label for="dietary-restrictions">Any other dietary restrictions?</label>
                        <textarea rows="3" name="message" id="message" placeholder="" required=""></textarea>
                        <input type="hidden" name="_subject" id="email-subject" value="Survey Responses" />
                    </div>

                    <div className="submit-button">
                        <input className="submit" type="submit" value="Submit" />
                    </div>
                </div>
                </form>    
            </div>
        </div>
    )
}

export default Rsvp