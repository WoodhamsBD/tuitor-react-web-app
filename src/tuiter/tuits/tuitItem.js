import React from "react";
import { deleteTuitThunk } from "../../services/tuits-thunks";
import { useDispatch, useSelector } from "react-redux";


const TuitItem = (
  {
    tuit ={
      "_id": 27498,
      "topic": "Space",
      "userName": "SpaceX",
      "time": "2h",
      "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
      "image": "spacex.png",
      "liked": true,
      "replies": 123,
      "retuits": 432,
      "likes": 2345,
      "handle": "@spacex",
      "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
  }
  }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id))
  }
  // console.log(tuit);
  return (
    <div className="card m-1">
      <div className="card-header white">
        <p className=""><strong>{tuit.userName}</strong> <i className="fa fa-circle-check"> </i> {tuit.handle} - {tuit.time}</p>
        <p>{tuit.userComment}</p>
      </div>
      {/* <div className="card-body border border-light rounded"> */}
      <div>
        {/* eslint-disable-next-line */}
        {/* <img src={`/images/${tuit.image}`} className="rounded col-12" /> */}
        <p className="fw-bold">{tuit.Title}</p>
        <p>{tuit.tuit}</p>
      </div>

      <div className="card-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <i className="fa fa-comment"></i> {tuit.replies}
            </div>
            <div className="col-sm">
              <i className="fa fa-retweet"></i> {tuit.retuits}
            </div>
            <div className="col-sm">
              <i className="fa fa-heart"></i> {tuit.likes}
            </div>
            <div className="col-sm">
              <i className="fa fa-arrow-up-from-bracket"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitItem;