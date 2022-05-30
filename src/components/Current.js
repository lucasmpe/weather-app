import React from "react";
import styled from "@emotion/styled";

const WrapperCurrent = styled.div`
  grid-area: Current;
  margin-top: 20px;
  padding: 0px 10px;
  min-height: 300px;
  width: 60%;
  background: #45aaf4; 
  color: #eeeeee;
  font-weight: 400;
  font-size: 1.25rem;
  border: 1px solid #1c1c1c;
  border-radius: 8px;  
  display: felx;
  justify-self: center;
`;

const CurrentTitle = styled.h2`
  margin: 20px ;
  padding: 0px;
  letter-spacing: 1.5px;
`;

const CurrentSubTitle = styled.div`
  padding: 0px 0px;
  margin: 0px 20px;
  font-size: 20px;
  font-weight: 500;
`;

const Img = styled.div`
  display: flex;
  justify-content: center;
`;

const Detail = styled.div`
  margin: 0px 20px;
  color: white;
  font-weight: 300;
  letter-spacing: 1.25px;
  display: flex;
  flex-direction: column;
  font-size: 20px
`;

const Current = ({ city, humidity, speed, temp, time, weather }) => {
  const date = new Date(time * 1000);
  const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <WrapperCurrent>
      <CurrentTitle>{weather[0].description}</CurrentTitle>
      <CurrentSubTitle role='current-location' >
        {city} /<small> {date.toLocaleDateString(undefined, optionsDate)}</small>
      </CurrentSubTitle>
      <Img>
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description}
        />
      </Img>
      <Detail role='detail' >
        <small>temperatura: {temp} °C</small>
        <small>humedad: {humidity}%</small>
        <small>viento: {speed} m/s</small>
      </Detail>
    </WrapperCurrent>
  );
};

export default Current;
