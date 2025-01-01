import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const FooterSection = styled.footer`
  padding: 2rem;
  background: #2d3436;
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Copyright = styled.p`
  text-align: center;
  color: #b2bec3;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HeartIcon = styled(FaHeart)`
  color: #e84393;
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled(motion.a)`
  color: #dfe6e9;
  text-decoration: none;
  font-size: 0.9rem;
  
  &:hover {
    color: #6c5ce7;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <Container>
        <FooterNav>
          <FooterLink
            href="#about"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            About
          </FooterLink>
          <FooterLink
            href="#experience"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Experience
          </FooterLink>
          <FooterLink
            href="#skills"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Skills
          </FooterLink>
          <FooterLink
            href="#contact"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Contact
          </FooterLink>
        </FooterNav>
        <Copyright>
          <span>© {currentYear} Leo. Made with</span>
          <HeartIcon />
          <span>using React</span>
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer; 