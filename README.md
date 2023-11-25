# Weather App

A simple and intuitive weather application built with React JS and Tailwind CSS. Stay updated with current weather conditions and forecasts for your location or any city around the world.

## Features

- **Real-time Weather Data:** Get the latest weather information, including temperature, humidity, wind speed, and more.
- **Search for Cities:** Enter the name of any city to view its current weather and 5-day forecast.
- **Responsive Design:** Enjoy a seamless experience on various devices, from desktops to smartphones.

## Demo

[Live Demo](https://your-live-demo-url.com)

## Screenshots

![Screenshot 1](screenshots/Screenshot1.png)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/amitm13/React-js-weather-app.git
```

2. Navigate to the project directory:

```bash
cd weather-app
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and add your [OpenWeatherMap API key](https://openweathermap.org/api) as follows:

```env
REACT_APP_API_KEY=your-api-key
```

5. Start the development server:

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Configuration

You can customize the following configurations in the `.env` file:

- `REACT_APP_API_URL`: API endpoint for weather data (default: `https://api.openweathermap.org/data/2.5`).
- `REACT_APP_UNITS`: Measurement units for temperature and wind speed (`metric`, `imperial`, or `standard`) (default: `metric`).

## Technologies Used

- React JS
- Tailwind CSS

## API Used

[OpenWeatherMap](https://openweathermap.org/api)

## Contributing

Contributions are welcome! Please follow the [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.