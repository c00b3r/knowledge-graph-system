import TextIcon from '../icons/TextIcon';
import GraphIcon from '../icons/GraphIcon';
import ListIcon from '../icons/ListIcon';
import AchievementsIcon from '../icons/AchievementsIcon';
import HintIcon from '../icons/HintIcon';
import LogoutIcon from '../icons/LogoutIcon';
import './NavigationMenu.css';
import { NavLink } from 'react-router';
import { Tooltip } from 'antd';

function NavigationItem({
  title,
  icon,
  to,
}: {
  title: string;
  icon: React.ReactNode;
  to: string;
}) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <Tooltip title={title} placement='right'>
          <div
            className={`navigation-menu-nav-item ${isActive ? 'active' : ''}`}
          >
            {icon}
          </div>
        </Tooltip>
      )}
    </NavLink>
  );
}

function NavigationMenu() {
  return (
    <div className='navigation-menu'>
      <nav className='navigation-menu-nav'>
        <NavigationItem
          title='Текстовый редактор'
          icon={<TextIcon />}
          to='/editor'
        />
        <NavigationItem title='Граф' icon={<GraphIcon />} to='/graph' />
        <div className='navigation-menu-nav-item'>
          <ListIcon />
        </div>
        <div className='navigation-menu-nav-item'>
          <AchievementsIcon />
        </div>
        <div className='navigation-menu-nav-item'>
          <HintIcon />
        </div>
      </nav>
      <div className='navigation-menu-nav-item'>
        <LogoutIcon />
      </div>
    </div>
  );
}

export default NavigationMenu;
