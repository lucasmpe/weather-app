import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GeolocationContext } from '../context/GeolocationContext';
import useFetchCurrent from '../hooks/fetch/useFetchCurrent';
import useFetchForecast from '../hooks/fetch/useFetchForecast';
import weatherApi from '../services/weather';
import Current from './Current';
import Forecast from './Forecast';
import Loading from './utilities/Loading';

const WeatherPanel = () => {
  const [city, setCity] = useState('')
  const { dataGeo } = useContext(GeolocationContext)
  const { id } = useParams();

  useEffect(() => {
    setCity(id || dataGeo.city)
  }, [id, dataGeo.city])

  const { 
    loading: loadingCurrent, 
    data: dataCurrent, 
    error: errorCurrent 
  } = useFetchCurrent(weatherApi.getCurrentWeather, city);
  
  const { 
    loading: loadingForecast, 
    data: dataForecast, 
    error: errorForecast 
  } = useFetchForecast(weatherApi.getWeatherForecast, city);

  return (
    <>
      {loadingCurrent && <Loading />}
      {dataCurrent && <Current {...dataCurrent} />}

      {loadingForecast && <Loading />}
      {dataForecast && <Forecast {...dataForecast} />}

      {(errorCurrent || errorForecast) && <div role='error' >Something went wrong</div>}
    </>
  );
}

export default WeatherPanel;
