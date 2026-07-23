import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
// Import other pages when created
import TheSeason from './pages/TheSeason';
import Runway from './pages/Runway';
import Journal from './pages/Journal';
import About from './pages/About';
import Connect from './pages/Connect';
import Article from './pages/Article';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="collections" element={<TheSeason />} />
        <Route path="runway" element={<Runway />} />
        <Route path="journal" element={<Journal />} />
        <Route path="journal/article" element={<Article />} />
        <Route path="about" element={<About />} />
        <Route path="connect" element={<Connect />} />
      </Route>
    </Routes>
  );
}
