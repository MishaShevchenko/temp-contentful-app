import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import ProjectDetail from './ProjectDetail';

const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Projects />
            </>
          }
        />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
