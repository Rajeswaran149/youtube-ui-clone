import React from 'react'
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
        
        <SidebarRow selected Icon={HomeIcon} title="Home"></SidebarRow>
        <SidebarRow Icon={WhatshotIcon} title="Trending"></SidebarRow>
        <SidebarRow Icon={SubscriptionsIcon} title="Subscription"></SidebarRow>
        <hr></hr>
        <SidebarRow Icon={VideoLibraryIcon} title="Library"></SidebarRow>
        <SidebarRow Icon={HistoryIcon} title="History"></SidebarRow>
        <SidebarRow Icon={OndemandVideoIcon} title="Your videos"></SidebarRow>
        <SidebarRow Icon={WatchLaterIcon} title="Watch later"></SidebarRow>
        <SidebarRow Icon={ThumbUpAltIcon} title="Liked videos"></SidebarRow>
        <SidebarRow Icon={ExpandMoreIcon} title="Show more"></SidebarRow>
    </div>
  )
}

export default Sidebar