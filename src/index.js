import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout/Layout';
import Login_FindPw_Ok from './pages/Login/Login_FindPw_Ok';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <Login_FindPw_Ok></Login_FindPw_Ok>
    </Layout>
  </React.StrictMode>
);
