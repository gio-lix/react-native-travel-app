import axios from "axios";

export const getPlacesData = async (coordinates, type) => {
  const {lat, lon} = coordinates;
  try {
    const {data: {data}} = await axios.get("https://travel-advisor.p.rapidapi.com/"+ type +"/list-by-latlng", {
      params: {
        latitude: lat,
        longitude: lon,
        limit: "30",
        currency: "USD",
        distance: "2",
        open_now: "false",
        lunit: "km",
        lang: "en_US",
      },
      headers: {
        "X-RapidAPI-Key": "3927eff818msh371833ed6939114p1d1436jsnef221ac992b9",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      }
      });
    return data;
  } catch (err) {
    return null;
  }
};
