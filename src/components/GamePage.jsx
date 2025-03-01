import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./GamePage.css";
import fruits from "../assets/fruits.png";

function GamePage() {
    const [filledBlanks, setFilledBlanks] = useState(["F", "_", "U", "_", "_", "S"]);
    const [wrongAttempts, setWrongAttempts] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);
    const navigate = useNavigate();

    const correctWord = ["F", "R", "U", "I", "T", "S"];

    const handleLetterClick = (letter) => {
        let nextIndex = filledBlanks.findIndex((char, index) => char === "_" && correctWord[index] !== "_");

        if (nextIndex === -1) return;

        if (letter === correctWord[nextIndex]) {
            let updatedBlanks = [...filledBlanks];
            updatedBlanks[nextIndex] = letter;
            setFilledBlanks(updatedBlanks);

            if (updatedBlanks.join("") === correctWord.join("")) {
                setTimeout(() => {
                    navigate("/fruits-score", { state: { wrongAttempts } });
                }, 1000);
            }
        } else {
            setWrongAttempts((prev) => {
                const newAttempts = prev + 1;
                if (newAttempts >= 2) {
                    setFadeOut(true);
                    setTimeout(() => navigate("/try-again"), 1000);
                }
                return newAttempts;
            });
        }
    };


    return (
        <motion.div
            className="landing-container"
            initial={{ opacity: 1 }}
            animate={{ opacity: fadeOut ? 0 : 1 }}
            transition={{ duration: 1 }}
        >
            <div className="mobile-screen">
                <div className="background"></div>
                <img src={fruits} alt="fruits" className="fruits" />
                <div className="fill-in-the-blanks">
                    {filledBlanks.map((letter, index) => (
                        <motion.span
                            key={index}
                            className="blank"
                            animate={{ scale: letter !== "_" ? 1.2 : 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

                <motion.div
                    className="lives"
                    animate={{ rotate: wrongAttempts > 0 ? [0, -10, 10, -10, 0] : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {wrongAttempts === 0 ? "❤️❤️" : wrongAttempts === 1 ? "❤️💔" : "💔💔"}
                </motion.div>

                <div className="letters">
                    {["O", "T", "K", "I", "R"].map((letter, index) => (
                        <motion.button
                            key={index}
                            className={`bt-${letter.toLowerCase()}`}
                            whileTap={{ scale: 1.2 }}
                            onClick={() => handleLetterClick(letter)}
                        >
                            {letter}
                        </motion.button>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default GamePage;
