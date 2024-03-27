const Intro = () => {


  return (
    <section className="intro-section">

      <p>
        CarboMonitor makes requests to the Official Carbon Intensity API for Great Britain to bring you up-to-date information about the country's carbon intensity. The API was developed by the National Grid and can be viewed <a href="https://api.carbonintensity.org.uk/" target="_blank">here</a>.
      </p>

      <p>
        Carbon intensity is measured by calculating how many grams of carbon dioxide are released in order to generate one kilowatt hour of electricity. The lower the carbon intensity, the cleaner the energy. Find out more <a href="https://carbonintensity.org.uk/" target="_blank">here</a>.
      </p>

      <p>
        CarboMonitor tracks the current national carbon intensity, as well as a breakdown of the fuel sources currently being used to generate electricity nationwide. You may use the Regional Search box to view the carbon intensity forecast for your region.
      </p>

    </section>
  );
};


export default Intro;
