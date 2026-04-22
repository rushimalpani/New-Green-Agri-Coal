import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UseCaseDetail from './pages/UseCaseDetail';
import ScrollToTop from './components/ScrollToTop';
import { NotFound } from './components/ui/not-found-2';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/insights" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/gallery" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/use-case/:slug" element={<UseCaseDetail />} />
        {/* Catch-all route for 404 - Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
