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
import { News } from './pages/News';
import { Status } from './pages/Status';
import { Profile } from './pages/Profile';
import { Payment } from './pages/Payment';

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
          <Route path="/news" element={<News />} />
          <Route path="/status" element={<Status />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;