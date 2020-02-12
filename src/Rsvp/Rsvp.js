import React, { Component } from 'react';
import './Rsvp.css';

import esplanade from "../assets/esplanade-watercolor.png"
import plus from "../assets/plus.png"

class Rsvp extends Component {
    constructor () {
        super()
        this.state = {
            guests: 0
        }
    }
    render () {
        return (
        <div className="Rsvp">
            <div className="watercolor">
                <img className="watercolor-image" src={esplanade} alt="esplanade" />
            </div>

            <div className="rsvp-form">
                <form id="fs-frm" name="survey-form" accept-charset="utf-8" action="https://formspree.io/mdogyawr" method="post">
                
                <div className="inputs">

                    <div className="name">
                        <label className="bold" for="full-name">Please list the names of all guests in your party</label>
                        <input className="first-input" type="text" name="name" id="name" placeholder="Guest Name" />
                        <input type="text" name="name" id="name" placeholder="Guest Name" />
                        <img className="plus-sign" src={plus} alt="plus-sign" />
                        {/* <input type="text" name="name" id="name" placeholder="Guest 3" />
                        <input type="text" name="name" id="name" placeholder="Guest 4" /> */}
                    </div>

                    {/* <div className="response">
                        <label className="bold" for="rsvp">Can you make it?</label>
                        <select name="rsvp" id="rsvp" required="">
                            <option value="0" selected="">Yes</option>
                            <option value="1">No</option>
                        </select>
                    </div> */}

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
                    
                    <div className="meals-all">
                        <p className="meal-question bold">Please select your meal</p>
                        <div className="meal-options">
                            <div className="fish meal-option">
                                <label for="fish">Red Snapper</label>
                                <select name="fish" id="fish" required="">
                                    <option value="0" selected="">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>

                            <div className="meat meal-option">
                                <label for="meat">Beef Tenderloin</label>
                                <select name="meat" id="meat" required="">
                                    <option value="0" selected="">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>

                            <div className="veggie meal-option">
                                <label for="veggie">Barlotti Beans (V)</label>
                                <select name="veggie" id="veggie" required="">
                                    <option value="0" selected="">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="diet">
                        <label className="bold" for="dietary-restrictions">Please let us know of any dietary restrictions so that we may best accommodate you:</label>
                        <textarea rows="4" name="diet" id="diet"></textarea>
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
}

// const Rsvp = () => {

//     // addGuest = (e) => {
//     //     e.preventDefault()
//     //     console.log('Add guest button working')
//     // }

//     return (
//         <div className="Rsvp">
//             <div className="watercolor">
//                 <img className="watercolor-image" src={esplanade} alt="esplanade" />
//             </div>

//             <div className="rsvp-form">
//                 <form id="fs-frm" name="survey-form" accept-charset="utf-8" action="https://formspree.io/mdogyawr" method="post">
                
//                 <div className="inputs">

//                     <div className="name">
//                         <label className="bold" for="full-name">Please list the names of all guests in your party</label>
//                         <input className="first-input" type="text" name="name" id="name" placeholder="Guest Name" />
//                         <input type="text" name="name" id="name" placeholder="Guest Name" />
//                         <img className="plus-sign" src={plus} alt="plus-sign" />
//                         {/* <input type="text" name="name" id="name" placeholder="Guest 3" />
//                         <input type="text" name="name" id="name" placeholder="Guest 4" /> */}
//                     </div>

//                     {/* <div className="response">
//                         <label className="bold" for="rsvp">Can you make it?</label>
//                         <select name="rsvp" id="rsvp" required="">
//                             <option value="0" selected="">Yes</option>
//                             <option value="1">No</option>
//                         </select>
//                     </div> */}

//                     {/* <div className="guest-count">
//                         <label className="bold" for="guest-count">How many guests in your party will be attending?</label>
//                         <select name="guest-count" id="guest-count" required="">
//                             <option value="0" selected="">0</option>
//                             <option value="1">1</option>
//                             <option value="2">2</option>
//                             <option value="3">3</option>
//                             <option value="4">4</option>
//                         </select>
//                     </div> */}
                    
//                     <div className="meals-all">
//                         <p className="meal-question bold">Please select your meal</p>
//                         <div className="meal-options">
//                             <div className="fish meal-option">
//                                 <label for="fish">Red Snapper</label>
//                                 <select name="fish" id="fish" required="">
//                                     <option value="0" selected="">0</option>
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                 </select>
//                             </div>

//                             <div className="meat meal-option">
//                                 <label for="meat">Beef Tenderloin</label>
//                                 <select name="meat" id="meat" required="">
//                                     <option value="0" selected="">0</option>
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                 </select>
//                             </div>

//                             <div className="veggie meal-option">
//                                 <label for="veggie">Barlotti Beans (V)</label>
//                                 <select name="veggie" id="veggie" required="">
//                                     <option value="0" selected="">0</option>
//                                     <option value="1">1</option>
//                                     <option value="2">2</option>
//                                 </select>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="diet">
//                         <label className="bold" for="dietary-restrictions">Please let us know of any dietary restrictions so that we may best accommodate you:</label>
//                         <textarea rows="4" name="diet" id="diet"></textarea>
//                         <input type="hidden" name="_subject" id="email-subject" value="Survey Responses" />
//                     </div>

//                     <div className="submit-button">
//                         <input className="submit" type="submit" value="Submit" />
//                     </div>
//                 </div>
//                 </form>    
//             </div>
//         </div>
//     )
// }

export default Rsvp