const Footer = () => {
  return (
    <footer>
      <ul id="useful-links"><span id="useful-links-header">Useful links</span>
        <li id="first-link"><a href="https://www.nationalgrid.com/uk" target="_blank">National Grid</a></li>
        <li><a href="https://www.nationalgrideso.com/" target="_blank">National Grid ESO</a></li>
        <li><a href="https://api.carbonintensity.org.uk/" target="_blank">Carbon Intensity API</a></li>
      </ul>
      <button id="scroll-up-button" onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}>Back to top</button>
    </footer>
  );
};

export default Footer;
