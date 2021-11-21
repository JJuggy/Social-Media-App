import Post from "../post/Post"
import Share from "../share/Share"
import {Posts} from "../../Dummydata";
import "./Feed.css"

const Feed = () => {
    return (
        <div className="feed">
            <Share/>
            {Posts.map((p)=> <Post key={p.id} post={p}/> )}
            
        </div>
    )
}

export default Feed
