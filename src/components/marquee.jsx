import "./marquee.css";

export default function component({ children, style, speed = 20 }) {

  return (
    <div className="marquee-container" style={style}>
      <div
        className="marquee-track"
        style={{ animationDuration: `${speed}s` }}
      >
        <span>{children}</span>
        <span>{children}</span>
      </div>
    </div>
  );
}
