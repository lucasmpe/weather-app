const fetchReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOAD':
      return { ...state, loading: true, error: null };
    case 'SUCCESS':
      return { ...state, loading: false, data: payload, error: null };
    case 'FAILURE':
      return { ...state, loading: false, dat: null, error: payload };
    default:
      return state;
  }
};

export default fetchReducer;
