import PostItem from "./PostItem.js";
import post from "./post.js";

const PostItems = () => {
  return (`

          ${
            post.map(post => { 
              return(PostItem(post)); 
                }).join('')
            }

`);
}


export default PostItems;