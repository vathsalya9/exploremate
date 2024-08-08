# ExploreMate

Welcome to ExploreMate – your ultimate travel companion! ExploreMate is a dynamic web application designed to help you discover attractions, hotels, and restaurants around you. Whether you're exploring a new city or looking for hidden gems in your hometown, ExploreMate has you covered with up-to-date information and interactive maps.

🛠️ # Features

Interactive Map: View attractions, hotels, and restaurants on a Google Map. Customize your search based on type and rating.

Search Functionality: Filter places by type (e.g., Restaurants, Hotels, Attractions) and rating.

Place Details: Get comprehensive information about each place including photos, ratings, reviews, and contact details.

Responsive Design: Works seamlessly on both desktop and mobile devices.

🚀 # Getting Started
To get started with ExploreMate, follow these steps:

*Prerequisites*
Node.js and npm installed on your machine.

Installation
Clone the repository:

git clone https://github.com/yourusername/ExploreMate.git
cd ExploreMate

Install dependencies:

npm install
Set up environment variables:

Create a .env file in the root directory and add your Google Maps API key and RapidAPI key:


REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
REACT_APP_RAPIDAPI_KEY=YOUR_RAPIDAPI_KEY

Start the development server:

npm start
Your application should now be running on http://localhost:3000.

💻 # Project Structure
Here's a quick overview of the project's file structure:

src/api/index.js: Contains the function for fetching place data from the API.
src/App.js: Main component that handles the application logic and state.
src/components/Header/Header.jsx: The header component displaying the title and search functionality.
src/components/List/List.jsx: Displays the list of places with filtering options.
src/components/Map/Map.jsx: Renders the Google Map and place markers.
src/components/PlaceDetails/PlaceDetails.jsx: Shows detailed information about each place.
src/components/styles.css: Contains the custom styles for the components.

🛠️ #Technologies Used

React: Front-end framework for building the user interface.
Material-UI: UI library for React, providing components and styles.
Google Maps API: For displaying interactive maps.
RapidAPI: For fetching place data from the travel advisor API.

SCREENSHOTS OF WEBPAGE:

![image](https://github.com/user-attachments/assets/b5c532fb-f5b7-4ab2-aa7e-a42c08f4a5fd)

![image](https://github.com/user-attachments/assets/4ca01e24-bb9f-434c-b595-054fbaef0004)

![image](https://github.com/user-attachments/assets/e070d084-634f-4f66-92d9-cefb90596195)

![image](https://github.com/user-attachments/assets/9d237f51-dbb9-4846-9552-1fd89378fb8d)

![image](https://github.com/user-attachments/assets/cd3bfab1-5fe6-4280-8f85-4899bde7390b)












