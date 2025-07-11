import React, { useContext, useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {assets} from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] =useState("home")
    const navigate = useNavigate();
    const {getTotalCartAmount,token,setToken}=useContext(StoreContext)

    const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }
  return (
    <div className='navbar'>
       <Link to='/'> <img src={assets.logo} alt=" " className='logo'/></Link>
        <ul className='navbar-menu'>
            <Link to='/' className={menu==="home"?"active":""} onClick={()=>setMenu("home")}>home</Link>
            <a href="#exploremenu" className={menu==="menu"?"active":""} onClick={()=>setMenu("menu")}>menu</a>
            <a href="#app-download" className={menu==="mobile-app"?"active":""} onClick={()=>setMenu("mobile-app")}>mobile-app</a>
            <a href="#footer" className={menu==="contact-us"?"active":""} onClick={()=>setMenu("contact-us")}>contact us</a>
        </ul>
     <div className='navbar-right'>
        <div className='navbar-basket-icon'>
            <Link to='/cart'><img src={assets.basket_icon} alt=""/></Link>

            <div className={getTotalCartAmount()===0?" ":'dot'}></div>
        </div>
        {!token? <button onClick={()=>setShowLogin(true)}>sign in</button>:<div className='navbar-profile'>
              <img src={assets.profile_icon} alt="" />
              <ul className="nav-profile-dropdown">
                <li onClick={()=>navigate('/myorders')}><img className='gold-icon' src={assets.bag_icon} alt="" /><p>Orders</p></li>
                <hr />
                <li onClick={logout}><img  className='gold-icon'src={assets.logout_icon} alt="" /><p>Logout</p></li>
              </ul>
          </div>}
       
      </div>
    </div>
  )
}

export default Navbar