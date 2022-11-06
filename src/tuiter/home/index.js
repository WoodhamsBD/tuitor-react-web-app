import React from "react";
// import homePosts from './homePosts.json';
// import HomeScreenPostItem from "./homescreenPostItem";

import TuitList from "../tuits/tuitsList";
import WhatsHappening from "./whats-happening.js";

const HomeComponent = () =>  {

  return (
    <>
      <h4>Home</h4>
      <WhatsHappening/> 
      <TuitList/>
    </>
  );
};

export default HomeComponent;