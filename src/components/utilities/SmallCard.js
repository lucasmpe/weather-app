import React from "react";
import styled from "@emotion/styled";

const WrapperSC = styled.div`
  padding: 16px 2px;
  background: #282828;
  color: #aaaaaa;
  text-align: center;
  border-radius: 8px;

`;

const TitleSC = styled.h4`
   margin: 0em;
`;

const Img = styled.img`
  width:80px;
`;

const DetailSC = styled.p`
  margin: 0em;
`;

const SmallCard = ({ time, icon = '', temp = NaN }) => {
  return (
    <WrapperSC>
      <TitleSC>{new Date(time * 1000).getHours()}:00</TitleSC>
      <Img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={icon} />
      <DetailSC>{temp.toFixed(1)} °C</DetailSC>
    </WrapperSC>
  );
};

export default SmallCard;
