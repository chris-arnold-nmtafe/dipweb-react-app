import React from "react";

import "../styles/animated_style.css";

function StyledComponent() {
    const [looptime, setLoopTime] = React.useState("3000");
    const animatedSection = {
        color: "blue",
        backgroundColor: "lightgray",
        padding: "10px",
        bordeRadius: "5px",
        maxWidth: "100vw",
        animation: `fadeInScale ${looptime}ms ease-in-out infinite`,
    };
    const setLoop = event => {
        setLoopTime(event.target.value);
    };
    return (
        <section className="section container">
            <div className="options">
                <input type="range" className="slider" onChange={setLoop} min={100} max={10000} value={looptime} />
            </div>
            <div className="content">
                <section className="animatedSection" style={animatedSection}>
                    This is a styled section with animation
                </section>
            </div>
        </section>
    );
}

export default StyledComponent;
