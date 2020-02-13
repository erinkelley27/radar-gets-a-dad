import React from 'react';
import './Registry.css';

import zola from "../assets/zola.png"

const Registry = () => {
    return (
        <div className="Registry">
            <div className="registry">
                <a target="_blank" href="https://www.zola.com/registry/erinandjustin2020/">
                    <h3>Erin & Justin's Wedding Registry</h3>
                    <img className="zola-image" src={zola} alt="zola" />
                </a>
            </div>
        </div>
    )
}

export default Registry