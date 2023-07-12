import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import HomePage from './pages/HomePage';
import AirportSearchProvider from './context/airportContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <AirportSearchProvider>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/*' element={<HomePage />} />
          </Routes>
        </Router>
      </AirportSearchProvider>
    </QueryClientProvider>
  );
}

export default App;
