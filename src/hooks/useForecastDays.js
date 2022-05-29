const useForecastDays = (date) => {
  const DAYS = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
  const first = DAYS.slice(date.getDay());
  const second = DAYS.slice(0, date.getDay());
  
  return first.concat(second).slice(0, 6);
};

export default useForecastDays;
