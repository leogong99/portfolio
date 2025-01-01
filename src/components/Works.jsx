import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const WorksSection = styled.section`
  padding: 100px 0;
  background: #f8f9fa;
`;

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const WorkCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const WorkImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
  }
`;

const WorkContent = styled.div`
  padding: 1.5rem;
`;

const WorkTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #2d3436;
`;

const WorkCompany = styled.span`
  color: #6c5ce7;
  font-weight: 500;
  font-size: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const TechTag = styled.span`
  background: #e9ecef;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  color: #495057;
`;

const works = [
  {
    title: "Career Portal Development",
    company: "Amazon",
    description: "Led the development of Amazon's job search and application platform, improving the candidate experience for millions of applicants worldwide.",
    image: "/images/amazon-careers.jpg",
    tech: ["React", "TypeScript", "A11y", "Live Search"],
    link: "https://amazon.jobs/search"
  },
  {
    title: "Applicant Dashboard",
    company: "Amazon",
    description: "Designed and implemented the candidate application tracking system, enabling seamless application management and status monitoring.",
    image: "/images/amazon-dashboard.jpg",
    tech: ["React", "Redux", "Node.js","Dynamic Forms"],
    link: "https://amazon.jobs/en-US/applicant"
  },
  {
    title: "Mortgage Calculator",
    company: "Vancity",
    description: "Developed an interactive financial calculator with real-time updates, amortization schedules, and payment comparisons.",
    image: "/images/vancity-calculator.jpg",
    tech: ["JavaScript", "HighChart", "Styled Components"],
    link: "https://www.vancity.com/borrow/mortgages/calculator/"
  }
];

const Works = () => {
  return (
    <WorksSection id="works">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Featured Works</h2>
        <WorkGrid>
          {works.map((work, index) => (
            <WorkCard
              key={work.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <WorkContent>
                <WorkTitle>{work.title}</WorkTitle>
                <WorkCompany>{work.company}</WorkCompany>
                <p style={{ margin: '1rem 0', color: '#636e72' }}>
                  {work.description}
                </p>
                <TechStack>
                  {work.tech.map(tech => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>
                <motion.a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    marginTop: '1rem',
                    color: '#6c5ce7',
                    textDecoration: 'none'
                  }}
                  whileHover={{ x: 5 }}
                >
                  View Project →
                </motion.a>
              </WorkContent>
            </WorkCard>
          ))}
        </WorkGrid>
      </motion.div>
    </WorksSection>
  );
};

export default Works; 