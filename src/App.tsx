import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Root } from './routes/Root/Root';
import { AnotherRoute } from './routes/AnotherRoute/AnotherRoute';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [{ path: '/test', element: <div>test</div> }],
  },
  { path: '/anotherRoute', element: <AnotherRoute /> },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
