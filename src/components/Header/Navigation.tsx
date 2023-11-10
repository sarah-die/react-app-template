import { Menu } from 'antd';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { trimTrailingSlashes } from 'utils/helpers';

export const Navigation = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const path = trimTrailingSlashes(pathname);

  const navItems = [
    { label: <Link to='/'>{t('routes.home')}</Link>, key: 0 },
    { label: <Link to='/anotherRoute'>{t('routes.another')}</Link>, key: 1 },
  ];

  const activePath = useMemo(() => {
    if (path.includes('anotherRoute')) return '/anotherRoute';
    return '/';
  }, [path]);

  return (
    <Menu
      theme='dark'
      items={navItems}
      mode='horizontal'
      selectedKeys={[activePath]}
    />
  );
};
