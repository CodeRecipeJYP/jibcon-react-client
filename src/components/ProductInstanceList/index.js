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
  let entries = props.productInstances && Object.entries(props.productInstances);
  // console.log(entries.length);
  // console.log("entries && !entries.length=", entries && !entries.length);
  // console.log("!entries=", !entries);
  // console.log("entries=", entries);

  return (
    <div style={styles.root}>
      { !(entries && entries.length) ? null : (
        <GridList
          cellHeight={180}
          style={styles.gridList}
        >
          <Subheader>ProductInstances</Subheader>
          { entries.map(([key, value], idx) => {
            console.log("ProductInstanceList.js/", "key=", key, "value=", value, "idx=", idx);
            return (<GridTile key={key}>
            <ProductInstance id={key} item={value}/>
            </GridTile>
            );
          })}
        </GridList>
      )}
    </div>
  );
};

ProductInstanceList.propTypes = {
  productInstances: PropTypes.object.isRequired,
};

export default ProductInstanceList;
