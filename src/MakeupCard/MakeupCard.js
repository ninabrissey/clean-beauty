import React from 'react';
import PropTypes from 'prop-types';
import alcoholFree from '.././assets/alcohol-free-logo.png';
import crueltyFree from '.././assets/cruelty-free.png';
import ewg from '.././assets/ewg-logo.png';
import oilFree from '.././assets/oil-free-logo.png';
import organic from '.././assets/organic-logo.png';
import vegan from '.././assets/vegan-logo.png';

import './MakeupCard.css';

const MakeupCard = ({ makeup }) => {
  const { id, name, api_featured_image, tag_list } = makeup;

  return (
    <article className="card" id={id}>
      <img className="card-img" src={api_featured_image} alt={name} />
      <h3>{name}</h3>
      {tag_list.includes('Vegan') && (
        <img className="tag-img" src={vegan} alt="vegan logo" />
      )}
      {tag_list.includes('Organic') && (
        <img className="tag-img" src={organic} alt="organic logo" />
      )}
      {tag_list.includes('oil free') && (
        <img className="tag-img" src={oilFree} alt="oil free logo" />
      )}
      {tag_list.includes('EWG Verified') && (
        <img className="tag-img" src={ewg} alt="ewg logo" />
      )}
      {tag_list.includes('cruelty free') && (
        <img className="tag-img" src={crueltyFree} alt="cruelty free logo" />
      )}
      {tag_list.includes('alcohol free') && (
        <img className="tag-img" src={alcoholFree} alt="alcohol free logo" />
      )}
    </article>
  );
};

export default MakeupCard;

MakeupCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string || null,
  api_featured_image: PropTypes.string || null,
  product_colors: PropTypes.array || null,
  tag_list: PropTypes.array || null,
};
