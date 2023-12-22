import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/default';
import AppRoutes from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
