import React from 'react'
// import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
    // ReactComponent is a special syntax in React for importing SVG.
import { auth } from '../../firebase/firebase.utils'; 

import CartIcon  from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from "../../redux/cart/cart.selectors.js";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";

import { connect } from 'react-redux';


// import './header.style.scss';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv} from './header.styles';


const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/shop">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink to="/signin">
            SIGN IN
        </OptionLink>
      )}

      <CartIcon/>
    </OptionsContainer>
        {
          hidden ? null : <CartDropdown/>
        }
  </HeaderContainer>
);


//state comes from the root reducer. Need to decompose to only pass in what the component needs.
//crreateStructuredSelector automatically passes our state to reselect. Used when you are fetching multiple slices of state. 
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header); 