import { Button, Flex, Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { NavLink, Outlet } from 'react-router';

function MainPage() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={150} theme='light' style={{ padding: '10px' }}>
        <Flex gap={10} vertical>
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
        </Flex>
      </Sider>
      <Content style={{ padding: '20px' }}>
        <Outlet />
      </Content>
    </Layout>
  );
}

export default MainPage;
