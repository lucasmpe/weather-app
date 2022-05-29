import React, { useState } from "react";
import styled from "@emotion/styled";
import useForecastDays from "../hooks/useForecastDays";
import useSmallCardList from "../hooks/useSmallCardList";
import SmallCard from "./utilities/SmallCard";

const WrapperControls = styled.div`
  grid-area: Control;
  display: flex;
  text-align: center;
  justify-self: center;
`;

const Control = styled.a`
  margin: 0px 5px;
  padding: 10px 0px;
  width: 80px;
  background: ${props => props.active ? '#6a6a6a' : '#282828'};
  color: #eeeeee;
  tex-align: center;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  cursor: default;
  :hover {
    background-color: #1c1c1c;
  }
`;

const WrapperSmallCardList = styled.div`
  grid-area: Forecast;
  padding: 20px;
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-self: center;
  justify-content: space-evenly;
`;

const Forecast = ({ list }) => {
  const DATE = new Date();
  const daysOfCurrentMonth = new Date(DATE.getFullYear(), DATE.getMonth() + 1, 0).getDate();
  const [day, setDay] = useState(DATE.getDate());
  const listToShow = useSmallCardList(list, day);
  const forecastDays = useForecastDays(DATE);

  const handleClick = (index) => {
    const calculatedDay = DATE.getDate() + index;

    if (calculatedDay > daysOfCurrentMonth) {
      setDay(calculatedDay - daysOfCurrentMonth);
    } else {
      setDay(calculatedDay);
    }
  };
  
  return (
    <>
      <WrapperControls>
        {forecastDays.map((forecastDay, index) => (
          <Control
            role="control"
            key={forecastDay}
            onClick={() => handleClick(index)}
            active= {(DATE.getDate() + index) === day ? true : false}
          >{forecastDay}
          </Control>
        ))}
      </WrapperControls>

      <WrapperSmallCardList>
        {listToShow.map(({ dt, weather, main }) => (
          <SmallCard
            key={dt}
            time={dt}
            icon={weather[0].icon}
            temp={main.temp}
          />
        ))}
      </WrapperSmallCardList>
    </>
  );
}

export default Forecast;
