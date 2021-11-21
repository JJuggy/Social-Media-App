import "./Post.css"
import {MoreVert} from "@mui/icons-material"
import {useState} from 'react'
const Post = ({post}) => {





    const [like, setlike]= useState(post.like)
    const [isliked, setisliked]= useState(false)

    const handlelike = ()=>{
        console.log("i was clicked")
        setlike(isliked ? like - 1 : like +  1)
        setisliked(!isliked)
    }
   
    return (
        <div className="post">
            <div className="postwrapper">
                <div className="posttop">
                    <div className="posttopleft">
                        <img src="images/background-home-desktop.jpg" alt="" className="postprofileimg" /> 
                        <div className="postusername">{post.username}</div>
                        <span className="postdate">{post.date}</span>
                    </div>
                    <div className="posttopright">
                      <MoreVert/>
                    </div>
                </div>
                <div className="postcenter">
                    <span className="posttext">{post.desc} </span>
                    <img src={post.picture} alt="" className="postimg" /> 
                </div>
                <div className="postbottom">
                    <div className="postbottomleft">
                        <img src="images/like.png" alt="" className="likeicon" onClick={handlelike}  />
                        <img src="images/love.png" alt="" className="loveicon" onClick={handlelike}/>
                        <span className="postlikecounter"> {like} people like it </span>
                    </div>
                    <div className="postbottomright">
                        <span className="postcommenttext">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
