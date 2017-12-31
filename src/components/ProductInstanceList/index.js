import React from 'react';
import PropTypes from 'prop-types';

import ProductInstance from "./ProductInstance";
import {GridList, GridTile, Subheader} from "material-ui";

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    overflowY: 'auto',
  },
};


const ProductInstanceList = (props) => {
  console.log("ProductInstanceList.js/", "props.productInstances=", props.productInstances);
  let entries = Object.entries(props.productInstances);
  let listItems = entries.map(([key, value], idx) => {
    console.log("ProductInstanceList.js/", "key=", key, "value=", value, "idx=", idx);
    return (<GridTile key={key}>
        <ProductInstance key={key} item={value}/>
      </GridTile>
      );
  });

  return (
    <div style={styles.root}>
      <GridList
        cellHeight={180}
        style={styles.gridList}
      >
        <Subheader>ProductInstances</Subheader>
        {listItems}
      </GridList>
    </div>
  );
};

ProductInstanceList.propTypes = {
  productInstances: PropTypes.object.isRequired,
};

export default ProductInstanceList;
