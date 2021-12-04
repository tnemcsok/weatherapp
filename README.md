# React Weather

<img width="584" alt="screenshot" src="https://user-images.githubusercontent.com/66177285/144704373-4866cd88-2c0d-4a28-a8be-8221441d35ab.png">

Weather App built with React.
[Deployed](https://weatherapp-azure.vercel.app/)

## Tech Stack

**React, Typescript, Redux, StyledComponents**

## Features

- **Weather forecast for any city or place**
- **Extended 7 days forecast**
- **Find user location weather by utilizing GeolocationAPI**
- **One-click Celcius to Fahrenheit conversion and vice versa**
- **Dark Mode**

## Getting Started

First you need an API key from OpenWeatherMap, you can get one by creating an account on their website.
After you got your API key, create a **.env** file at root directory of project, copy the line below to the file and replace YOUR_KEY with your OpenWeatherMap API Key.

```
REACT_APP_WEATHER_API_KEY=YOUR_KEY
```

Finally clone this repository, install dependencies and run the local server

```bash
git clone https://github.com/tnemcsok/weatherapp.git
```

```bash
cd weatherapp
npm install
npm start
```

## Credits

[OpenWeatherMap](https://openweathermap.org/ "OpenWeatherMap") (Weather data API)

[Algolia Places](https://community.algolia.com/places/ "Algolia Places") (Place suggestion API)

[Icons8.com](https://www.icons8.com "Icons8.com") (Weather icons)
