import { Layout } from 'antd';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  height: '6.5rem',
  paddingInline: 50,
  position: 'sticky',
  lineHeight: '2rem',
  padding: '0.75rem',
  top: 0,
  // width: '100%',
  // zIndex: 999,
};

const contentStyle: React.CSSProperties = {
  // textAlign: 'center',
  minHeight: '85vh',
  height: 'fit-content',
  display: 'flex',
  flexFlow: 'column',
};

const footerStyle: React.CSSProperties = {
  // textAlign: 'center',
  // height: 64,
  // position: 'relative',
  // bottom: '0',
  // left: '0',
  // width: '100%',
  backgroundColor: 'gray',
};

export const RootLayout = () => {
  return (
    <Layout>
      <Layout.Header style={headerStyle}>
        <Header />
      </Layout.Header>
      <Layout.Content style={contentStyle}>
        <Outlet />
      </Layout.Content>
      <Layout.Footer style={footerStyle}>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};
