import React from 'react';
import alcoholFree from '.././assets/alcohol-free-logo.png';
import crueltyFree from '.././assets/cruelty-free.png';
import ewg from '.././assets/ewg-logo.png';
import oilFree from '.././assets/oil-free-logo.png';
import organic from '.././assets/organic-logo.png';
import vegan from '.././assets/vegan-logo.png';

import './MakeupCard.css';

const MakeupCard = ({ makeup }) => {
  const {
    brand,
    name,
    price,
    image_link,
    description,
    product_colors,
    tag_list,
  } = makeup;

  let productColorDisplays = product_colors.map((color) => {
    return (
      <div
        style={{
          background: color.hex_value,
          borderRadius: '50%',
          height: '15px',
          width: '15px',
          margin: '1px',
        }}
        name={color.colour_name}
      ></div>
    );
  });

  return (
    <article className="card">
      <img className="card-img" src={image_link} alt={name} />
      <h3>{name}</h3>
      {/* <p>${price}</p> */}
      {/* <p>{description}</p> */}
      {/* <div className="colors">{productColorDisplays}</div> */}
      {tag_list.includes('Vegan') && <img className="tag-img" src={vegan} />}
      {tag_list.includes('Organic') && (
        <img className="tag-img" src={organic} />
      )}
      {tag_list.includes('oil free') && (
        <img className="tag-img" src={oilFree} />
      )}
      {tag_list.includes('EWG Verified') && (
        <img className="tag-img" src={ewg} />
      )}
      {tag_list.includes('cruelty free') && (
        <img className="tag-img" src={crueltyFree} />
      )}
      {tag_list.includes('alcohol free') && (
        <img className="tag-img" src={alcoholFree} />
      )}
    </article>
  );
};

export default MakeupCard;
