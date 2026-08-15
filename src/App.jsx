import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import { CartProvider } from '@/context/CartContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';
import PrintingGuide from './pages/PrintingGuide';
import ProductDetail from './pages/ProductDetail';
import Shop from './pages/Shop';
import BrandPage from './pages/BrandPage';
// Add page imports here

const AuthenticatedApp = () => {
  const { authError } = useAuth();

  // Only block rendering for user_not_registered — all other states render the public app immediately
  if (authError?.type === 'user_not_registered') {
    return <UserNotRegisteredError />;
  }

  // Render routes immediately so crawlers and the sitemap checker never get a redirect
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/printing-guide" element={<PrintingGuide />} />
      <Route path="/product" element={<ProductDetail />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/brands/:slug" element={<BrandPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <CartProvider>
            <ScrollToTop />
            <AuthenticatedApp />
          </CartProvider>
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App