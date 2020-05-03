import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import RootPage from 'pages/RootPage';
import MainLayout from 'layouts/MainLayout';
import Sidebar from 'components/Sidebar';
import Header from 'components/Header';

const App: React.FC = () => (
  <Router>
    <MainLayout
      content={<RootPage />}
      sidebar={<Sidebar />}
      header={<Header />}
    />
  </Router>
);

export default App;
