import "./banner.css";
import Discord from "../components/discord.jsx";
import { useEffect, useRef, useState } from "react";

export default function component() {
const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);
    const scrollAmount = 700;


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling down
      if (currentScrollY > lastScrollY.current && currentScrollY > scrollAmount) {
        setVisible(true);
      }

      // Hide when back at the top
      if (currentScrollY <= scrollAmount) {
        setVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <header className={`skranji-bold header ${visible ? "show" : ""}`}>
        {/*<h1>Elderwilds</h1>*/}
        <div style={{display:"flex", alignItems:"center", gap:"40px"}}>
            <img src="./minecraft_title7.png" style={{width:"12em", marginTop:"1em"}}/>
            <Discord style={{width:"150px"}} />
        </div>

        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#creators">Creators</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#fanart">Fanart</a></li>
                <li><a href="#donate">Donate</a></li>
            </ul>
        </nav>
      </header>
  );
}
