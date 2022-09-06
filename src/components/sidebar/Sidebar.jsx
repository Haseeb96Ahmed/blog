import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img 
        src="" 
        alt="" />
        <h3>FRONTEND-DEV</h3>
        <p>To expertise in the field of computer science. High level experience in web design and dev knowledge, producing benefit with the hard working quality of work.</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle"> CATEGORIES </span>
        <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Spoarts</li>
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle"> FOLLOW ME </span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook"></i>
        <i className="sidebarIcon fa-brands fa-github"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>    
        </div>
      </div>
    </div>
  )
}
