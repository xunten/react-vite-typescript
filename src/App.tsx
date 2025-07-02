import './App.css'
import SearchInput from './components/SearchInput'
// import GetStartedButton from './components/GetStartedButton';
// import AppbleBtn from './components/AppleBtn';
import Button from './components/Button';

import { Youtube, ArrowRight, Facebook, Apple } from 'lucide-react';
import { Search, Settings2  } from 'lucide-react';
import { FaPhone } from "react-icons/fa";
import { IoFilterCircleOutline } from "react-icons/io5";
function App() {

  return (
    <div className='container'>
      {/* <GetStartedButton />
      <AppbleBtn /> */}

      <Button type='primary' label='Get started' rightIcon={<ArrowRight size={16} />} />
      <Button type='primary' leftIcon={<Apple size={16}/>} label={'Continue with Apple'} />
      <Button type='outline' leftIcon={<Youtube size={16}/>} label={'Continue with Google'} />
      <Button type='outline' leftIcon={<Facebook size={16}/>} label={'Continue with Facbook'} />

      <SearchInput leftIcon={<Search size={18} />} />
      <SearchInput leftIcon={<Search size={18} />} placeholder='Search' />
      <SearchInput leftIcon={<Search size={18} />} value='Textfield' />
      <SearchInput leftIcon={<Search size={18} />} placeholder='Search in the web' rightIcon={<IoFilterCircleOutline size={18} />} />
      <SearchInput leftIcon={<Search size={18} />} placeholder='Search crypto' rightIcon={<Settings2 size={18} />} />
      <SearchInput placeholder='Phone number' rightIcon={<span style={{ backgroundColor: '#D3FFD8', borderRadius: 8, padding: 8 }}><FaPhone size={17} /></span>} />
      <SearchInput leftIcon={<Search size={18} />} placeholder='Search in the web' rightIcon={<span style={{ backgroundColor: '#FFE664', borderRadius: 100, padding: 8 }}><IoFilterCircleOutline size={18} /></span>} />
    </div>
  )
}

export default App
