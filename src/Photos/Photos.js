import React from 'react';
import './Photos.css';

import main from "../assets/main.jpg"

import barp from "../assets/barp.jpg"
import bucketlist from "../assets/bucketlist.jpg"
import dancing from "../assets/dancing.jpg"
import datenight from "../assets/datenight.jpg"
import ethanswedding from "../assets/ethanswedding.jpg"
import jenswedding from "../assets/jenswedding.jpg"
import kyleswedding from "../assets/kyleswedding.jpg"
import lincoln from "../assets/lincoln.jpg"
import lionsgame from "../assets/lionsgame.jpg"
import memphis from "../assets/memphis.jpg"
import michiganfishing from "../assets/michiganfishing.jpg"
import midlands from "../assets/midlands.jpg"
import natsgame from "../assets/natsgame.jpg"
import oldebbitt from "../assets/oldebbitt.jpg"
import pyramids from "../assets/pyramids.jpg"
import readingterminal from "../assets/readingterminal.jpg"
import springers from "../assets/springers.jpg"
import stoneys from "../assets/stoneys.jpg"
import thestation from "../assets/thestation.jpg"
import towel from "../assets/towel.jpg"
import voting from "../assets/voting.jpg"
import westerndesert from "../assets/westerndesert.jpg"

const Photos = () => {
    return (
        <div className="Photos">
            <div className="mainphoto">
                <img className="mainimage" src={main} alt="main" />
            </div>
            <div className="addlphotos">
                <img className="addlimage" src={barp} alt="squareimage" />
                <img className="addlimage" src={bucketlist} alt="squareimage" />
                <img className="addlimage" src={dancing} alt="squareimage" />
                <img className="addlimage" src={datenight} alt="squareimage" />
                <img className="addlimage" src={ethanswedding} alt="squareimage" />
                <img className="addlimage" src={jenswedding} alt="squareimage" />
                <img className="addlimage" src={kyleswedding} alt="squareimage" />
                <img className="addlimage" src={lincoln} alt="squareimage" />
                <img className="addlimage" src={lionsgame} alt="squareimage" />
                <img className="addlimage" src={memphis} alt="squareimage" />
                <img className="addlimage" src={michiganfishing} alt="squareimage" />
                <img className="addlimage" src={midlands} alt="squareimage" />
                <img className="addlimage" src={natsgame} alt="squareimage" />
                <img className="addlimage" src={oldebbitt} alt="squareimage" />
                <img className="addlimage" src={pyramids} alt="squareimage" />
                <img className="addlimage" src={readingterminal} alt="squareimage" />
                <img className="addlimage" src={springers} alt="squareimage" />
                <img className="addlimage" src={stoneys} alt="squareimage" />
                <img className="addlimage" src={thestation} alt="squareimage" />
                <img className="addlimage" src={towel} alt="squareimage" />
                <img className="addlimage" src={voting} alt="squareimage" />
                <img className="addlimage" src={westerndesert} alt="squareimage" />
            </div>
        </div>
    )
}

export default Photos;