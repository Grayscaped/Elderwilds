import "./banner.css";
import { useEffect, useRef, useState } from "react";

export default function component() {
const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);
    const scrollAmount = 500;


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
      <header className={`header ${visible ? "show" : ""}`}>
        <h1>Elderwilds</h1>


        <nav>
            <ul>
                <li><a href=".sec01">About</a></li>
                <li><a href=".sec03">Donate</a></li>
                <li><a href=".sec03">Creators</a></li>
                <li><a href=".sec02">Events</a></li>
                <li><a href=".sec04">Fanart</a></li>
            </ul>
        </nav>
      </header>
  );
}
