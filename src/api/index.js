import axios from 'axios';

export const getPlaceData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, 
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'X-RapidAPI-Key': '06ef47f7e6mshe0cd3a43c050c62p1012f0jsn28f21f7c18c1',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      }
    );
    console.log('API Data:', data);
    return data;
  } catch (error) {
    console.log('Error fetching data:', error.message);
    return [];
  }
};
