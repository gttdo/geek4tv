import React from 'react';
// Styling
import './css/style.css';
// Router
import { Route } from 'react-router-dom';

// Navbar and Footer
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

// Pages
import HomePage from './pages/Home_Page/HomePage';
import NewsPage from './pages/News_Page/NewsPage';
import ReviewsPage from './pages/Reviews_Page/ReviewsPage';
import VideosPage from './pages/Videos_Page/VideosPage';
import Articles from './pages/Articles_Page/Articles';
import Article from './layout/ArticleTemplate';


function App() {
  return (
      <div>
        <Navbar/>
        <Route path="/" exact component={HomePage}/>
        <Route path="/news" component={NewsPage}/>
        <Route path="/reviews" component={ReviewsPage}/>
        <Route path="/videos" component={VideosPage}/>
        <Route path="/articles" exact component={Articles}/>
        <Route path="/articles/article" component={Article}/>
        <Footer/>
      </div>
  );
}

export default App;
