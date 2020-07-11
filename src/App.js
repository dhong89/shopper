import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './components/checkout/checkout.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors.js";

import './App.css';

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount(){ //onAUthStateChanged allows current user to persist given by firebase. 

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // createUserProfileDocument(user);
      // this.setState({currentUser: user})
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot( snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          })
        })
      }
      setCurrentUser( userAuth)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render () {
    return (
      <div>
        <Header/>

        <Switch> 
          < Route exact path='/' component={ HomePage } />
          < Route path='/shop' component={ ShopPage } />
          < Route exact path='/signin' render={() => this.props.currentUser ? ( <Redirect to='/'/>) : ( <SignInAndSignUpPage/>)} />  
          < Route exact path='/checkout' component={ CheckoutPage } />  
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App); 
