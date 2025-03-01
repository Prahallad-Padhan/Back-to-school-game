import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./FruitsScore.css";
import fruits from "../assets/fruits.png";

const FruitsScore = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const wrongAttempts = location.state?.wrongAttempts || 0;

    const handleNextClick = () => {
        navigate("/game2", { state: { wrongAttempts } });
    };

    return (
        <div className="landing-container">
            <div className="mobile-screen">
                <div className="background"></div>
                <img src={fruits} alt="fruits-1" className="fruits-1" />
                <div className="titlebox">
                    <h1 className="title">Congratulations!</h1>
                </div>
                <div className="answer">
                    <h1 className="ans">FRUITS</h1>
                </div>
                <div className="button-container-2">
                    <button className="next-button" onClick={handleNextClick}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default FruitsScore;
