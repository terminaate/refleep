import { useEffect, useRef } from 'react';

export default <T = HTMLElement>(
  cb: (isVisible: boolean) => void,
  options: IntersectionObserverInit = {},
) => {
  const elementRef = useRef<T>(null);

  if (typeof window !== 'undefined'&& typeof document !== "undefined") {
    const observerRef = useRef(
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          cb(entry.isIntersecting);
        });
      }, options),
    );

    useEffect(() => {
      observerRef.current.observe(elementRef.current as HTMLElement);

      return () => {
        observerRef.current.unobserve(elementRef.current as HTMLElement);
      };
    }, []);
  }
  return elementRef;
};
