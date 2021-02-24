import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="videos/video-2.mp4" autoPlay loop muted />
      <h1>冒険が待っている</h1>
      <p> 何を待っているんだ？</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          始めよう
        </Button>
        <Button className="btns" buttonSize="btn--large">
          WATCH TRAILER
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
