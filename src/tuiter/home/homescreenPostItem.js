import React from "react";

const HomeScreenPostItem = (
  {
    post ={
    "_id": 789,
    "userName": "Elon Musk",
    "userHandle": "@elonmusk",
    "userComment": "Amazing show about @inspiration4x mission!",
    "time": "23h",
    "image": "inspriation.jpeg",
    "postTitle": "Countdown: Inspriation4 Mission to Space | Netflix Official Site",
    "postDescription": "From training to launch to landing, this all-access docusersies rides along with the Inspriation4 rew on the first all-civilian orbital space flight.",
    "postComments": "4.2k",
    "postShares": "3.5k",
    "postLikes": "37.5k"
    }
  }
) => {
  console.log(post);
  return (
    <div className="card m-1">
      <div className="card-header">
        <p className=""><strong>{post.userName}</strong> <i className="fa fa-circle-check"></i> {post.userHandle} - {post.time}</p>
        <p>{post.userComment}</p>
      </div>
      <div className="card-body border border-light rounded">
        {/* eslint-disable-next-line */}
        <img src={`/images/${post.image}`} className="rounded col-12" />
        <p className="fw-bold">{post.postTitle}</p>
        <p>{post.postDescription}</p>
      </div>

      <div className="card-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <i className="fa fa-comment"></i> {post.postComments}
            </div>
            <div className="col-sm">
              <i className="fa fa-retweet"></i> {post.postShares}
            </div>
            <div className="col-sm">
              <i className="fa fa-heart"></i> {post.postLikes}
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

export default HomeScreenPostItem;