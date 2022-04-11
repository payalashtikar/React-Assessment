import React,{useState , useEffect} from 'react';
import './Postview.css';
import Post from './InstaClone';
import Header from './Header';
import App from './App';
const Postview=()=> {
  const [posts , setPosts] = useState([]);

  const setPostsAsync = async() =>{
    const response = await fetch("http://localhost:3004/user"),
    data = await response.json();
    setPosts(data);
  }; 
  useEffect(()=>{
    setPostsAsync();
  },[]);

  return (
    <div className="Postview">
      <Header />
      <App/>
      {posts.map((post,index)=>( 
        <Post key={index} config={post}/> 
      ))}   

    </div>
  );
}

export default Postview;



// posts = we are assigning posts as a empty array ---> useState([])
// whatever we pass inside usestate it is assign to the posts 
// setPosts = just upadating the data for posts
//fetching data
//converting data to the json format
//just upadating the data for posts
//calling async function here
//dependency array (we are rendering data here only once thats why it is empty
// otherwise we have to pass here rendering data within array)
//mapping over the object
//key = used for even listener things , we have to pass something to avoid error 
