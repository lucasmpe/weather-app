import React, { createContext } from "react";
import useFetchGeolocation from '../hooks/fetch/useFetchGeolocation';
import ipApi from '../services/geolocation';

export const GeolocationContext = createContext();

export const GeolocationProvider = ({ children }) => {

  const { data: dataGeo, error: errorGeo } = useFetchGeolocation(ipApi.getCurrentCoord)

  return <GeolocationContext.Provider value={{dataGeo, errorGeo}}>{children}</GeolocationContext.Provider>;
}
