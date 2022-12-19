import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SingInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


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
    this.unSubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
         this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
         },()=>console.log(this.state));
        });
      }

      this.setState({currentUser:userAuth});
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
          <Route path='sign-in/' element={<SingInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
