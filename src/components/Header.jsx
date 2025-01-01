import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2d3436;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: #2d3436;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #0984e3;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo>Leo Gong</Logo>
        </motion.div>
        <NavLinks>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            About
          </motion.a>
          <motion.a
            href="#experience"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Experience
          </motion.a>
          <motion.a
            href="#skills"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Skills
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Contact
          </motion.a>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 