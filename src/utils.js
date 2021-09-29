export const cleanMakeup = (fetchedMakeup) => {
  return fetchedMakeup.filter((makeup) => makeup.tag_list.length > 0);
};
