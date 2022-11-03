import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Pag from './Pag'
import useEffect from 'react';
import axios from 'axios';


function Junior() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [CurrentPage, setCurrentPage] = useState(1)
  const [PostPerPage] = useState(6)
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        'https://randomuser.me/api/?page=1&results=50'
      );
      setPosts(res.data.results);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  if (loading && posts.length === 0) {
    return <h1> <div id='spinner' class="container">
                    <div class="loading"></div>
                  </div> 
            </h1>;
  }
  const indexOfLastPost = CurrentPage * PostPerPage
  const indexOfFirstPost = indexOfLastPost - PostPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const howManyPages = Math.ceil(posts.length/PostPerPage)
  // const currentPosts = posts.slice();
  return ( <div>
     <div className="contacts">
      {currentPosts.map(user_data=>
         <div className="contact-card">
         <img
           src={user_data.picture.medium}
           className="User-photo"
           alt="Userphoto"
         />
         <div className="info-group">
           <h3>
             {`Full name: ${user_data.name.first}   ${user_data.name.last}`}
           </h3>
           <p>{`Phone: ${user_data.phone}`}</p>
           <p>{`Age: ${user_data.dob.age}`}</p>
         </div>
       </div>
       )}
        
    </div>
    <Pag pages={howManyPages}  setCurrentPage={setCurrentPage}  />
  </div>
   
  );
}

export default Junior;
