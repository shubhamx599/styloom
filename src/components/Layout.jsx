import { useLocation, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import Loader from './Loader';

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <Loader />
      <CustomCursor />
      <Header />
      
      {/* mode="wait" ensures the old page exits completely before the new one enters */}
      <AnimatePresence mode="wait">
        <main key={location.pathname}>
          <Outlet />
        </main>
      </AnimatePresence>
      
      <Footer />
    </>
  );
}
