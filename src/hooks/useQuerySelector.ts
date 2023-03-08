import { useEffect, useRef, useState } from 'react';

export default function useQuerySelector(
  selector: string,
): [boolean, HTMLElement | null] {
  const ref = useRef<null | HTMLElement>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, []);

  return [mounted, ref.current];
}
