import NavigationMenu from '../NavigationMenu/NavigationMenu';
import Questions from '../Questions/Questions';
import { Flex } from 'antd';
import './Sidebar.css';

function SideBar() {
  return (
    <div className='aside'>
      <div className='aside-logo'>
        <img src='/image/UrFU.png' />
      </div>
      <Flex style={{ width: '250px' }}>
        <NavigationMenu />
        <Questions />
      </Flex>
    </div>
  );
}

export default SideBar;
