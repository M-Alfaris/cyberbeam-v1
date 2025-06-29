import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 mesh-bg opacity-50" />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-supabase-green/10 to-supabase-blue/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-supabase-purple/10 to-supabase-green/10 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-r from-supabase-blue/15 to-supabase-purple/15 rounded-full blur-2xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -80, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Subtle scan lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-supabase-green/5 to-transparent animate-pulse-slow" />
    </div>
  );
};

export default BackgroundEffects;