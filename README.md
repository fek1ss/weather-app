Weather Application Documentation

Overview
The Weather Application is a web-based project that allows users to view real-time weather data for a specified location. The app retrieves weather information such as temperature, humidity, wind speed, and weather conditions using the OpenWeather API.


Features
- Search by City: Enter a city name to retrieve weather details.
- Real-Time Weather Data: Displays temperature, humidity, wind speed, and weather conditions.
- Error Handling: Notifies users if an invalid city name is entered.
- Dynamic Weather Icons: Updates icons dynamically based on the weather condition (e.g., sunny, rainy, misty).


Technologies Used
Frontend
- HTML5: For structure and semantic elements.
- CSS3: For styling and responsive design.
- JavaScript: For dynamic content and API integration.
- Font Awesome: For icons representing weather conditions and search functionality.

Backend
- OpenWeather API: For retrieving weather data.

File Structure:
|-- index.html          
|-- style.css           
|-- main.js             


Code Explanation
HTML
- Contains a search box for user input and displays the weather data.
- Includes placeholders for temperature, city name, humidity, and wind speed.
CSS
- Responsive Design: Ensures compatibility across devices.
- Custom Icons: Styles for weather icons using Font Awesome.
JavaScript
- Fetches weather data from the OpenWeather API.
- Displays weather details dynamically based on user input.
- Handles invalid city names with an error message.


Key Functions
checkWeather(city)
Fetches weather data for the provided city and updates the UI.



Weather Application Documentation
Overview
The Weather Application is a web-based project that allows users to view real-time weather data for a specified location. The app retrieves weather information such as temperature, humidity, wind speed, and weather conditions using the OpenWeather API.

Features
Search by City: Enter a city name to retrieve weather details.
Real-Time Weather Data: Displays temperature, humidity, wind speed, and weather conditions.
Error Handling: Notifies users if an invalid city name is entered.
Dynamic Weather Icons: Updates icons dynamically based on the weather condition (e.g., sunny, rainy, misty).
Technologies Used
Frontend
HTML5: For structure and semantic elements.
CSS3: For styling and responsive design.
JavaScript: For dynamic content and API integration.
Font Awesome: For icons representing weather conditions and search functionality.
Google Fonts: For custom typography (Lato font).
Backend
OpenWeather API: For retrieving weather data.
File Structure
less
Копировать код
|-- index.html          // Main HTML file
|-- style.css           // Stylesheet for the application
|-- main.js             // JavaScript file for application logic
Setup Instructions
Clone the Repository:

bash
Копировать код
git clone <repository-url>
cd weather-app
Open the Application: Open index.html in your browser.

Replace API Key: Update the apiKey variable in main.js with your OpenWeather API key:

javascript
Копировать код
const apiKey = 'your_api_key_here';
Code Explanation
HTML
Contains a search box for user input and displays the weather data.
Includes placeholders for temperature, city name, humidity, and wind speed.
CSS
Responsive Design: Ensures compatibility across devices.
Custom Icons: Styles for weather icons using Font Awesome.
JavaScript
Fetches weather data from the OpenWeather API.
Displays weather details dynamically based on user input.
Handles invalid city names with an error message.
Key Functions
checkWeather(city)
Fetches weather data for the provided city and updates the UI.

javascript
Копировать код
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    error.style.display = "block";
    weather.style.display = "none";
    return;
  }
  const data = await response.json();
  // Update weather details
}
Event Listeners
Search Button: Triggers a weather search when clicked.
Enter Key: Allows the user to search by pressing Enter.


Usage Instructions
1. Open the application in a browser.
2. Enter a city name in the search box and click the search icon or press Enter.
3. View the weather details dynamically updated in the interface.
4. If an invalid city name is entered, an error message will appear.


