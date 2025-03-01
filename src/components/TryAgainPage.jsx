import React from "react";
import { useNavigate } from "react-router-dom";
import "./TryAgainPage.css";
import crymonkey from "../assets/crymonkey.png";
import cross from "../assets/cross.png";
import bubble from "../assets/bubble.png";

function TryAgainPage() {
    const navigate = useNavigate();

    return (
        <div className="landing-container">
            <div className="mobile-screen-TA">
                <div className="background"></div>

                <div className="bubble-container">
                    <img src={bubble} alt="bubble" className="bubble" />
                    <p className="bubble-text">OPPS!</p>
                </div>

                <img src={cross} alt="cross" className="cross" />

                <div className="crymonkey-container">
                    <img src={crymonkey} alt="crymonkey" className="crymonkey" />
                </div>
                <div className="button-container">
                    <button className="retry-button" onClick={() => navigate("/")}>Try Again</button>
                </div>
            </div>
        </div>
    );
}

export default TryAgainPage;
