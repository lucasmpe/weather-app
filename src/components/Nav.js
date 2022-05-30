import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { GeolocationContext } from '../context/GeolocationContext';
import Loading from './utilities/Loading'
import weatherApi from '../services/weather';
import useFetchCities from '../hooks/fetch/useFetchCities'

const WrapperNav = styled.div`
  grid-area: Nav;
  padding: 10px;
  margin: 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  display-wrap: wrap;
`;

const StyledLink = styled(Link)`
  margin: 50px;
  margin-top: 100px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  cursor: default;
  &:hover {
      color: #45aaf4;
    }
  letter-spacing: 1.25px;
  font-size: x-large;
`;

const MessageError = styled.h4`
  color: white;
`;

const Nav = () => {
  const { loadingGeo, dataGeo, errorGeo } = useContext(GeolocationContext);
  const { loadong: loadingCities, data: dataCities, error: errorCities } = useFetchCities(weatherApi.getCities, dataGeo.regionName)

  return (
    <>
      {(loadingGeo || loadingCities) && <Loading />}
      {dataCities && <>
        <WrapperNav>
          {dataCities.map((city) =>
            (<StyledLink key={city.lat} to={`city/${city.name}`}>{city.name}</StyledLink>)
          )}
        </WrapperNav>
        <Outlet />
      </>
      }
      {errorGeo && <MessageError>{errorGeo.status}</MessageError>}
      {errorCities && <MessageError>{errorCities.message}</MessageError>}
    </>
  );
};

export default Nav;
