import "./youtube.css";

export default function component({src}) {
  return (
<div className="youtube">
    <iframe width="100%" height="100%" src={src} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" title="Media Embed">
    </iframe>
</div>
  );
}
