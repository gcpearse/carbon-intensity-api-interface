import { useState } from "react";


const Footer = () => {


  const [isVisible, setIsVisible] = useState(false);


  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });


  return (
    <footer>
      <ul id="useful-links">

        <span>
          Useful links
        </span>

        <li style={{marginTop: "0.4rem"}}>
          <a href="https://www.nationalgrid.com/uk" target="_blank">
            National Grid
          </a>
        </li>

        <li>
          <a href="https://www.nationalgrideso.com/" target="_blank">
            National Grid ESO
          </a>
        </li>

        <li>
          <a href="https://api.carbonintensity.org.uk/" target="_blank">
            Carbon Intensity API
          </a>
        </li>

      </ul>

      <button
        className={isVisible ? (
          "scroll-up-button visible-button"
        ) : (
          "scroll-up-button"
        )}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}>
        Back to top
      </button>

    </footer>
  );
};


export default Footer;
