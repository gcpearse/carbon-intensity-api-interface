import { useEffect, useState } from "react";
import { getIntensityData } from "../utils/api";
import lengthenDate from "../utils/maths-functions";


const NationalIntensity = () => {


  const timeRegex = /\d{2}:\d{2}/;

  const yearRegex = /\d{4}-\d{2}-\d{2}/;


  const [intensityData, setIntensityData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState(false);


  useEffect(() => {
    getIntensityData()
      .then(({ data }) => {
        setIntensityData(data[0]);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);


  if (isLoading) return <p>Loading data...</p>;

  if (isError) return <p>Oops! Something went wrong...</p>;


  return (
    <div className="card" id="national-intensity-card">

      <h3>Current Carbon Intensity</h3>

      <p className="intensity-reading">
        {intensityData.intensity.actual || "-"}
      </p>

      <p className="intensity-text" style={{ marginBottom: "0.4rem" }}>
        Carbon intensity in Great Britain is currently {intensityData.intensity.index}. The forecast carbon intensity for today is {intensityData.intensity.forecast} gCO<sub>2</sub>/kWh.
      </p>

      <p className="intensity-text">
        The current reading is for the period {intensityData.from.match(timeRegex)} - {intensityData.to.match(timeRegex)} on {lengthenDate(intensityData.from.match(yearRegex)[0])}.
      </p>

    </div>
  );
};


export default NationalIntensity;
