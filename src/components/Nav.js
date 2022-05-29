import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { GeolocationContext } from '../context/GeolocationContext';

const WrapperNav = styled.div`
  grid-area: Nav;
  padding: 10px;
  margin: 0px 50px;
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  margin-top: 10px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  cursor: default;
  &:hover {
      color: #45aaf4;
    }
`;

const CITIES = ['Bragado', 'Chivilcoy', 'Mercedes', 'Suipacha', 'Junin']

const Nav = () => {
  const { dataGeo } = useContext(GeolocationContext);

  return (
    <>
      <WrapperNav>
        {dataGeo && <StyledLink to="/">{dataGeo.city}</StyledLink>}
        
        {CITIES.map((city) =>
          (<StyledLink key={city} to={`city/${city}`}>{city}</StyledLink>)
        )}
      </WrapperNav>
      <Outlet />
    </>
  );
};

export default Nav;
