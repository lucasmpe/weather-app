import { useReducer, useEffect } from "react";
import fetchReducer from "./fetchReducer";

const initialState = { loading: false, data: null, error: null }; // ver!

const useFetchCities = (fetchResource, param) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!param) return;

    const fetch = async () => {

      dispatch({ type: 'LOAD' });
      try {
        const resource = await fetchResource(param);
        dispatch({ type: 'SUCCESS', payload: resource });
        
      } catch (error) {
        console.log(error)
        dispatch({ type: 'FAILURE', payload: error });
      }
    }
    fetch();

  }, [fetchResource, param]);

  return state;
};

export default useFetchCities;