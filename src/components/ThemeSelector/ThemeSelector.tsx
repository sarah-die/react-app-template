import { Switch } from 'antd';
import { useThemeStore } from 'src/stores/configStore';

export const ThemeSelector = () => {
  const toggleTheme = useThemeStore(state => state.toggleTheme);

  return (
    <Switch
      size='small'
      checkedChildren='dark'
      unCheckedChildren='default'
      onChange={toggleTheme}
    />
  );
};
