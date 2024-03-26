import { useEffect, useState } from "react";
import RegionalIntensity from "./RegionalIntensity";
import RegionalSearch from "./RegionalSearch";
import axios from "axios";


const RegionalData = () => {


  const [regionalData, setRegionalData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [errorStyle, setErrorStyle] = useState("hidden-error");

  const [postcode, setPostcode] = useState("sw1a");


  useEffect(() => {
    axios.get(`https://api.carbonintensity.org.uk/regional/postcode/${postcode}`)
      .then((res) => {
        return res.data;
      })
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
    <section id="regional-data">

      <RegionalSearch errorStyle={errorStyle} setPostcode={setPostcode} />

      <RegionalIntensity regionalData={regionalData} />

    </section>
  );
};


export default RegionalData;
