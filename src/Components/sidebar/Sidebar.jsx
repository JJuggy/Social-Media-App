import "./Sidebar.css"
import {RssFeed, Chat, VideoLibrary, Groups, Bookmarks, QuestionAnswer, Work, CalendarToday  , School} from '@mui/icons-material'
import Profile from "../profile/Profile"
import {Posts} from "../../Dummydata"
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarwrapper">
                <ul className="sidebarlist">
                    <li className="sidebarlistitem">
                        <RssFeed className="sidebaricon"/>
                        Feed
                    </li>
                    <li className="sidebarlistitem">
                        <Chat className="sidebaricon"/>
                        Chat
                    </li>
                    <li className="sidebarlistitem">
                        <VideoLibrary className="sidebaricon"/>
                        Video
                    </li>
                    <li className="sidebarlistitem">
                        <Groups className="sidebaricon"/>
                        Groups
                    </li>
                    <li className="sidebarlistitem">
                        <QuestionAnswer className="sidebaricon"/>
                        Questions
                    </li>
                    <li className="sidebarlistitem">
                        <Work className="sidebaricon"/>
                        Job
                    </li>
                    <li className="sidebarlistitem">
                        <CalendarToday className="sidebaricon"/>
                        Events
                    </li>
                    <li className="sidebarlistitem">
                        <School className="sidebaricon"/>
                        Courses
                    </li>
                </ul>
                <button className="sidebarbutton">Show More</button>
                <hr className="sidebarhr"/>
                <ul className="sidebarfriendlist">
                  {Posts.map((post)=> <Profile key={post.id} post={post}/>)}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
