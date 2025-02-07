import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { Chatbot } from './components/Chatbot';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Novels } from './pages/Novels';
import { CategoryView } from './pages/CategoryView';
import { NovelDetail } from './pages/NovelDetail';
import { Articles } from './pages/Articles';
import { ArticleDetail } from './pages/ArticleDetail';
import { News } from './pages/News';
import { NewsDetail } from './pages/NewsDetail';
import { Status } from './pages/Status';
import { Profile } from './pages/Profile';
import { Payment } from './pages/Payment';
import { Membership } from './pages/Membership';

function HomePage() {
  return (
    <>
      <Hero />
      <Chatbot />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/novels" element={<Novels />} />
          <Route path="/category/:category" element={<CategoryView />} />
          <Route path="/novels/:id" element={<NovelDetail />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/status" element={<Status />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/membership" element={<Membership />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;