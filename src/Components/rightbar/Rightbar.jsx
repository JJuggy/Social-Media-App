import "./Rightbar.css"
import {Posts} from "../../Dummydata"
import Online from "../onliine/Online"
const Rightbar = () => {
    return (
        <div className="rightbar">
           <div className="rightbarwrapper">
               <div className="birthdaycontainer">
                   <img  className="birthdayimage" src="images/Birthday.png" alt="" />
                   <span className="birthdaytext"><b>Pola Foster</b> and <b>3 other friends</b> have a birthday today</span>
               </div>
               <img src="images/sneaekers.jpeg" alt="" className="rightbarad" />
           </div>
           <h4 className="rightbartitle">Online Friends</h4>
           <ul className="rightbarfriendlist">
              {Posts.map((post)=> <Online key={post.id} post={post}/>)}
           </ul>
        </div>
    )
}

export default Rightbar
