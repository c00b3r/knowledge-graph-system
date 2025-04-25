import TextIcon from '../icons/TextIcon';
import GraphIcon from '../icons/GraphIcon';
import ListIcon from '../icons/ListIcon';
import AchievementsIcon from '../icons/AchievementsIcon';
import HintIcon from '../icons/HintIcon';
import LogoutIcon from '../icons/LogoutIcon';
import './NavigationMenu.css';

function NavigationMenu() {
  return (
    <div className='navigation-menu'>
      <nav className='navigation-menu-nav'>
        <div className='navigation-menu-nav-item'>
          <TextIcon />
        </div>
        <div className='navigation-menu-nav-item'>
          <GraphIcon />
        </div>
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
