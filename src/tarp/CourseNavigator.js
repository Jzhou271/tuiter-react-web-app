import React from 'react';
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

function CourseNavigator({highlight = 'Home'}) {
  const {pathname} = useLocation()
  console.log(pathname)
  const sections = [
      {label: 'Home', href: 'index.html', to: 'home'},
      {label: 'Modules', href: 'modules.html', to: 'modules'},
      {label: 'Piazza', href: 'http://piazza.com'},
      {label: 'Zoom Meetings', href: '#'},
      {label: 'Assignments', href: '#', to: 'assignments'},
      {label: 'Quizzes', href: '#', to: 'quizzes'},
      {label: 'Grades', href: 'gradebook.html'},
      {label: 'People', href: '#'},
      {label: 'Panopto Video', href: '#'},
      {label: 'Announcements', href: '#'},
      {label: 'Pages', href: '#'},
      {label: 'Discussions', href: '#'},
  ]

  return(
    <div className="list-group">
        {
          sections.map(section => {
            const active = pathname === `/tarp/${section.to}`;
            return(<Link className={`list-group-item ${active ? 'active' : ''}`}
                      to={`/tarp/${section.to}`}>
                  {section.label}
                </Link>)
              }
            )
          }
    </div>
   )
}
export default CourseNavigator