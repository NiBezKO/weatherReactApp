import React from 'react';
import axios from 'axios';
import './scss/main.scss';

function App() {
  const [city, setCity] = React.useState('');
  const [weatherData, setWeatherData] = React.useState(null);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const getData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7340242db9652e40755295b11bdeb316&lang={ru}&units=metric`,
      );
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <div className="wrapper">
        <div className="weather">
          <h1 className="title text-red-400">weather NibeZKO</h1>
          <form className="form" onSubmit={getData}>
            <input type="text" value={city} onChange={handleInputChange} placeholder="Город" />
            <button className="btn" type="submit" disabled={!city}>
              Поиск
            </button>
          </form>
          {weatherData && (
            <div className="info">
              <h2>{weatherData.name}</h2>
              <p>Температура: {weatherData.main.temp}</p>
              <p>Описание: {weatherData.weather[0].description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
  // const [city, setCity] = React.useState('');
  // const [info, setInfo] = React.useState(null);

  // const saerchCity = (event) => {
  //   setCity(event.target.value);
  //   console.log(event.target.value);
  // };

  // React.useEffect(() => {
  //   try {
  //     axios
  //       .get(
  //         `https://api.openweathermap.org/data/2.5/weather?q=Bryansk&appid=7340242db9652e40755295b11bdeb316`,
  //       )
  //       .then((res) => {
  //         setInfo(res.data);
  //         console.log(res.data);
  //       });
  //   } catch (error) {
  //     console.log('ERROR');
  //   }
  // }, [city]);
  // return (
  //   <div className="App bg-red-100">
  //     <div className="wrapper">
  //       <h1 className="title text-red-400">weather NibeZKO</h1>
  //       <div className="weather">
  //         <div className="search__city search-city">
  //           <input type="text" value={city} onChange={saerchCity} />
  //           <svg
  //             className="search-city__svg"
  //             xmlns="http://www.w3.org/2000/svg"
  //             viewBox="0 0 24 24">
  //             <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
  //           </svg>
  //         </div>
  //         {info && (
  //           <div className="info">
  //             <h2>city:{info.name}</h2>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default App;
