import React from 'react'
import { useDispatch } from "react-redux";
import { addToCart } from "../../lib/state/actions";

const ButtonAddCart = ({ id, name, price, image }) => {
    
    const dispatch = useDispatch();
    const addToCartAction = () => dispatch(addToCart({ id, name, price, image }));

    return (
        <div>
            <div className="" >

                {/* <label className="btn btn-warning active">
                <input type="radio" name="options" id="option1" checked />
                <i className="fas fa-heart"></i>
                </label> */}

                
                
                <button type="button" class="mt-4 btn btn-outline-bordeau btn-lg btn-block" onClick={addToCartAction}>AJOUTER AU PANIER</button>
                

            </div>
        </div>
    )
}

export default ButtonAddCart
