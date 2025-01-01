import styled from '@emotion/styled';
import { motion, useScroll, useSpring } from 'framer-motion';

const ExperienceSection = styled.section`
  padding: 120px 2rem;
  background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(180deg, white 0%, transparent 100%);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #2d3436;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    width: 3px;
    height: 100%;
    background: linear-gradient(180deg, #6c5ce7 0%, #a29bfe 100%);
    box-shadow: 0 0 15px rgba(108, 92, 231, 0.3);
    
    @media (max-width: 768px) {
      left: 16px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: ${props => props.align === 'right' ? 'flex-start' : 'flex-end'};
  padding-bottom: 3rem;
  width: 100%;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 45px;
  }
`;

const TimelineContent = styled.div`
  width: 45%;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.5) inset;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 8px 30px rgba(108, 92, 231, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.5) inset;
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: #6c5ce7;
  border-radius: 50%;
  box-shadow: 0 0 0 4px white, 0 0 0 8px rgba(108, 92, 231, 0.2);
  
  @media (max-width: 768px) {
    left: 16px;
  }
`;

const Company = styled.h3`
  font-size: 1.5rem;
  color: #2d3436;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const Role = styled.h4`
  font-size: 1.1rem;
  color: #6c5ce7;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const Description = styled.ul`
  list-style: none;
  padding-left: 0;
  color: #636e72;
  
  li {
    margin-bottom: 0.8rem;
    padding-left: 1.5rem;
    position: relative;
    
    &::before {
      content: '→';
      position: absolute;
      left: 0;
      color: #6c5ce7;
    }
  }
`;

const Experience = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const experiences = [
    {
      company: "Oracle",
      role: "Principal Member Of Technical Staff",
      achievements: [
        "Spearheaded the development of a high-priority change events plugin",
        "Led the creation of a browser-based IDE",
        "Optimized code editor initiation, reducing loading time by 50%",
        "Implemented advanced caching mechanisms",
        "Delivered an AI assistant VSCode plugin for Oracle OpenWorld keynote demos"
      ]
    },
    {
      company: "Amazon",
      role: "Web Development Engineer",
      achievements: [
        "Rebuilt Amazon's job search page",
        "Pioneered a job application wizard",
        "Engineered a React component wrapper for legacy Angular systems",
        "Improved web performance and user experience"
      ]
    },
    {
      company: "Samsung Electronic Canada",
      role: "Front-end Engineer",
      achievements: [
        "Developed the SamsungKnox front end using MVC design pattern",
        "Separated business logic from presentation layer",
        "Enhanced maintainability and scalability"
      ]
    },
    {
      company: "Central 1 Credit Union",
      role: "Front-end Developer",
      achievements: [
        "Spearheaded development of complex financial calculators",
        "Delivered major contributions to high-stakes projects",
        "Revolutionized credit union services for millions of users"
      ]
    },
    {
        company: "Delta Control",
        role: "Software Engineer",
        achievements: [
          "Developed and maintained software applications for embedded system UI interfaces, enhancing performance",
          "Created a UI touch screen feature for building automation, streamlining user control",
        ]
      }
  ];

  return (
    <ExperienceSection id="experience">
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '5px',
          background: '#6c5ce7',
          transformOrigin: '0%',
          scaleX: scaleX
        }}
      />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Title>Experience</Title>
          <Timeline>
            {experiences.map((exp, index) => (
              <TimelineItem
                key={exp.company}
                align={index % 2 === 0 ? 'right' : 'left'}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100 
                }}
              >
                <TimelineDot />
                <TimelineContent>
                  <Company>{exp.company}</Company>
                  <Role>{exp.role}</Role>
                  <Description>
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </Description>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </Container>
    </ExperienceSection>
  );
};

export default Experience; 