import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 100px 2rem;
  background: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #2d3436;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Description = styled.div`
  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.8;
    color: #636e72;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 10px;

  h3 {
    font-size: 2.5rem;
    color: #6c5ce7;
    margin-bottom: 0.5rem;
  }

  p {
    color: #2d3436;
    font-weight: 500;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title>About Me</Title>
          <Content>
            <Description>
              <p>
                As a Senior Frontend Engineer with extensive experience at leading tech companies
                like Oracle and Amazon, I specialize in delivering cutting-edge web solutions
                that combine technical excellence with exceptional user experiences.
              </p>
              <p>
                My expertise spans across modern web technologies, with a particular focus on
                React, JavaScript, and CSS. I have a proven track record of leading teams,
                mentoring developers, and delivering high-impact projects that drive business
                success.
              </p>
              <p>
                I'm passionate about creating efficient, scalable, and maintainable code while
                staying current with the latest industry trends and best practices.
              </p>
            </Description>
            <Stats>
              <StatItem
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3>10+</h3>
                <p>Years Experience</p>
              </StatItem>
              <StatItem
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3>50+</h3>
                <p>Projects Completed</p>
              </StatItem>
              <StatItem
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3>5</h3>
                <p>Major Companies</p>
              </StatItem>
              <StatItem
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3>20+</h3>
                <p>Team Members Led</p>
              </StatItem>
            </Stats>
          </Content>
        </motion.div>
      </Container>
    </AboutSection>
  );
};

export default About; 