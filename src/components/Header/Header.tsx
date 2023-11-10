import { Col, Row, Typography } from 'antd';
import { Navigation } from 'components/Header/Navigation';
import { LanguageSelector } from 'components/LanguageSelector/LanguageSelector';
import { ThemeSelector } from 'components/ThemeSelector/ThemeSelector';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <Row justify='space-between'>
        <Col span={16}>
          <Link to='/'>
            <Typography.Text style={{ color: 'whitesmoke' }}>
              My Project
            </Typography.Text>
          </Link>
        </Col>
        <Col span={4}>
          <LanguageSelector />
        </Col>
        <Col span={4}>
          <ThemeSelector />
        </Col>
      </Row>
      <Row justify='start'>
        <Col span={24}>
          <Navigation />
        </Col>
      </Row>
    </>
  );
};
