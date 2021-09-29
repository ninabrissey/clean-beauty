export const fetchMakeup = (id) => {
  return fetch(
    `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${id}`
  );
};
