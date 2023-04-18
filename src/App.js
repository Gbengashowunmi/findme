import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about/About';
import Landing from './pages/landing/Landing';
import "aos/dist/aos.css";
import SmoothScroll from './pages/SmoothScroll/SmoothScroll';
import Service from './pages/service/Service';
import ScrollToTopNav from './components/ScrollToTopNav';
import ScrollToTop from 'react-scroll-to-top';
import Categories from './pages/categories/Categories';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        {/* scroll to top icon  */}
        <ScrollToTop className="scroll_up" smooth={true} />
        {/* scroll to top of the page on new page  */}
        <ScrollToTopNav />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/smooth" element={<SmoothScroll />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
