import "./Profile.css"

const Profile = ({post}) => {
    return (
            <li className="sidebarfriend">
                <img className="sidebarfriendimage" src={post.picture} alt="" />  
                <span className="sidebarfriendname"> {post.name} </span>
            </li>
    )
}

export default Profile
