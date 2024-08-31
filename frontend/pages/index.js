import { useEffect, useState } from 'react';

const Home = () => {
  const [weatherData, setWeatherData] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
  
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`${apiUrl}/weatherforecast`);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [apiUrl]);

  return (
    <div>
      <h1>Weather Forecast</h1>
      <ul>
        {weatherData.map((forecast, index) => (
          <li key={index}>
            Date: {forecast.date}, Temperature: {forecast.temperatureC}°C, Summary: {forecast.summary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
