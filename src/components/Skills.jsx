import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaCss3Alt, FaHtml5, FaGitAlt, FaNode } from 'react-icons/fa';
import { SiTypescript, SiRedux, SiWebpack, SiJest } from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 100px 2rem;
  background: white;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled.div`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: #2d3436;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  color: #636e72;

  svg {
    color: #6c5ce7;
    font-size: 1.5rem;
  }
`;

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "Redux", icon: <SiRedux /> }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Node.js", icon: <FaNode /> },
        { name: "Webpack", icon: <SiWebpack /> },
        { name: "Jest", icon: <SiJest /> },
        { name: "CI/CD", icon: <FaGitAlt /> },
        { name: "RESTful APIs", icon: <FaNode /> }
      ]
    },
    {
      title: "Core Competencies",
      skills: [
        { name: "Performance Optimization" },
        { name: "Responsive Design" },
        { name: "Code Review" },
        { name: "Team Leadership" },
        { name: "Agile/Scrum" },
        { name: "Mentoring" }
      ]
    }
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title>Skills & Expertise</Title>
          <SkillsGrid>
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <SkillCategory>
                  <CategoryTitle>{category.title}</CategoryTitle>
                  <SkillsList>
                    {category.skills.map((skill, i) => (
                      <SkillItem
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {skill.icon}
                        <span>{skill.name}</span>
                      </SkillItem>
                    ))}
                  </SkillsList>
                </SkillCategory>
              </motion.div>
            ))}
          </SkillsGrid>
        </motion.div>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 