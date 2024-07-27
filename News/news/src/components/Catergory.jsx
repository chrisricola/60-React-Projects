import React from 'react'

const Catergory = ({setSearch}) => {
  return (
    <div>
    <div className="category">
        <ul>
            <li><button className="btn btn-outline-success">Sports</button></li>
            <li><button className="btn btn-outline-danger">Health</button></li>
            <li><button className="btn btn-outline-primary">Entertainment</button></li>
        </ul>
        <ul>
            <li><button className="btn btn-outline-warning">Buisness</button></li>
            <li><button className="btn btn-outline-info">Technology</button></li>
            <li><button className="btn btn-outline-primary">Science</button></li>
        </ul>
    </div>
    </div>
  )
}

export default Catergory