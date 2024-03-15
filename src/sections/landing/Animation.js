'use client';

import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

// THIRD - PARTY
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

// =============================|| LANDING - FADE IN ANIMATION ||============================= //

function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.4 }}
      variants={{
        visible: { opacity: 1, translateY: 0 },
        hidden: { opacity: 0, translateY: 300 }
      }}
    >
      {children}
    </motion.div>
  );
}

FadeInWhenVisible.propTypes = {
  children: PropTypes.node
};

export default FadeInWhenVisible;
