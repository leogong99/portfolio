import { BrowserRouter as Router } from 'react-router-dom';
import styled from '@emotion/styled';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Works from './components/Works';

const AppContainer = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Hero />
        <About />
        <Experience />
        <Works />
        <Skills />
        <Contact />
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App; 