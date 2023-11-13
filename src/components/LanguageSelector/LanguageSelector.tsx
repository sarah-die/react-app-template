import { Switch } from 'antd';
import { useTranslation } from 'react-i18next';
import { useLanguageStore } from 'src/stores/configStore';

export const LanguageSelector = () => {
  const toggleLanguage = useLanguageStore(state => state.toggleLanguage);
  const language = useLanguageStore(state => state.language);
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    toggleLanguage();
    i18n.changeLanguage(language);
  };

  return (
    <Switch
      size='small'
      checkedChildren='de'
      unCheckedChildren='en'
      onChange={changeLanguage}
    />
  );
};
