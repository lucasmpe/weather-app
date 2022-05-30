import React, { createContext } from "react";
import useFetchGeolocation from '../hooks/fetch/useFetchGeolocation';
import ipApi from '../services/geolocation';

export const GeolocationContext = createContext();

export const GeolocationProvider = ({ children }) => {

  const {
    loading: loadingGeo,
    data: dataGeo, 
    error: errorGeo 
  } = useFetchGeolocation(ipApi.getCurrentCity);
 
  return <GeolocationContext.Provider value={{loadingGeo, dataGeo, errorGeo}}>{children}</GeolocationContext.Provider>;
}
