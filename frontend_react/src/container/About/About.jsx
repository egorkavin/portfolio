import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { getSpheres, urlFor } from '../../sanity';
import { AppWrap, MotionWrap } from '../../wrapper';

import './About.styles.scss';

const About = () => {
  const [spheres, setSpheres] = useState([]);

  useEffect(() => {
    getSpheres().then((spheres) => setSpheres(spheres));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Development</span>
        <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {spheres.map((sphere) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={sphere.title}
          >
            <img src={urlFor(sphere.imgUrl)} alt={sphere.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {sphere.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {sphere.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
