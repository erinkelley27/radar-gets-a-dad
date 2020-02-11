import React from 'react';
import './Events.css';

import centanni from "../assets/centanni.png"
import esplanade from "../assets/esplanade-watercolor.png"
import pammys from "../assets/pammys.jpg"

const Events = () => {
    return (
        <div className="Events">
            <div className="ceremony-location">
                <img className="ceremony-location-image" src={centanni} alt="esplanade" />
                <div className="ceremony-event-info">
                    <a className="location-name" target="_blank" href="https://goo.gl/maps/oCWrfP1uCTMUvkso6">
                        <div className="location-bundle">
                            <h2>Ceremony</h2>
                            <h3>Centanni Park</h3>
                            <p>Cambridge, MA</p>
                        </div>
                    </a>
                    <div className="date-time-bundle">
                        <h4>Saturday, March 21, 2020</h4>
                        <h4>5:30pm</h4>
                    </div>
                </div>
            </div>
            <div className="reception-location">
                <img className="reception-location-image" src={pammys} alt="pammys" />
                <div className="reception-event-info">
                    <a className="location-name" target="_blank" href="https://www.pammyscambridge.com/">
                        <h2>Reception</h2>
                        <h3>Pammy's</h3>
                    </a>
                    <a className="location-address" target="_blank" href="https://goo.gl/maps/JCJTrJZm8Dq89itM9">
                        <p>928 Massachussetts Avenue</p>
                        <p>Cambridge, MA 02139</p>
                    </a>
                    <div className="date-time-bundle">
                        <h4>Saturday, March 21, 2020</h4>
                        <h4>6:00pm</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events