import { Col, Row, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

export const AnotherRoute = () => {
  const { t } = useTranslation();

  return (
    <Row justify='center'>
      <Col sm={22} md={20} lg={18}>
        <Typography.Text>{t('another-route.intro')}</Typography.Text>
      </Col>
    </Row>
  );
};
