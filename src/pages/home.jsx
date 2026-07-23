import "./home.css";

export default function page() {
  return (
    <section>
        <h3>Elderwilds SMP</h3>
        <br/>

        <h1>TITLE</h1>
        <div>scrolling subheader</div>
        <br/>
        <div>join the discord button</div>

        <br/>
        <div>arrow up transition</div>
        <div>image</div>

        <br/>
        <br/>
        <br/>
        <br/>

    <div>image on left</div>
    <div>title right</div>
    <div>descrpition right</div>


      <main style={{ paddingTop: "80px" }}>
        {[...Array(50)].map((_, i) => (
          <p key={i}>Scroll down...</p>
        ))}
      </main>
    </section>

  );
}
