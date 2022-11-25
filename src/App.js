import React from 'react';
import { Link, Route, Routes,useLocation, useNavigate, useParams} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SingInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

const HatsPage = () => {
  // let location = useLocation();
  // let navigate = useNavigate();
  // let params = useParams();
  // console.log("*location*:",location,"\n *navigate*:",navigate,"\n *params*:",params)
return (
  <div>
    <h1>
      HATS PAGE
    </h1>
    <Link to={"/hats/1"}>hats 1</Link>
  </div>
)}

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='shop/' element={<ShopPage />} />
        <Route path='signin/' element={<SingInAndSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
