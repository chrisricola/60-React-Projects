import React from 'react'

const Catergory = ({setSearch}) => {
  return (
    <div>
    <div className="category">
        <ul>
            <li><button className="btn btn-outline-success" onClick={() => setSearch('sports')}>Sports</button></li>
            <li><button className="btn btn-outline-danger" onClick={() => setSearch('health')}>Health</button></li>
            <li><button className="btn btn-outline-primary" onClick={() => setSearch('entertainment')}>Entertainment</button></li>
        </ul>
        
        <ul>
            <li><button className="btn btn-outline-warning" onClick={() => setSearch('buisness')}>Buisness</button></li>
            <li><button className="btn btn-outline-info" onClick={() => setSearch('technology')}>Technology</button></li>
            <li><button className="btn btn-outline-primary" onClick={() => setSearch('science')}>Science</button></li>
        </ul>
    </div>
    </div>
  )
}

export default Catergory