import { useEffect, useState } from "react";
import RegionalIntensity from "./RegionalIntensity";
import RegionalSearch from "./RegionalSearch";
import axios from "axios";
import { getIntensityDataByPostcode } from "../utils/api";


const RegionalData = () => {


  const [regionalData, setRegionalData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [isInputError, setIsInputError] = useState(false);

  const [postcode, setPostcode] = useState("sw1a");


  useEffect(() => {
    getIntensityDataByPostcode(postcode)
      .then(({ data }) => {
        setRegionalData(data[0]);
        setIsInputError(false);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsInputError(true);
        setIsLoading(false);
      });
  }, [postcode]);


  if (isLoading) return <p>Loading data...</p>;


  return (
    <section className="data-section">

      <RegionalSearch isInputError={isInputError} setPostcode={setPostcode} />

      <RegionalIntensity regionalData={regionalData} />

    </section>
  );
};


export default RegionalData;
