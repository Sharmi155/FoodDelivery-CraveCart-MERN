import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import Fooddisplay from '../../Components/Fooddisplay/Fooddisplay';
import AppDownload from '../../Components/AppDownload/AppDownload';
const Home = () => {
  const [Category,setCategory]=useState("All")
  return (
    <div>
      <Header />
      <ExploreMenu category={Category} setCategory={setCategory}/>
      <Fooddisplay category={Category} />
      <AppDownload/>
    </div>
  );
};

export default Home