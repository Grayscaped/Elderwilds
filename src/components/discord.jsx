import "./discord.css";

export default function component({ children, style, speed = 20 }) {

  return (
    <a href="https://discord.gg/jXxjfTtgDX">
        <div className="discord impact" style={{ ...style}}>
        Join!
        </div>
    </a>
  );
}
