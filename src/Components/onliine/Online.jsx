

import "./Online.css"

const Online = ({post}) => {
    return (
        <li className="rightbarfriend">
            <div className="rightbarimagecontainer">
                <img src="images/pubg.jpeg" alt="" className="rightbarprofileimage" />
                <span className="rightbaronline"></span>
            </div>  
            <span className="rightbarusername">{post.name}</span>
       </li>
    )
}

export default Online
