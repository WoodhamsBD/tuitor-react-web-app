import React from "react";
import homePosts from './homePosts.json';
import HomeScreenPostItem from "./homescreenPostItem";

const HomeComponent = () =>  {

  return (
    <ul className="list-group">
      {
        homePosts.map(post => <HomeScreenPostItem key={post._id} post={post} />)
      }
    </ul>
  );
};

export default HomeComponent;