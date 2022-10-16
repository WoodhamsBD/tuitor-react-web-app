const NavigationSidebar = (active) => {
console.log(active);
// Ugliest solution ever? 

switch(active) {
  case 'home':
    return(`
    <div class="list-group">
      <a class="list-group-item" href="/">
        <i class="fab fa-twitter"></i></a>
      <a href="../HomeScreen/index.html" id="home" class="list-group-item list-group-item-action active "><i class="fa fa-home"></i>
        Home</a>
      <a href="../explore/index.html" id="explore" class="list-group-item list-group-item-action"><i class="fa fa-hashtag"></i>
        Explore</a>
      <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-bell"></i>
        Notifications</a>
      <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-envelope"></i>
        Messages</a>
      <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-bookmark"></i>
        Bookmarks</a>
      <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-list"></i>
        Lists</a>
      <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-user"></i>
        Profile</a>
      <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-circle-ellipsis"></i>
        More</a>
    </div>

    <div class="d-grid mt-2">
      <a href="tweet.html"
         class="btn btn-primary btn-block rounded-pill">
         Tweet</a>
    </div>
  `);
  break;

  case 'explore':
    return(`
    <div class="list-group">
      <a class="list-group-item" href="/">
        <i class="fab fa-twitter"></i></a>
      <a href="../HomeScreen/index.html" id="home" class="list-group-item list-group-item-action"><i class="fa fa-home"></i>
        Home</a>
      <a href="../explore/index.html" id="explore" class="list-group-item list-group-item-action active"><i class="fa fa-hashtag"></i>
        Explore</a>
      <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-bell"></i>
        Notifications</a>
      <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-envelope"></i>
        Messages</a>
      <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-bookmark"></i>
        Bookmarks</a>
      <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-list"></i>
        Lists</a>
      <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-user"></i>
        Profile</a>
      <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-circle-ellipsis"></i>
        More</a>
    </div>

    <div class="d-grid mt-2">
      <a href="tweet.html"
         class="btn btn-primary btn-block rounded-pill">
         Tweet</a>
    </div>
  `);
  break;

  default: 
  return(`
  <div class="list-group">
    <a class="list-group-item" href="/">
      <i class="fab fa-twitter"></i></a>
    <a href="../HomeScreen/index.html" id="home" class="list-group-item list-group-item-action"><i class="fa fa-home"></i>
      Home</a>
    <a href="../explore/index.html" id="explore" class="list-group-item list-group-item-action"><i class="fa fa-hashtag"></i>
      Explore</a>
    <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-bell"></i>
      Notifications</a>
    <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-envelope"></i>
      Messages</a>
    <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-bookmark"></i>
      Bookmarks</a>
    <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-list"></i>
      Lists</a>
    <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-user"></i>
      Profile</a>
    <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-circle-ellipsis"></i>
      More</a>
  </div>

  <div class="d-grid mt-2">
    <a href="tweet.html"
       class="btn btn-primary btn-block rounded-pill">
       Tweet</a>
  </div>
`);
}

 }
 export default NavigationSidebar;

