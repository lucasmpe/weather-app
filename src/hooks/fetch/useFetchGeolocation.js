import { useEffect, useReducer } from "react";
import fetchReducer from "./fetchReducer";

const initialState = { loading: false, data: {}, error: null };

const useFetchGeolocation = (fetchGeolocation) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  
  useEffect(() => {
    const fetch = async () => {
      dispatch({ type: 'LOAD' });
      try {
        const resource = await fetchGeolocation();
        dispatch({ type: 'SUCCESS', payload: resource });
      } catch (error) {
        dispatch({ type: 'FAILURE', payload: error });
      }
    }

    fetch();

  }, [fetchGeolocation]);

  return state;
};

export default useFetchGeolocation;
