const RegionalIntensity = ({ regionalData }) => {

  const intensity = regionalData.data[0].intensity;
  
  return (
    <div id="regional-intensity">
      <h3 id="regional-intensity-header">Carbon Intensity Forecast for {regionalData.shortname}</h3>
      <p id="regional-intensity-actual">{intensity.forecast || "-"}</p>
      <p className="regional-intensity-body">The forecast carbon intensity for {regionalData.shortname} ({regionalData.postcode}) is {intensity.index}.</p>
    </div>
  );
};

export default RegionalIntensity;
