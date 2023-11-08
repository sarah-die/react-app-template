import { Col, Row, Space } from 'antd';
import { Link } from 'react-router-dom';
import { ReactIcon } from '../Icon/ReactIcon/ReactIcon';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import { Navigation } from './Navigation';

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
