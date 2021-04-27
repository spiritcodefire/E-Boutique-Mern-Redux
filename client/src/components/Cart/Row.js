import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCart } from "../../lib/state/actions";
import { Link } from "react-router-dom";
const Row = ({ id, name, price, image, quantity }) => {
  
  const dispatch = useDispatch();
  const updateCartAction = (e) => {
    dispatch(updateCart(id,image, e.target.value));
  };
  const removeFromCartAction = (e) => {
    e.preventDefault();
    dispatch(removeFromCart(id));
  };

  return (
    <tr>
      <td>
        <figure className="itemside">
          <div className="aside">
            <img src={image} alt="" className="img-sm"  />
          </div>
          <figcaption className="info">
              {name} 
          </figcaption>
        </figure>
      </td>
      <td>
        <select
          className="form-control"
          value={quantity}
          onChange={updateCartAction}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </td>
      <td>
        <div className="price-wrap">
          <span className="price">{price * quantity} €</span>
        </div>
      </td>
      <td className="text-right">
        {/* <Link
          data-original-title="Save to Wishlist"
          title=""
          to=""
          className="btn btn-light"
          data-toggle="tooltip"
          onClick={() => null}
        >
          
          <i className="fa fa-heart"></i>
        </Link> */}
        <Link
          to=""
          className="btn btn-light btn-round"
          onClick={removeFromCartAction}
        >
          {" "}
          Remove
        </Link>
      </td>
    </tr>
  );
};
export default Row;
