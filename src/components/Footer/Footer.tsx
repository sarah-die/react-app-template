import { Col, Row, Typography } from 'antd';
import dayjs from 'dayjs';
import { PROJECT_NAME } from 'types/constants';

export const Footer = () => {
  return (
    <Row justify='space-between' align='middle'>
      <Col>
        <Typography.Text strong>{PROJECT_NAME}</Typography.Text>
      </Col>
      <Col>{dayjs().year()}</Col>
    </Row>
  );
};
