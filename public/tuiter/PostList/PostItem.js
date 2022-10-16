const PostItem = (post) => {
  return(`
    <div class="card m-1">
      <div class="card-header">
        <p class=""><strong>${post.userName}</strong> <i class="fa fa-circle-check"></i> ${post.userHandle} - ${post.time}</p>
        <p>${post.userComment}</p>
      </div>
      <div class="card-body border border-light rounded">
        <img src="${post.image}" class="rounded col-12">
        <p class="fw-bold">${post.postTitle}</p>
        <p>${post.postDescription}</p>
      </div>

      <div class="card-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <i class="fa fa-comment"></i> ${post.postComments}
            </div>
            <div class="col-sm">
              <i class="fa fa-retweet"></i> ${post.postShares}
            </div>
            <div class="col-sm">
              <i class="fa fa-heart"></i> ${post.postLikes}
            </div>
            <div class="col-sm">
              <i class="fa fa-arrow-up-from-bracket"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
}

export default PostItem;