import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UseCaseDetail from './pages/UseCaseDetail';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/use-case/:slug" element={<UseCaseDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
