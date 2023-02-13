import React from 'react';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SingInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { selectCurrentUser } from './redux/user/user.selector';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';

const HatsPage = () => {
  return (
    <div>
      <h1>
        HATS PAGE
      </h1>
      <Link to={"/hats/1"}>hats 1</Link>
    </div>
  )
}

class App extends React.Component {
  unSubcribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        }, () => console.log(this.state));
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='shop/' element={<ShopPage />} />
          {/* <Route path='sign-in/' element={<SingInAndSignUpPage />} /> */}

          <Route path='sign-in/' exact element={this.props.currentUser ? (<Navigate  to='/'/>) : (<SingInAndSignUpPage />)} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);