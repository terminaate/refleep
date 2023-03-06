import { FC, useState } from 'react';
import cl from './Quality.module.scss';
import classNames from 'classnames';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface IQuality {
  title: string;
  description: string;
  className?: string;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const Quality: FC<IQuality> = ({
  containerClassName,
  descriptionClassName,
  titleClassName,
  description,
  className,
  title,
}) => {
  const [titleVisible, setTitleVisible] = useState<boolean>(false);
  const titleRef = useIntersectionObserver<HTMLHeadingElement>(
    setTitleVisible,
    true,
  );
  const [descriptionVisible, setDescriptionVisible] = useState<boolean>(false);
  const descriptionRef = useIntersectionObserver<HTMLSpanElement>(
    setDescriptionVisible,
    true,
  );

  return (
    <div className={classNames(cl.quality, className)}>
      <div className={classNames(cl.container, containerClassName)}>
        <h3
          ref={titleRef}
          data-visible={titleVisible}
          className={classNames(cl.title, titleClassName)}
        >
          {title}
        </h3>
        <span
          ref={descriptionRef}
          data-visible={descriptionVisible}
          className={classNames(cl.description, descriptionClassName)}
        >
          {description}
        </span>
      </div>
    </div>
  );
};

export default Quality;
