import React from 'react';

function Modules() {
  return(
      <div>
      <ul className="list-group mb-4">
          <li className="list-group-item list-group-item-primary">Resources</li>
          <li className="list-group-item"><a href="syllabus.html">Syllabus</a></li>
          <li className="list-group-item">Piazza</li>
          <li className="list-group-item">Project</li>
          <li className="list-group-item">Github</li>
      </ul>
                
      <ul className="list-group">
          <li className="list-group-item list-group-item-warning">Week 1</li>
          <li className="list-group-item">Web Development</li>
          <li className="list-group-item">Node</li>
          <li className="list-group-item">React</li>
          <li className="list-group-item">Netlify</li>
      </ul>
                
      <ul>
          <li><h2>Textbook</h2></li>
          <li><h2>Office Hours</h2></li>
          <li><h2>Week 2</h2></li>
          <li><h2>Week 3</h2></li>
          <li><h2>Week 4</h2></li>
          <li><h2>Week 5</h2></li>
          </ul>
      </div>
    )
}
export default Modules