import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./ScoreCard.css";

const ScoreCard = ({ gamesPlayed = 6, secondTrial = 0, totalScore = 6 }) => {
    const navigate = useNavigate();

    return (

        <div className="landing-container">
            <div className="mobile-screen">
                <div className="background"></div>
                <div className="titlebox">
                    <h1 className="title">LEVEL COMPLETED</h1>
                </div>

                <div className="stars">
                    <span className="star">★</span>
                    <span className="star big">★</span>
                    <span className="star">★</span>
                </div>
                <div className="scoreboard">
                    <div className="score-box">
                        <p>GAMES PLAYED: <span>{gamesPlayed.toString().padStart(2, "0")}</span></p>
                    </div>

                    <div className="score-box">
                        <p>SECOND TRIAL: <span>{secondTrial}</span></p>
                    </div>

                    <div className="score-box">
                        <p>TOTAL SCORE: <span>{totalScore.toString().padStart(2, "0")}</span></p>
                    </div>
                </div>

                <motion.button
                    className="play-again-btn"
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate("/game")}
                >
                    Play again
                </motion.button>
            </div>
        </div>

    );
};

export default ScoreCard;
