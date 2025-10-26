function updateDateTime() {
  const date = new Date();
  
  // using this array to convert month values to month names,10 is October
  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  
  const day = date.getDate();
  const month = monthNames[date.getMonth()];  // Get the month name instead of the number
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  
  const formattedDate = `${day} ${month} ${year}, ${hours}:${minutes}`;
  
  
  document.getElementById('currentDate').textContent = formattedDate;
}

function updateWeather(location) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=-32.9153&longitude=27.3801&current_weather=true`;

  
  fetch(url)
    .then(response => response.json())  // taking tje Json response
    .then(data => {
      // Extract the weather data
      const currentWeather = data.current_weather;
      const temperature = currentWeather.temperature;  
      const weatherDescription = currentWeather.weathercode;  
      const windSpeed = currentWeather.windspeed;
      
      document.getElementById('temperature').textContent = `${temperature}°C`;
      document.getElementById('weatherDescription').textContent = getWeatherDescription(weatherDescription);
      document.getElementById('windSpeed').textContent = `Wind speed: ${windSpeed} km/h`;

      // Set an icon for the weather condition (just a simple example)
      const weatherIcon = getWeatherIcon(weatherDescription);
      document.getElementById('weatherIcon').textContent = weatherIcon;
    })
    .catch(error => console.error('Error fetching weather data:', error));
}

// Function to translate the weather code into a readable description
function getWeatherDescription(code) {
  const descriptions = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Cloudy',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Drizzle',
    55: 'Moderate drizzle',
    61: 'Showers',
    63: 'Heavy showers',
    71: 'Snowfall',
    95: 'Thunderstorm'
  };
  return descriptions[code] || 'Unknown weather';
}

// Function to set a weather icon based on the description
function getWeatherIcon(description) {
  if (description === 'Clear sky') {
    return '🌞';
  } else if (description === 'Cloudy') {
    return '☁️';
  } else if (description === 'Drizzle' || description === 'Showers') {
    return '🌧️';
  } else if (description === 'Snowfall') {
    return '❄️';
  } else if (description === 'Thunderstorm') {
    return '⚡';
  } else {
    return '🌥️'; 
  }
}


window.onload = function() {
  updateWeather();

  updateDateTime(); 
  setInterval(updateDateTime, 1000);
};
function fetchUserWeather(){
  function updateWeather(location) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=-32.9153&longitude=27.3801&current_weather=true`;

  
  fetch(url)
    .then(response => response.json())  // taking tje Json response
    .then(data => {
      // Extract the weather data
      const currentWeather = data.current_weather;
      const temperature = currentWeather.temperature;  
      const weatherDescription = currentWeather.weathercode;  
      const windSpeed = currentWeather.windspeed;
      
      document.getElementById('temperature').textContent = `${temperature}°C`;
      document.getElementById('weatherDescription').textContent = getWeatherDescription(weatherDescription);
      document.getElementById('windSpeed').textContent = `Wind speed: ${windSpeed} km/h`;

      // Set an icon for the weather condition (just a simple example)
      const weatherIcon = getWeatherIcon(weatherDescription);
      document.getElementById('weatherIcon').textContent = weatherIcon;
    })
    .catch(error => console.error('Error fetching weather data:', error));
}
}


