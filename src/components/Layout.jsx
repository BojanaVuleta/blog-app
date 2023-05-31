import { Link } from "react-router-dom";
const Layout=()=>{
    
        return(
            <nav className= "navbar navbar-expand-lg bg-body-tertiary container" >
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                      <Link to="/posts"><button className="btn btn-outline-secondary">Posts</button></Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/add"><button className="btn btn-outline-secondary">Add post</button></Link>
                  </li>
            
                  
                </ul>
              </div>
            </div>
          </nav> 
        )
    
}

export default Layout;