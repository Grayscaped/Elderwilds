import "./home.css";

import Youtube from "../components/youtube.jsx";
import Marquee from "../components/marquee.jsx";

export default function page() {
  return (<>

    {/* Backgrounds */}
    <div className="background background-image" />

    <div className="background" style={{top:"500px"}}>
        <svg viewBox="0 0 200 200">
          <polygon points="100,0 200,10 200,200 0,200 0,10" fill="#785b8e" stroke="#000000" strokeWidth="0" opacity="1" transform="rotate(0, 100, 100)" />
        </svg>
    </div>

    <div className="background" style={{top:"1400px"}}>
        <svg viewBox="0 0 200 200">
          <polygon points="100,0 200,10 200,200 0,200 0,10" fill="#d0c8c1" stroke="#000000" strokeWidth="0" opacity="1" transform="rotate(0, 100, 100)" />
        </svg>
    </div>

    {/* Sections */}
    <section>
        <h3>Elderwilds SMP</h3>
    </section>

    <section className="center margin-bottom" style={{marginBottom: "200px"}}>

        <h1 className="title skranji-regular">Your adventure awaits</h1>
        <Marquee  className="subtitle" speed="100" >Build you legacy. Write your own story. Create your legend. Define your future. Shape your destiny. Leave your mark. Own your journey. Forge your path. Chase greatness. Rise above. Stand apart.</Marquee>
        <div className="margin-bottom"/>
        <div className="discord impact" style={{fontSize:"1.5em"}}>Join!</div>
    </section>

    <section className="center margin-bottom">
        <Youtube src="https://www.youtube.com/embed/K0BWedP-jjY?autoplay=1&loop=1&controls=0&rel=0"></Youtube>
    </section>

    <section>

        <div className="card">
        <div className="image">
          <img src="https://via.placeholder.com/250" alt="Sample Image" />
        </div>

        <div className="content">
          <h2>Title Here</h2>
          <p>
            This is the description. You can add any text here. The image appears
            on the left while the title and description are displayed on the right.
          </p>
        </div>
        </div>


          <main style={{ paddingTop: "80px" }}>
            {[...Array(50)].map((_, i) => (
              <p key={i}>Scroll down...</p>
            ))}
          </main>
    </section>
</>);
}
