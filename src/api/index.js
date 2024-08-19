import axios from 'axios';

const sampleRestaurants = [
  {
    name: "Sample Restaurant 1",
    photo: { images: { large: { url: "https://wallpapercave.com/wp/wp1874173.jpg" } } },
    price_level: "$$",
    ranking: "4.5",
    cuisine: [{ name: "Italian" }, { name: "Mexican" }, { name: "Chinese" }],
    address: "123 Restaurant Street, Sample City, SC",
    phone: "+1 (513)-(835)-(5803)",
    web_url: "https://example.com/restaurant1",
    website: "https://example.com/restaurant1",
    latitude: "39.2920466720356",
    longitude: "-76.80827351168915",
    rating: 4.5,
    num_reviews: 120
  },
  {
    name: "Sample Restaurant 2",
    photo: { images: { large: { url: "https://wallpapercave.com/wp/wp1874173.jpg" } } },
    price_level: "$$",
    ranking: "4.5",
    cuisine: [{ name: "Italian" }, { name: "Mexican" }, { name: "Chinese" }],
    address: "123 Restaurant Street, Sample City, SC",
    phone: "+1 (513)-(835)-(5803)",
    web_url: "https://example.com/restaurant1",
    website: "https://example.com/restaurant1",
    latitude: "39.2922466720356",
    longitude: "-76.80807351168915",
    rating: 4.5,
    num_reviews: 120
  },
  // ... Add 19 more sample restaurant objects
];

const sampleHotels = [
  {
    name: "Sample Hotel 1",
    photo: { images: { large: { url: "https://cdn.dubai-marina.com/media/internal_articles_image/3._Premier_Suite.jpg" } } },
    price_level: "$$$",
    ranking: "4.8",
    address: "456 Hotel Lane, Sample City, SC",
    phone: "+1 (123)-(456)-(7890)",
    web_url: "https://example.com/hotel1",
    website: "https://example.com/hotel1",
    latitude: "39.2920466720356",
    longitude: "-76.80827351168915",
    rating: 4.8,
    num_reviews: 200
  },
  {
    name: "Sample Hotel 2",
    photo: { images: { large: { url: "https://cdn.dubai-marina.com/media/internal_articles_image/3._Premier_Suite.jpg" } } },
    price_level: "$$$",
    ranking: "4.8",
    address: "456 Hotel Lane, Sample City, SC",
    phone: "+1 (123)-(456)-(7890)",
    web_url: "https://example.com/hotel1",
    website: "https://example.com/hotel1",
    latitude: "39.2922466720356",
    longitude: "-76.80807351168915",
    rating: 4.8,
    num_reviews: 200
  },
  // ... Add 19 more sample hotel objects
];

const sampleAttractions = [
  {
    name: "Sample Attraction 1",
    photo: { images: { large: { url: "https://blog.raynatours.com/wp-content/uploads/2016/11/Merlion-Park.jpg" } } },
    ranking: "4.7",
    address: "789 Attraction Avenue, Sample City, SC",
    phone: "+1 (987)-(654)-(3210)",
    web_url: "https://example.com/attraction1",
    website: "https://example.com/attraction1",
    latitude: "39.2920466720356",
    longitude: "-76.80827351168915",
    rating: 4.7,
    num_reviews: 150
  },
  {
    name: "Sample Attraction 2",
    photo: { images: { large: { url: "https://blog.raynatours.com/wp-content/uploads/2016/11/Merlion-Park.jpg" } } },
    ranking: "4.7",
    address: "789 Attraction Avenue, Sample City, SC",
    phone: "+1 (987)-(654)-(3210)",
    web_url: "https://example.com/attraction1",
    website: "https://example.com/attraction1",
    latitude: "39.2922466720356",
    longitude: "-76.80807351168915",
    rating: 4.7,
    num_reviews: 150
  },
  // ... Add 19 more sample attraction objects
];

export const getPlaceData = async (type, sw, ne) => {
  // Return sample data based on type
  if (type === 'restaurants') {
    return sampleRestaurants;
  } else if (type === 'hotels') {
    return sampleHotels;
  } else if (type === 'attractions') {
    return sampleAttractions;
  }

  // If using real API, uncomment the below section
  /*
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
  */
};
