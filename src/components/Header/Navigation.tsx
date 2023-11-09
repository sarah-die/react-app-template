import { Menu } from 'antd';
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trimTrailingSlashes } from 'utils/helpers';

const navStyle = {
  backgroundColor: '#001529',
  color: '#1178F2',
};

export const Navigation = () => {
  const { pathname } = useLocation();
  const path = trimTrailingSlashes(pathname);

  const navItems = [
    { label: <Link to='/'>Home</Link>, key: 0 },
    { label: <Link to='/anotherRoute'>Another Route</Link>, key: 1 },
  ];

  const activePath = useMemo(() => {
    if (path.includes('anotherRoute')) return '/anotherRoute';
    return '/';
  }, [path]);

  return (
    <Menu
      items={navItems}
      mode='horizontal'
      selectedKeys={[activePath]}
      style={navStyle}
    />
  );
};
