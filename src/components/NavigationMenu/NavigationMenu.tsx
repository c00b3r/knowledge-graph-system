import TextIcon from '../Icons/TextIcon';
import GraphIcon from '../Icons/GraphIcon';
import ListIcon from '../Icons/ListIcon';
import AchievementsIcon from '../Icons/AchievementsIcon';
import HintIcon from '../Icons/HintIcon';
import LogoutIcon from '../Icons/LogoutIcon';
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
        <NavigationItem title='Список' icon={<ListIcon />} to='/*' />
        <NavigationItem
          title='Достижения'
          icon={<AchievementsIcon />}
          to='/*'
        />
        <NavigationItem title='Справка' icon={<HintIcon />} to='/info' />
      </nav>
      <div className='navigation-menu-nav-item'>
        <NavigationItem
          title='Выйти в TeamProject'
          icon={<LogoutIcon />}
          to='/*'
        />
      </div>
    </div>
  );
}

export default NavigationMenu;
