import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import './index.css';

import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import ProductsScreen from './Screens/ProductsScreen';
import {Link} from 'react-router-dom'
import CartScreen from './Screens/CartScreen';
import SigninScreen from './Screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './Screens/RegisterScreen';


function App() {
    const userSignin=useSelector(state=>state.userSignin);
    const {userInfo}=userSignin;

  const openMenu=()=>{
    document.querySelector(".sidebar").classList.add("open");
    }
    const closeMenu=()=>{
      document.querySelector(".sidebar").classList.remove("open");
      }
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
        <div className="brand">
            <button className="brand-button" onClick={openMenu}>
                &#9776;
            </button>
            <Link to="/">Shopping</Link>
        </div>
        <div className="header-links">
            <Link to="/cart">Cart</Link>
            {
                userInfo ? <Link to="/profile">{userInfo.name}</Link>:
                <Link to="/signin">Sign In</Link>
            }
            
        </div>
    </header>
    <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
            <li>
                <a href="index.html">Pants</a>
             </li>
             <li>
                <a href="index.html">Shirts</a>
             </li>
        </ul>
    </aside>
    <main className="main">
        <div className="content">
        <Route path="/products" exact={true} component={ProductsScreen} />
        <Route path="/signin" component={SigninScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/products/:id" exact={true} component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/" exact={true} component={HomeScreen} />
        


        
    </div>
    
    </main>
    <footer className="footer">
        All rights reserved
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
