import './App.css'
import SearchInput from './components/SearchInput'
// import GetStartedButton from './components/GetStartedButton';
// import AppbleBtn from './components/AppleBtn';
import Button from './components/Button';

import { Youtube, ArrowRight, Facebook, Apple } from 'lucide-react';
import { Search, Settings2  } from 'lucide-react';
import { FaPhone } from "react-icons/fa";
import { IoFilterCircleOutline } from "react-icons/io5";
import Ex3MatchCard from './components/Ex3MatchCard';
import Ex3TeamCard from './components/Ex3TeamCard';
import Ex3UserCard from './components/Ex3UserCard';
import Ex3DashboardCard from './components/Ex3DashboardCard';
import Ex4ProfileCard from './components/Ex4ProfileCard';
import Ex5GroupCard from './components/Ex5GroupCard';
import Ex6NikeNoti from './components/Ex6NikeNoti';
import Ex6Noti from './components/Ex6Noti';
import Ex7WeatherLocation from './components/Ex7WeatherLocation';
function App() {

  return (
    <div className='container'>
      {/* <GetStartedButton />
      <AppbleBtn /> */}
      {/* Ex1 */}
      <Button type='primary' label='Get started' rightIcon={<ArrowRight size={16} />} />
      <Button type='primary' leftIcon={<Apple size={16}/>} label={'Continue with Apple'} />
      <Button type='outline' leftIcon={<Youtube size={16}/>} label={'Continue with Google'} />
      <Button type='outline' leftIcon={<Facebook size={16}/>} label={'Continue with Facbook'} />

      {/* Ex2 */}
      <SearchInput leftIcon={<Search size={18} />} />
      <SearchInput leftIcon={<Search size={18} />} placeholder='Search' />
      <SearchInput leftIcon={<Search size={18} />} value='Textfield' />
      <SearchInput leftIcon={<Search size={18} />} placeholder='Search in the web' rightIcon={<IoFilterCircleOutline size={18} />} />
      <SearchInput leftIcon={<Search size={18} />} placeholder='Search crypto' rightIcon={<Settings2 size={18} />} />
      <SearchInput placeholder='Phone number' rightIcon={<span style={{ backgroundColor: '#D3FFD8', borderRadius: 8, padding: 8 }}><FaPhone size={17} /></span>} />
      <SearchInput leftIcon={<Search size={18} />} placeholder='Search in the web' rightIcon={<span style={{ backgroundColor: '#FFE664', borderRadius: 100, padding: 8 }}><IoFilterCircleOutline size={18} /></span>} />

      {/* Ex3 */}
      <Ex3MatchCard />
      <Ex3TeamCard />
      <Ex3UserCard />
      <Ex3DashboardCard />

      {/* Ex4 */}
      <Ex4ProfileCard name="Yolanda" role="Web Development" avatar={'/images/avt2.png'} rightIcon="camera" />
      <Ex4ProfileCard name="María" avatar={'/images/avt-bg.png'} imageMode rightIcon="phone"/>

      {/* Ex5 */}
      <Ex5GroupCard backgroundColor="#12C0E7" avatars={['/images/avt2.png']} title="Miriam Jimenez" />
      <Ex5GroupCard backgroundColor="#740EF5" avatars={['/images/avt2.png', '/images/avt3.png', '/images/avt4.png']} title="Teams" subtitle="Two currently" />
      <Ex5GroupCard backgroundColor="#FFF614" avatars={['/images/avt5.png', '/images/avt6.png']} title="New Teams" textColor="#000" />

      {/* Ex6 */}
      <Ex6NikeNoti logo="/images/nike.png" title="Nike store" subtitle="6 months of promotions" amount="-27.50" time="11:00AM" />
      <Ex6Noti message="All your notifications are well turned on" unreadCount={3} />

      {/* Ex7 */}
      <Ex7WeatherLocation image="/images/bg-1.png" title="Landescape" subtitle="423Km" background="#f9feda" hasMenu={true} />

      <Ex7WeatherLocation image="/images/bg-2.png" title="Falset Mountains" subtitle="423Km, 3 Week" rightImage={['/images/w1.png']} />

      <Ex7WeatherLocation image="/images/w2.png" title="Great day to schedule" subtitle="Lorem ipsum dolor sitamet." rightImage={['/images/play.png']} background="#eaf4ff" />
    </div>
  )
}

export default App
