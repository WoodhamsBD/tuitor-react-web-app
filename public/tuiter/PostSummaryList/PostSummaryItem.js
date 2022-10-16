const PostSummaryItem = (post) => {
  return (`

      <div class="card">
        <div class="row card-body">
          <div class="col-sm-10">
            <p class="text-secondary">${post.topic}</p>
            <p class="fw-bold">${post.userName} <i class="fa fa-circle-check"></i> - ${post.time}</p>
            <p class="fw-bold">${post.title}</p>
          </div>
          <img class="col-sm-2" 
            src="${post.image}">
        </div>
      </div>

  `);
}

export default PostSummaryItem;



