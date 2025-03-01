import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./FruitsScore.css";
import bag from "../assets/bag.png";

const BagScore = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const wrongAttempts = location.state?.wrongAttempts || 0;
    const handleScoreClick = () => {
        if (wrongAttempts === 0) {
            navigate("/score-card");
        } else {
            navigate("/score-card2");
        }
    };

    return (
        <div className="landing-container">
            <div className="mobile-screen">
                <div className="background"></div>
                <img src={bag} alt="bag" className="fruits-1" />
                <div className="titlebox">
                    <h1 className="title">Congratulations!</h1>
                </div>
                <div className="answer">
                    <h1 className="ans">BAG</h1>
                </div>
                <div className="button-container-2">
                    <button className="next-button" onClick={handleScoreClick}>Score</button>
                </div>
            </div>
        </div>
    );
};

export default BagScore;
