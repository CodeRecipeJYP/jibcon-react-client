import React from 'react';
import PropTypes from 'prop-types';


const ProductInstance = (props) => {
  console.log("ProductInstance.js/", "props.item=", props.item);

  return (
    <div>
      <ul>
        <li>Android</li>
        <li>{props.item['uuid']}</li>
        <li>{props.item['token']}</li>
      </ul>
    </div>
  );
};

ProductInstance.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProductInstance;
