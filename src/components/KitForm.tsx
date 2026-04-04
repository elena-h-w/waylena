import { useEffect, useRef } from 'react';

export default function KitForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://waylena.kit.com/ea3026dfae/index.js';
    script.async = true;
    script.setAttribute('data-uid', 'ea3026dfae');
    containerRef.current?.appendChild(script);

    return () => {
      if (containerRef.current && script.parentNode === containerRef.current) {
        containerRef.current.removeChild(script);
      }
    };
  }, []);

  return <div ref={containerRef} />;
}
