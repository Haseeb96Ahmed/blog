import Header from '../../header/Header'
import Sidebar from '../../sidebar/Sidebar';
import Post from './../../posts/Posts';
import './home.css'

export default function Home() {
  return (
    <>
    <Header />
    <div className='home'>
    <Post />
    <Sidebar/>
    </div>
    </>
  )
}