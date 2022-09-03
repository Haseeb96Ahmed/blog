import './navbar.css'

export default function Navbar() {
  return (
    <div className='top'>
    <div className="topLeft">
    <i className="topIcon fa-brands fa-facebook"></i>
    <i className="topIcon fa-brands fa-github"></i>
    <i className="topIcon fab fa-instagram-square"></i>
    </div>
    <div className="topCenter">
    <ul className="topList">
    <li className="topListItem">Home</li>
    <li className="topListItem">About</li>
    <li className="topListItem">Contact</li>
    <li className="topListItem">Write</li>
    <li className="topListItem">Logout</li>
    </ul>
    </div>
    <div className="topRight">
    <img 
    className='topImg'
    src="https://media-exp1.licdn.com/dms/image/D4D35AQHVtvUXyXyHgg/profile-framedphoto-shrink_400_400/0/1655843240993?e=1662735600&v=beta&t=-A1ppxICIepyvVOj6hp_ds3ZcyETz5_TwvH3MJQNhNs" alt="" />
    <i className="topSearchIcon fas fa-search"></i>
    </div>
    </div>
  )
}
