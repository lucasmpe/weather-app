import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchCurrent from '../hooks/fetch/useFetchCurrent';
import useFetchForecast from '../hooks/fetch/useFetchForecast';
import weatherApi from '../services/weather';
import Current from './Current';
import Forecast from './Forecast';
import Loading from './utilities/Loading';
import styled from '@emotion/styled';

const MessageError = styled.h4`
  color: white;
  align-self: center;
  text-align: center;
  font-weight: 200;
  letter-spacing: 1.25px;
  font-size: xxx-large;
`;

const WeatherPanel = () => {
  const param = useParams();
  
  const { 
    loading: loadingCurrent, 
    data: dataCurrent, 
    error: errorCurrent 
  } = useFetchCurrent(weatherApi.getCurrentWeather, param.id);
  
  const { 
    loading: loadingForecast, 
    data: dataForecast, 
    error: errorForecast 
  } = useFetchForecast(weatherApi.getWeatherForecast, param.id);

  return (
    <>
      {(loadingCurrent || loadingForecast) && <Loading />}
      {dataCurrent && <Current {...dataCurrent} />}
      {dataForecast && <Forecast {...dataForecast} />}
      {(errorCurrent || errorForecast) && <MessageError>No city data</MessageError>}
    </>
  );
}

export default WeatherPanel;
