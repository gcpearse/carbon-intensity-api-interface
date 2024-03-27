const RegionalIntensity = ({ regionalData }) => {


  const intensity = regionalData.data[0].intensity;


  return (
    <div className="card" id="regional-intensity-card">

      <h3>Carbon Intensity Forecast for {regionalData.shortname}</h3>

      <p className="intensity-reading">
        {intensity.forecast || "-"}
      </p>

      <p className="intensity-text">
        The forecast carbon intensity for {regionalData.shortname} ({regionalData.postcode}) is {intensity.index}.
      </p>

    </div>
  );
};


export default RegionalIntensity;
