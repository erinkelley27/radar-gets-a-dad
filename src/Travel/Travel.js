import React from 'react';
import './Travel.css';

import charles from "../assets/charles-hotel.jpg"
import freepoint from "../assets/freepoint-hotel.jpg"

const Travel = () => {
    return (
        <div className="Travel">
            <div className="hotel">
                <a target="_blank" href="https://www.charleshotel.com/">
                    <img className="hotel-image" src={charles} alt="charles" />
                </a>
                <div className="hotel-info">
                    <a className="hotel-name" target="_blank" href="https://www.charleshotel.com/"><h2>The Charles Hotel</h2></a>
                    <h3>$249.00/night</h3>
                    <a className="hotel-address" target="_blank" href="https://goo.gl/maps/Ysk94oSxZ3QevZFW8">
                        <p>Harvard Square One Bennett Street</p>
                        <p>Cambridge, MA 02138</p>
                    </a>
                    <a className="deadline" href="https://be.synxis.com/?adult=1&arrive=2020-03-20&chain=10237&child=0&configcode=BOSCH&currency=USD&depart=2020-03-22&group=KLWEDDING20&hotel=27199&level=hotel&locale=en-US&rooms=1&themecode=BOSCH&trifecta=1" target="_blank">
                        <p className="deadline">Link for Kelley-Lawrence Wedding Block</p>
                        <p>Deadline: Februrary 21, 2020</p>
                    </a>
                </div>
            </div>
            <div className="hotel">
                <a target="_blank" href="https://www.charleshotel.com/">
                    <img className="hotel-image" src={freepoint} alt="freepoint" />
                </a>
                <div className="hotel-info">
                    <a className="hotel-name" target="_blank" href="https://www.freepointhotel.com/"><h2>The Freepoint Hotel</h2></a>
                    <h3>$199.00/night</h3>
                    <a className="hotel-address" target="_blank" href="https://goo.gl/maps/ieEi9yK32ARFaM9V8">
                        <p>220 Alewife Brook Parkway</p>
                        <p>Cambridge, MA 02138</p>
                    </a>
                    <a className="deadline" href="https://secure3.hilton.com/en_US/up/reservation/book.htm?inputModule=HOTEL&ctyhocn=BOSFRUP&spec_plan=KELLEY&arrival=20200320&departure=20200322&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT" target="_blank">
                        <p className="deadline">Link for Kelley-Lawrence Wedding Block</p>
                        <p>Deadline: Februrary 20, 2020</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Travel