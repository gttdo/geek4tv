import React from 'react';
// Styling
import './css/style.css';
// Router
import { Route } from 'react-router-dom';

// Pages
import HomePage from './pages/Home_Page/HomePage';
import NewsPage from './pages/News_Page/NewsPage';



function App() {
  return (
      <div>
        <Route path="/" exact component={HomePage}/>
        <Route path="/news" component={NewsPage}/>
      </div>
  );
}

export default App;
