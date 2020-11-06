// Import necessary modules and components
import React from 'react';
import Navbar from "./components/CFOD/Navbar"
import Banner from "./components/CFOD/Banner"
import Details from "./components/CFOD/Details"
import Welcome from "./components/CFOD/Welcome"
import About from "./components/CFOD/About"
import {data} from './components/CFOD/StaticData'
import './App.css'


function App() {
  return (

    /* All the components that make up the app are rendered here. The data imported from the Static Data file is passed
    down to the "Banner" component as a prop 'data'. Note that the "Details" component is rendered inside other div 
    component.*/

    <div className="app">
      <Navbar />
      <Banner data = {data} />
      <Welcome />
      <div className="multi_cards">
          <Details data = {data} />
      </div>
      <About />
     
    </div>
  );
}

export default App;
