import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 100px 2rem;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #2d3436;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #636e72;
  font-size: 1.2rem;
  margin-bottom: 3rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #2d3436;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #dfe6e9;
  border-radius: 5px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #6c5ce7;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #dfe6e9;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #6c5ce7;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: #6c5ce7;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  align-self: flex-start;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
`;

const SocialLink = styled(motion.a)`
  color: #2d3436;
  font-size: 1.8rem;
  
  &:hover {
    color: #6c5ce7;
  }
`;

const Contact = () => {

  return (
    <ContactSection id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title>Get In Touch</Title>
          <Subtitle>
            Feel free to reach out for collaborations or just a friendly hello
          </Subtitle>

          <SocialLinks>
            <SocialLink
              href="mailto:leogong99@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <FaEnvelope />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/javascriptguru/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink
              href="https://github.com/leogong99"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub />
            </SocialLink>
          </SocialLinks>
        </motion.div>
      </Container>
    </ContactSection>
  );
};

export default Contact; 