import { ConfigProvider, Layout, theme } from 'antd';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

const { defaultAlgorithm, darkAlgorithm } = theme;

export const RootLayout = () => {
  const isDarkMode = false;

  return (
    <ConfigProvider
      theme={{ algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm }}
    >
      <Layout style={{ minHeight: '100vh', maxWidth: 1400, margin: '0 auto' }}>
        <Layout.Header
          style={{
            height: '5rem',
            lineHeight: '2.2rem',
          }}
        >
          <Header />
        </Layout.Header>
        <Layout.Content>
          <Outlet />
        </Layout.Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
    </ConfigProvider>
  );
};
