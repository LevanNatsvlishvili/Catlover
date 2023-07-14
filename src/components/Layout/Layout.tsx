import { paths } from '@/routing/Paths';
import { NavLink, Outlet } from 'react-router-dom';

const links = [
  { title: 'Main', to: paths.main },
  { title: 'Breeds', to: paths.breeds },
  { title: 'Favorites', to: paths.favorites },
];

interface linkClassName {
  isActive: boolean;
}

function Layout() {
  return (
    <div className="text-2-5 mt-2-4 p-6-0">
      <div className="flex justify-center space-x-2-0">
        {links.map((link, i) => (
          <NavLink key={i} className={({ isActive }: linkClassName) => (isActive ? 'text-primary' : '')} to={link.to}>
            {link.title}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
