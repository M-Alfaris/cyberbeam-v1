import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <Routes>
          {/* Redirect root to /en */}
          <Route path="/" element={<Navigate to="/en" replace />} />
          
          {/* Language-specific routes */}
          <Route path="/en" element={<HomePage />} />
          <Route path="/ar" element={<HomePage />} />
          
          {/* Catch all other routes and redirect to /en */}
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </LanguageProvider>
    </Router>
  );
}

export default App;