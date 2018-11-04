import React from "react";
import './ProductItem.css'
import {convertDateToRelative,currencyFormatter} from '../../utilities/dateConvertor'
import ShowAdd from "../ShowAdd";

const productItem = ({ product, index, getAddImageUrl }) => {

  return (
      <div className="ProductItem">
        {(index % 20 !== 0 || index ===0) ? (
          <div className="ProductItem--card">
            <div className="ProductItem--card-title">
              <h3 style={{ fontSize: product.size }}>{product.face}</h3>
            </div>
            <span className="ProductItem--card-size">
                Size {product.size}
            </span>
            <span className="ProductItem--card-price">
              {currencyFormatter.format(product.price)}
            </span>
            <p className="ProductItem--card-date">
              Added On: {convertDateToRelative(new Date(product.date))}
            </p>
          </div>
        ) : (
          <div className="ProductItem--image">            
            <ShowAdd getAddImageUrl={getAddImageUrl} />
          </div>
        )}
      </div>
  );
}

export default productItem;
