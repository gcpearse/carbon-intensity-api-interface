import { useEffect, useState } from "react";
import { getGenerationData } from "../utils/api";


const NationalGenerationMix = () => {


  const [generationData, setGenerationData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState(false);


  useEffect(() => {
    getGenerationData()
      .then(({ data }) => {
        if (data.hasOwnProperty("error")) {
          setIsError(true);
          setIsLoading(false);
        }
        setGenerationData(data);
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
    <div className="card" id="national-generation-card">

      <h3>Current Generation Mix</h3>

      <div className="table-headers">

        <p>Fuel source</p>

        <p>% of total</p>

      </div>

      <ul id="national-generation-table">
        {generationData.generationmix
          .sort((a, b) => b.perc - a.perc)
          .map((source) => {
            return (
              <li key={source.fuel} className="fuel-source">
                <p>{source.fuel[0].toUpperCase()}{source.fuel.slice(1)}</p>
                <p>{source.perc}</p>
              </li>
            );
          })}
      </ul>

    </div>
  );
};


export default NationalGenerationMix;
