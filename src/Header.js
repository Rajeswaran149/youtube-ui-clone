import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
const [inputSearch, setInputSearch] = useState('');



  return (
    <div className='header'>
        <div className='header__left'>
            <MenuIcon></MenuIcon>
            <Link to="/">
              <img className='header__logo'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/1280px-YouTube_Logo_%282013-2017%29.svg.png' 
              alt=''
              ></img>

            </Link>
        </div>
        <div className='header__input'>
            <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder='Search' type="text" name='message'></input>
            <Link to={`/search/${inputSearch}`}>
              <SearchIcon className='header__inputButton'></SearchIcon>
            </Link>
            
        </div>
        <div className='header__icons'>

          <VideoCallIcon className='header__icon'></VideoCallIcon>
          <AppsIcon className='header__icon'></AppsIcon>
          <CircleNotificationsIcon className='header__icon'></CircleNotificationsIcon>
          <AccountCircleIcon className='header__icon'></AccountCircleIcon>
        </div>
         
        
        
        
        
    </div>
  )
}

export default Header