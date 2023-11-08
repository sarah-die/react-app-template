import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Root } from './routes/Root';

const queryClient = new QueryClient();

const router = createBrowserRouter([{ path: '*', Component: Root }]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
