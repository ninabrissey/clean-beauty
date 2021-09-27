import React from 'react';
import './MakeupCard.css';

const MakeupCard = ({ makeup }) => {
  const { brand, name, price, image_link, description, product_colors } =
    makeup;

  let productColorDisplays;
  if (product_colors.length > 0) {
    productColorDisplays = product_colors.map((color) => {
      return (
        <div
          style={{
            background: color.hex_value,
            borderRadius: '50%',
            height: '20',
            width: '20',
          }}
          name={color.colour_name}
        ></div>
      );
    });
  }
  return (
    <article>
      <img src={image_link} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <p>{description}</p>
      <div>{productColorDisplays}</div>
    </article>
  );
};

export default MakeupCard;
