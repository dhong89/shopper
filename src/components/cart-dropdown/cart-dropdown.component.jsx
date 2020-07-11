import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from "../../redux/cart/cart.selectors.js";
import { toggleCartHidden } from '../../redux/cart/cart.actions';
 
import './cart-dropdown.style.scss';

const CartDropdown = ({cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            { cartItems.length ? 
                cartItems.map( cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                : 
                <span className='empty-message'> Your cart is empty </span>
            }
            <CustomButton onClick={ () => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }}> 
                GO TO CHECKOUT 
                </CustomButton>
        </div>
    </div>
)


const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
//connect passes the ditpach function to the component if a second arguement is not passed. So we can access the dispatch function through our props rather than using MDTP.