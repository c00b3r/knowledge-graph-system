import { Flex } from 'antd';
import { Outlet } from 'react-router';
import SideBar from '../components/SideBar/Sidebar';

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
      <Outlet />
    </Flex>
  );
}

export default DefaultLayout;
