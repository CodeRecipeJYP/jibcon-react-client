import React from 'react';
import PropTypes from 'prop-types';

import ProductInstance from "./ProductInstance";


const ProductInstanceList = (props) => {
  console.log("ProductInstanceList.js/", "props.productInstances=", props.productInstances);
  let entries = Object.entries(props.productInstances);
  let listItems = entries.map(([key, value], idx) => {
    console.log("ProductInstanceList.js/", "key=", key, "value=", value, "idx=", idx);
    return (<li key={idx}>
        <ProductInstance item={value}/>
      </li>
      );
  });

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

ProductInstanceList.propTypes = {
  productInstances: PropTypes.object.isRequired,
};

export default ProductInstanceList;
