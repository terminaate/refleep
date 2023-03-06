import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import cl from './WindowImage.module.scss';

interface IWindowImage extends HTMLMotionProps<'img'> {
  title: string;
}

const WindowImage: FC<IWindowImage> = ({ title, className, ...props }) => {
  return (
    <div className={cl.imageContainer}>
      <div className={cl.titleContainer}>
        <h2 className={cl.title}>{title}</h2>
      </div>
      <AnimatePresence>
        <motion.img
          key={props.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{duration: 0.4}}
          className={cl.image}
          {...props}
        />
      </AnimatePresence>
    </div>
  );
};

export default WindowImage;
