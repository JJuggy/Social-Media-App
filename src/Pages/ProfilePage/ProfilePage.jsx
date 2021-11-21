import "./ProfilePage.css"
import Feed from "../../Components/feed/Feed"
import Rightbar from "../../Components/rightbar/Rightbar"
import Sidebar from "../../Components/sidebar/Sidebar"
import Topbar from "../../Components/topbar/Topbar"
const ProfilePage = () => {
    return (
        <>
        <Topbar/>
            <div className="profilepage">
                <Sidebar/>

                <div className="profilepageright"> 

                    <div className="profilerighttop">
                        
                        <div className="profilecover">
                            <img src="images/coverphoto.jpeg" alt="" className="coverphoto" />
                            <img src="images/profilepicture.jpeg" alt="" className="userphoto" />
                        </div>
                        <div className="userinfo">
                            <div className="userdetails">
                                <h4 className="profilename">Amiolemen David</h4> 
                                <span className="profileinfodesc">Hello My friend</span>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className="profilepagebottom">
                        <Feed/>
                        <Rightbar/>
                    </div>
                </div>
                
            
            </div>
      </>
            
    )
}

export default ProfilePage
