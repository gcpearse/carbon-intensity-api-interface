import axios from "axios";

const api = axios.create({ baseURL: "https://api.carbonintensity.org.uk" });

const getIntensityData = async () => {
  try {
    const res = await api.get("/intensity");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const getGenerationData = async () => {
  try {
    const res = await api.get("/generation");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export { getIntensityData, getGenerationData };
