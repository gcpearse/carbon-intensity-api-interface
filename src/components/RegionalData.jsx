import { useEffect, useState } from "react";
import RegionalIntensity from "./RegionalIntensity";
import RegionalSearch from "./RegionalSearch";
import axios from "axios";
import { getIntensityDataByPostcode } from "../utils/api";


const RegionalData = () => {


  const [regionalData, setRegionalData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [errorStyle, setErrorStyle] = useState("hidden-error");

  const [postcode, setPostcode] = useState("sw1a");


  useEffect(() => {
    getIntensityDataByPostcode(postcode)
      .then(({ data }) => {
        setRegionalData(data[0]);
        setErrorStyle("hidden-error");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setErrorStyle("displayed-error");
        setIsLoading(false);
      });
  }, [postcode]);


  if (isLoading) return <p>Loading data...</p>;


  return (
    <section className="data-section">

      <RegionalSearch errorStyle={errorStyle} setPostcode={setPostcode} />

      <RegionalIntensity regionalData={regionalData} />

    </section>
  );
};


export default RegionalData;
