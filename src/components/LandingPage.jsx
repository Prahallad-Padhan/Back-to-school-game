import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import monkeyLeft from "../assets/monkey-left.png";
import monkeyRight from "../assets/monkey-right.png";
import b from "../assets/b.png";
import a from "../assets/a.png";
import c from "../assets/c.png";
import k from "../assets/k.png";
import t from "../assets/t.png";
import o from "../assets/o.png";
import s from "../assets/s.png";
import c2 from "../assets/c2.png";
import h from "../assets/h.png";
import o2 from "../assets/o2.png";
import o3 from "../assets/o3.png";
import l from "../assets/l.png";

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="landing-container">
            <div className="mobile-screen">
                <div className="top-half">
                    <img src={b} alt="b" className="b" />
                    <img src={a} alt="a" className="a" />
                    <img src={c} alt="c" className="c" />
                    <img src={k} alt="k" className="k" />
                    <img src={t} alt="t" className="t" />
                    <img src={o} alt="o" className="o" />
                    <img src={s} alt="s" className="s" />
                    <img src={h} alt="h" className="h" />
                    <img src={c2} alt="c2" className="c2" />
                    <img src={o2} alt="o2" className="o2" />
                    <img src={o3} alt="o3" className="o3" />
                    <img src={l} alt="l" className="l" />
                </div>

                <div className="bottom-half">
                    <div className="play-section">
                        <img src={monkeyLeft} alt="Monkey Left" className="monkey" />
                        <button className="play-button" onClick={() => navigate("/game")}>
                            <span className="letter P">P</span>
                            <span className="letter L">L</span>
                            <span className="letter A">A</span>
                            <span className="letter Y">Y</span>
                        </button>
                        <img src={monkeyRight} alt="Monkey Right" className="monkey" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
