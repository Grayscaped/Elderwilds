import "./home.css";

import Youtube from "../components/youtube.jsx";
import Marquee from "../components/marquee.jsx";
import Discord from "../components/discord.jsx";

export default function page() {
  return (<>

    {/* Backgrounds */}
    <div className="background background-image" />

    <div className="background" style={{top:"500px", maxHeight:"600px", overflow:"hidden", transform: "scale(2) translate(0, 20%)"}}>
        <svg viewBox="0 0 100 100">
          <polygon points="50,0 100,5 100,75 0,75 0,5" fill="#785b8e" stroke="#000000" strokeWidth="0" opacity="1" />
        </svg>
    </div>


    <div className="background" style={{top:"1400px", maxHeight:"400px", overflow:"hidden", transform: "scale(2) translate(0, 20%)"}}>
        <svg viewBox="0 0 100 100">
          <polygon points="50,0 100,5 100,55 0,55 0,5" fill="#d0c8c1" stroke="#000000" strokeWidth="0" opacity="1" />
        </svg>
    </div>
{/*
    <div className="background" style={{top:"1400px", filter:"drop-shadow(0px -20px 5px #0003)", maxHeight:"400px", overflow:"hidden" }}>
        <svg viewBox="0 0 200 200">
          <polygon points="100,0 200,10 200,50 0,50 0,10" fill="#d0c8c1" stroke="#000000" strokeWidth="0" opacity="1"/>
        </svg>
    </div> */}

    {/* Sections */}
    <section>
        <h3>Elderwilds SMP</h3>
    </section>

    <section className="center margin-bottom" style={{marginBottom: "200px"}}>

        <h1 className="title skranji-regular">Your adventure awaits</h1>
        <Marquee  className="subtitle" speed="80" style={{width:"40%", fontSize:"1.5em"}} >Build you legacy. Write your own story. Create your legend. Define your future. Shape your destiny. Leave your mark. Own your journey. Forge your path. Chase greatness. Rise above. Stand apart.</Marquee>
        <div className="margin-bottom"/>
        <Discord />
    </section>

    <section className="center" style={{marginBottom: "200px", filter:"drop-shadow(-20px -20px 5px #0003) drop-shadow(20px 20px 5px #0003)" }}>
        <Youtube src="https://www.youtube.com/embed/K0BWedP-jjY?autoplay=1&loop=1&controls=0&rel=0"/>
    </section>



    <section className="center fade-in" style={{color:"#6e5084"}}>
        <div className="card"  style={{maxWidth:"80%", boxShadow: "0 0 0 10px #fff6"}}>
            <div className="image">
                <img src="/2026-06-24_22.21.08.png" alt="Sample Image" />
            </div>

            <div className="content">
            <h2>A New Way to Play</h2>
              <p>
                <b>The Elderwilds SMP</b> is a cozy, creator-led server built for community connection and that nostalgic Minecraft feeling. Creators join with their communities, all gathering in one shared world hosted and cared for by a dedicated team.
                <br /><br />
                It's a lively, fun, inclusive space where creators and players who've always wanted an SMP can finally settle in, meet new people, and make something wonderful together.
              </p>
            </div>
        </div>
    </section>

    {/*Repeat that^ X times*/}



    {/*Footer*/}
    <section className="center margin-top" style={{backgroundColor:"#fff2", color:"#845080", minHeight:"100px"}}>
        <footer><p>Page by @Grayscaped & @ByCubed7</p></footer>
    </section>
</>);
}
