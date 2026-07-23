import "./banner.css";
import { useEffect, useRef, useState } from "react";

export default function component() {
const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling down
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setVisible(true);
      }

      // Hide when back at the top
      if (currentScrollY <= 50) {
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
                <li><a href=".sec01">Section 01</a></li>
                <li><a href=".sec02">Section 02</a></li>
                <li><a href=".sec03">Section 03</a></li>
                <li><a href=".sec04">Section 04</a></li>
            </ul>
        </nav>
      </header>
  );
}
