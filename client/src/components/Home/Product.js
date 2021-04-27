import React from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addToCart } from "../../lib/state/actions";

const Product = ({ id, name, price, category, image }) => {
  
  const dispatch = useDispatch();
  const addToCartAction = () => dispatch(addToCart({ id, name, price }));

  return (
    <div className="col-sm-12 col-md-4">
      <div className="card card-product-grid">

        <Link to={"/ProductScreen/" + id} className="img-wrap">
          <img src={image} alt="" />
        </Link>
        
        <figcaption className="info-wrap">
          
          <div>
              {category}
                {" "}
              {name}
          </div>

          <div className="price h5 mt-2">
            {price}€
          </div>

          <div className="btn-group btn-group-toggle float-right" data-toggle="buttons">

            <label className="btn btn-danger">
              <input onClick={addToCartAction} type="radio" name="options" id="option3" />
              <i className="fas fa-shopping-cart"></i>
            </label>

          </div>
          
        </figcaption>
      </div>
    </div>
  );
};
export default Product;
