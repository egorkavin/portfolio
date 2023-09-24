import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { getSkills, getExperiences, urlFor } from '../../sanity';

import './Skills.styles.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [expiriences, setExpiriences] = useState([]);

  useEffect(() => {
    Promise.all([getSkills(), getExperiences()]).then(
      ([skills, expiriences]) => {
        setSkills(skills);
        setExpiriences(expiriences);
      }
    );
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Expirience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="app__skills-item app__flex"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {expiriences.map((expirience) => (
            <motion.div key={expirience.year} className="app__skills-exp-item">
              <div className="app__skills-exp-year">
                <p className="bold-text">{expirience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {expirience.works.map((work) => (
                  <>
                    <motion.div
                      key={work.name}
                      className="app__skills-exp-work"
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      data-tooltip-content={work.desc}
                      data-tooltip-id={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    />
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);
