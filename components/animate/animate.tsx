"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimateProps {
  children: React.ReactNode;
  directionX?: number;
  directionY?: number;
  classname?: string;
  delay?: number;
  index?: number;
}

export const AnimatedNavBar: React.FC<AnimateProps> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      opacity: { duration: 0.1, type: "spring" },
      y: { type: "spring", stiffness: 150, damping: 20 },
    }}>
    {children}
  </motion.div>
);

export const AnimatedCard: React.FC<AnimateProps> = ({
  children,
  directionX = 0,
  directionY = 0,
  classname = "",
  delay = 0,
}) => {
  const [ref, inView] = useInView({
    rootMargin: "-100px",
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: directionX, y: directionY }}
      animate={{
        opacity: inView ? 1 : 0,
        x: inView ? 0 : directionX,
        y: inView ? 0 : directionY,
      }}
      transition={{
        opacity: { type: "spring" },
        x: {
          type: "spring",
          stiffness: 150,
          damping: 20,
        },
        y: {
          type: "spring",
          stiffness: 150,
          damping: 20,
        },
      }}
      className={classname}>
      {children}
    </motion.div>
  );
};

export const AnimatedLogo: React.FC<AnimateProps> = ({
  index = 0,
  children,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : -50,
      }}
      transition={{
        opacity: { duration: 0.5, type: "tween", delay: index * 0.2 },
        y: {
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: index * 0.2,
        },
      }}>
      {children}
    </motion.div>
  );
};

export const AnimatedText: React.FC<AnimateProps> = ({
  children,
  classname = "",
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
      transition={{
        opacity: { duration: 0.5, type: "tween", delay: 0.5 },
        scale: {
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: 0.5,
        },
      }}
      className={classname}>
      {children}
    </motion.div>
  );
};

export const Hover = {
  classes: "transition-transform duration-200 hover:scale-105 cursor-pointer",
};

export const HoverLogo = {
  classes: "transition-transform duration-200 hover:scale-110 cursor-pointer",
};
