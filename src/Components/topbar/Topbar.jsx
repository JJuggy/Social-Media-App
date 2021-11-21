import './topbar.css'
import { Search, Chat, Notifications } from '@mui/icons-material';
import {Person} from '@mui/icons-material'
function Topbar() {
    return (
        <div className="topbarcontainer">

           <div className="topbarleft">
               <span className="logo">JuggySocial</span>
           </div>

           <div className="topbarcenter">
               <div className="searchbar">
                 <Search className="searchicon"/>
                 <input placeholder="search for friend, post or video" className="searchinput"/>
               </div> 
           </div>

           <div className="topbarright">
             <div className="topbarlinkscontainer">
                    <span className="topbarlinks">HomePage</span>
                    <span className="topbarlinks">TimeLine</span>
             </div>
             <div className="topbaricons">
                <div className="topbariconitem">
                    <Person/>
                    <span className="topbariconbadge">1</span>
                </div>
                <div className="topbariconitem">
                    <Chat/>
                    <span className="topbariconbadge">3</span>
                </div>
                <div className="topbariconitem">
                    <Notifications/>
                    <span className="topbariconbadge">1</span>
                </div>
             </div>
             <img src="images/background-home-mobile.jpg" alt="" className="topbarimg" />
           </div>
        </div>
    )
}

export default Topbar
