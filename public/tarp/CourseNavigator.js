function CourseNavigator(highlight = 'Home') {
  const sections = [
      {label: 'Home', href: 'index.html'},
      {label: 'Modules', href: 'modules.html'},
      {label: 'Piazza', href: 'http://piazza.com'},
      {label: 'Zoom Meetings', href: '#'},
      {label: 'Assignments', href: '#'},
      {label: 'Grades', href: 'gradebook.html'},
      {label: 'People', href: '#'},
      {label: 'Panopto Video', href: '#'},
      {label: 'Announcements', href: '#'},
      {label: 'Pages', href: '#'},
      {label: 'Discussions', href: '#'},
  ]

  return(`
    <div class="list-group">
        ${
          sections.map(section => 
              `<a class="list-group-item ${section.label == highlight ? 'active' : ''}" 
                  href="${section.href}">
                  ${section.label}
               </a>`
            ).join('')
          }
    </div>
   `)
}
export default CourseNavigator