export const fetchData = (path) => {
  return fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?${path}`);
};
