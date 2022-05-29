const TOTAL_ITEMS = 8;

const useSmallCardList = (list, day) => {
  const itemListCurrentDay = list.filter(({ dt }) => new Date(dt * 1000).getDate() === day);
  const countCurrentDay = itemListCurrentDay.length;

  if (countCurrentDay === TOTAL_ITEMS) return itemListCurrentDay;

  const itemListNextDay = list.filter(({ dt }) => new Date(dt * 1000).getDate() === (day + 1));

  return itemListNextDay.length === 0 
    ? itemListCurrentDay 
    : itemListCurrentDay.concat(itemListNextDay.slice(0, (TOTAL_ITEMS - countCurrentDay)));
};

export default useSmallCardList;
