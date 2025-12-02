import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import { Footer } from './components/Footer';
import { Homepage } from './components/Homepage';
import { IntroductionPage } from './components/IntroductionPage';
import { StudiesPage } from './components/StudiesPage';
import { BookshopPage } from './components/BookshopPage';
import { MedicalMissionaryPage } from './components/MedicalMissionaryPage';
import { SchoolPage } from './components/SchoolPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/introduction" element={<IntroductionPage />} />
            <Route path="/studies" element={<StudiesPage />} />
            <Route path="/bookshop" element={<BookshopPage />} />
            <Route
              path="/medical-missionary"
              element={<MedicalMissionaryPage />}
            />
            <Route path="/school" element={<SchoolPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
