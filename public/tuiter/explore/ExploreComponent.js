import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return (`

    <div class="form-group">
      <input type="text" class="form-control rounded" placeholder="Search Tuiter" />
    </div>

    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="for-you.html">For you</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sports.html">Sport</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="entertainment.html">Entertainment</a>
        </li>
      </ul>
    </div>

    <div class="card">
      <img class="card-img"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rePLnXyrMCM0I0mS5eCmWQHaE8%26pid%3DApi&f=1&ipt=8169f0984e2d931ec72fb2ad1e484b76c7000c3562da92fe3aed10bcbb68d269&ipo=images">
      <div class="card-img-overlay d-flex flex-column">
        <h2 class="card-title mt-auto text-light">SpaceX's Starship</h2>
      </div>
    </div>

    ${PostSummaryList()}

  `);
}

export default ExploreComponent;
