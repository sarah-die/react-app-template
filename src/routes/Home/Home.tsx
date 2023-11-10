import { Col, Row, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();
  return (
    <Row gutter={[0, 16]} justify='center'>
      <Row justify='center'>
        <Col sm={22} md={20} lg={18}>
          <Typography.Text>{t('home.intro')}</Typography.Text>
        </Col>
      </Row>
      <Row justify='center'>
        <Col sm={22} md={20} lg={18}>
          <Typography.Text>{t('home.welcome-text')}</Typography.Text>
        </Col>
      </Row>
    </Row>
  );
};
