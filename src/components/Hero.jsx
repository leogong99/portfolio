import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #6c5ce7 0%, #a363d9 100%);
  color: white;
  padding: 0 2rem;
`;

const HeroContent = styled.div`
  max-width: 800px;
  text-align: center;
  color: #000000;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: white;
  color: #6c5ce7;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
`;

const Hero = () => {
    useEffect(()=> {
        VANTA.CLOUDS({
            el: "#heroSection",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00
        });
    }, []);
  return (
    <HeroSection id='heroSection'>
      <HeroContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Senior Frontend Engineer</Title>
          <Subtitle>
            Delivering cutting-edge web solutions with expertise in React, JavaScript, and CSS
          </Subtitle>
        </motion.div>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 