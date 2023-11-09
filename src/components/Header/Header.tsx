import { Col, Row, Space } from 'antd';
import { Navigation } from 'components/Header/Navigation';
import { ReactIcon } from 'components/Icon/ReactIcon/ReactIcon';
import { LanguageSelector } from 'components/LanguageSelector/LanguageSelector';
import { Link } from 'react-router-dom';

const logoStyle = {
  display: 'flex',
  alignItems: 'center',
};

export const Header = () => {
  return (
    <div>
      <Row justify='space-around' align='middle'>
        <Col style={{ paddingTop: '0.25rem' }}>
          <Space align='baseline'>
            <Link to='/' style={logoStyle}>
              <ReactIcon />
              <span>My Project</span>
            </Link>
          </Space>
        </Col>
        <Col>
          <Space size='middle' align='center' style={{ paddingTop: '1rem' }}>
            <LanguageSelector />
          </Space>
        </Col>
      </Row>
      <Row>
        <Navigation />
      </Row>
    </div>
  );
};
