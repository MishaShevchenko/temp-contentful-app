import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import Projects from "./Projects";
import ProjectDetail from "./ProjectDetail";

const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <main>
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
      </main>
    </BrowserRouter>
  );
};

export default App;
