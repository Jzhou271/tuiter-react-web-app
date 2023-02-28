import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from 'react-router-dom';

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/');
  const active = paths[2];
  return(
      <div className="list-group">
        <Link to="/tuiter" className="list-group-item">
          <i className="fa-brands fa-twitter me-2"></i>
          Tuiter
        </Link>
        <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
          <i className="fas fa-home me-2"></i>
          Home
        </Link>
        <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
          <i className="fas fa-hashtag me-2"></i>
          Explore
        </Link>
        <Link to="tuiter/notifications" className={`list-group-item ${active === 'notifications'?'active':''}`}>
          <i className="fas fa-bell me-2"></i>
          Notifications
        </Link>
        <Link to="/tuiter/messages" className={`list-group-item ${active === 'messages'?'active':''}`}>
          <i className="fas fa-envelope me-2"></i>
          Messages
        </Link>
        <Link to="/tuiter/bookmarks" className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
          <i className="fas fa-bookmark me-2"></i>
          Bookmarks
        </Link>
        <Link to="/tuiter/lists" className={`list-group-item ${active === 'lists'?'active':''}`}>
          <i className="fas fa-list me-2"></i>
          Lists
        </Link>
        <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
          <i className="fas fa-user me-2"></i>
          Profile
        </Link>
        <Link to="/tuiter/more" className={`list-group-item ${active === 'more'?'active':''}`}>
          <i className="fa-solid fa-ellipsis me-2"></i>
          More
        </Link>
      </div>
  )
};
export default NavigationSidebar;