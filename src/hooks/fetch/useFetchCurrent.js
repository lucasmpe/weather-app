import { useReducer, useEffect, useContext } from "react";
import { CacheContext } from "../../context/CacheContext";

const initialState = { loading: false, data: null, error: null };
const STORAGE_TIME = 600000;

const fetchReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOAD':
      return { ...state, loading: true, data: null, error: null };
    case 'SUCCESS':
      return { ...state, loading: false, data: payload, error: null };
    case 'FAILURE':
      return { ...state, loading: false, dat: null, error: payload };
    default:
      return state;
  }
};

const useFetchCurrent = (fetchResource, param) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const cache = useContext(CacheContext);

  useEffect(() => {
    if (!param) return;

    const timenow = new Date().getTime();
    const keyCache = `current-${param}`;

    if (cache.state[keyCache] && (timenow - cache.state[keyCache].timestamp) <= STORAGE_TIME) {
      dispatch({ type: 'SUCCESS', payload: cache.state[keyCache].dataApi });
      return;
    }

    const fetch = async () => {

      dispatch({ type: 'LOAD' });
      try {
        const resource = await fetchResource(param);
        const {
          id: cityId,
          name: city,
          sys: { country },
          dt: time,
          weather,
          main: { temp, humidity },
          wind: { speed },
        } = resource;
        const dataApi = { cityId, city, country, time, weather, temp, humidity, speed }

        dispatch({ type: 'SUCCESS', payload: dataApi });
        
        cache.dispatch({
          type: 'SET_CACHE',
          payload: { key: keyCache, value: { timestamp: new Date().getTime(), dataApi } }
        });

      } catch (error) {
        dispatch({ type: 'FAILURE', payload: error });
      }
    }
    fetch();

  }, [fetchResource, param, cache]);

  return state;
};

export default useFetchCurrent;
