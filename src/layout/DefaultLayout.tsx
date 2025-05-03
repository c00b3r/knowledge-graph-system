import { Flex } from 'antd';
import { Outlet } from 'react-router';
import SideBar from '../components/SideBar/Sidebar';
import MainHeader from '../components/MainHeader/MainHeader';

function DefaultLayout() {
  return (
    <Flex dir='horizontal'>
      {/* <Flex gap={10} vertical>
          <NavLink to={'/editor'}>
            {({ isActive }) => (
              <Button block type={isActive ? 'primary' : 'default'}>
                Редактор
              </Button>
            )}
          </NavLink>
          <NavLink to={'/graph'}>
            {({ isActive }) => (
              <Button block type={isActive ? 'primary' : 'default'}>
                Граф
              </Button>
            )}
          </NavLink>
        </Flex> */}
      <SideBar />
      <Flex vertical style={{ width: '100%' }}>
        <MainHeader />
        <Outlet />
      </Flex>
    </Flex>
  );
}

export default DefaultLayout;
