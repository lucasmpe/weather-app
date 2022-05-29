import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from '@emotion/styled';
import Nav from './Nav';
import WeatherPanel from './WeatherPanel';
import NoMatch from './NoMatch';
import { CacheProvider } from '../context/CacheContext';
import { GeolocationProvider } from '../context/GeolocationContext';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  grid-template-rows: auto minmax(300px, auto) auto auto;
  grid-template-areas: "Nav" "Current" "Control" "Forecast";
`;

function App() {
  return (
    <Wrapper>
      <CacheProvider>
        <GeolocationProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Nav />}>
                <Route index element={<WeatherPanel />} />
                <Route path="city/:id" element={<WeatherPanel />} />
                <Route path="*" element={<NoMatch />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </GeolocationProvider>
      </CacheProvider>
    </Wrapper>
  );
}

export default App;
