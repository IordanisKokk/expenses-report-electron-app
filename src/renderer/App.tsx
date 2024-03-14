import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './Pages/Intro';
import './App.css';
import { ClientProvider } from './Providers/ClientProvider';
import ClientExpenses from './Pages/ClientExpenses';

export default function App() {
  return (
    <ClientProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/clients/:clientId" element={<ClientExpenses />} />
        </Routes>
      </Router>
    </ClientProvider>
  );
}
