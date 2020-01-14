import React from 'react';
import './Registry.css';

import zola from "../assets/zola.png"

const Registry = () => {
    return (
        <div className="Registry">
            <div className="registry">
                <a target="_blank" href="https://www.zola.com/registry/erinandjustin2020/"><img className="zola-image" src={zola} alt="zola" /></a>
                {/* <div className="event-info">
                    <a className="location-name" target="_blank" href="https://www.pammyscambridge.com/">
                    <h2>Ceremony & Reception</h2>
                    <h3>Pammy's</h3></a>
                    <h4>Saturday, March 21, 2020</h4>
                    <h4>6:00pm - 12:30am</h4>
                    <a className="location-address" target="_blank" href="https://goo.gl/maps/JCJTrJZm8Dq89itM9">
                        <p>928 Massachussetts Avenue</p>
                        <p>Cambridge, MA 02139</p>
                    </a>
                </div> */}
            </div>
        </div>
    )
}

export default Registry