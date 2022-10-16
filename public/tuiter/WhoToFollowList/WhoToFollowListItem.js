const WhoToFollowListItem = (who) => {
  return (`
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <div class="">
        <img src="${who.avatarIcon}" class="img-fluid" style="width: 45px; height: 45px">
      </div>
      <div class="">
        ${who.userName} <i class="fa fa-circle-check"></i>
        <p>@${who.handle}</p>
      </div>
      <div class="ml-auto">
      <a href="follow.html"
         class="btn btn-primary btn-block rounded-pill">
         Follow</a>
      </div>
    </li>
  `);
}

export default WhoToFollowListItem;