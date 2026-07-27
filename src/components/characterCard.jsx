import "./characterCard.css";
import { useId } from "react";

export default function component({username, job="unknown", quote, social, background="/2026-07-10_21.52.26.png", style, characterStyle}) {
    const maskId = useId();
  return (
    <a href={social}>
        <div className="cardCharacter" style={{height:"420px", width:"270px", ...style}}>
          <div className="cardCharacter-bg"></div>

            <div className="character-image">
                <svg viewBox="0 0 200 200" style={{ height:"100%", width:"100%", overflow:"visible", zIndex:"-10"}}>
                    <mask id={maskId}>
                        <rect width="200" height="200" x="0" y="-65" fill="#ffffff"/>
                        <ellipse rx="80" ry="40" cx="100" cy="120" fill="#ffffff"/>
                    </mask>
                    <image width="300" height="300" y="-60" href={background} mask={`url(#${maskId})`}></image>
                </svg>
            </div>
            <div className="character-image glow">
                <svg viewBox="0 0 200 200" style={{ height:"100%", width:"100%", overflow:"visible", zIndex:"-10", ...characterStyle}}>
                    <mask id={maskId}>
                        <rect width="200" height="200" x="0" y="-65" fill="#ffffff"/>
                        <ellipse rx="80" ry="40" cx="100" cy="120" fill="#ffffff"/>
                    </mask>
                    <image className="profile-circle" width="150" height="150" x="25" y="25" href={`/${username}.png`} mask={`url(#${maskId})`}></image>
                </svg>
            </div>

          <div className="content">
            <h2>{username}</h2>
            <span className="job">{job}</span>

            <p className="quote">
              {`"${quote}"`}
            </p>

          </div>
        </div>
    </a>
  );
}
