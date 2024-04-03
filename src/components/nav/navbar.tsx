import { useState, useEffect } from "react";
import { BuyTicket, ReviewButton } from "@/components/button/button";
import Logo from "@/svgs/logo";
import "@/components/nav/navbar.css";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("destacadas");

  useEffect(() => {
    const handleScroll = () => {
      const billboardSection = document.getElementById("billboard");
      if (!billboardSection) return;

      const billboardSectionTop = billboardSection.offsetTop;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= billboardSectionTop) {
        setActiveSection("cartelera");
      } else {
        setActiveSection("destacadas");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav className="menu">
        <div className="menu-container">
          <Logo />
          <ul className="menu-list">
            <li
              className={`menu-element ${
                activeSection === "destacadas" ? "active" : ""
              }`}
            >
              <a href="#top-movies">Destacadas</a>
            </li>
            <li
              className={`menu-element ${
                activeSection === "cartelera" ? "active" : ""
              }`}
            >
              <a href="#billboard">Cartelera</a>
            </li>
            <li className="menu-element">
              <BuyTicket>Comprar ticket</BuyTicket>
            </li>
          </ul>
          <div className="nav-review">
            <ReviewButton href="#review"></ReviewButton>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
