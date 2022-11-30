import React from 'react';
import { Link, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SingInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';


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
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubcribeFromAuth = null;

  componentDidMount() {
    this.unSubcribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unSubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='shop/' element={<ShopPage />} />
          <Route path='signin/' element={<SingInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
