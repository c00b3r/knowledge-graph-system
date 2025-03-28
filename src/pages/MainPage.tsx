import { NavLink, Outlet } from 'react-router';

function MainPage() {
  return (
    <div>
      <div>
        <NavLink to={'/editor'}>Editor</NavLink>

        <NavLink to={'/graph'}>Graph</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default MainPage;
