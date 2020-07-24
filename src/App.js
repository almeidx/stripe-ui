import React from 'react';

import GlobalStyles from './styles/globals';
import Layout from './components/Layout';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <Layout>
        <NavBar />
      </Layout>

      <GlobalStyles />
    </>
  );
}

export default App;
