import "./home.css";

import Youtube from "../components/youtube.jsx";

export default function page() {
  return (<>
    <div className="background background-image" />

    <div className="background" style={{top:"500px"}}>
        <svg viewBox="0 0 200 200">
          <polygon points="100,0 200,10 200,200 0,200 0,10" fill="#785b8e" stroke="#000000" stroke-width="0" opacity="1" transform="rotate(0, 100, 100)" />
        </svg>
    </div>

    <section>
        <h3>Elderwilds SMP</h3>
    </section>

    <section className="center margin-bottom" style={{marginBottom: "200px"}}>

        <h1 className="title skranji-regular">Your adventure awaits</h1>
        <div  className="subtitle margin-bottom">scrolling subheader build you legacy. write your own story</div>
        <br/>
        <div className="discord debug">Join!</div>
    </section>

    <section className="center">
        <Youtube src="https://www.youtube.com/embed/K0BWedP-jjY?autoplay=1&loop=1&controls=0&rel=0"></Youtube>
    </section>

    <section>
        <div>image on left</div>
        <div>title right</div>
        <div>descrpition right</div>


          <main style={{ paddingTop: "80px" }}>
            {[...Array(50)].map((_, i) => (
              <p key={i}>Scroll down...</p>
            ))}
          </main>
    </section>
</>);
}
