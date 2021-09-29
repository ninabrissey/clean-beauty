export const fetchMakeup = (id) => {
  return fetch(
    `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${id}`
  );
};
