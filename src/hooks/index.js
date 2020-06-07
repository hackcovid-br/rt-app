import { useState, useEffect } from 'react';

export function useMaxWidth(maxWidth = "600px") {
  const [isMobile, setIsMobile] = useState(false);

  function handleMatchMediaChange ({ matches }) {
    setIsMobile(matches);
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(`(max-width: ${maxWidth})`);
    setIsMobile(matchMedia.matches);
    matchMedia.addListener(handleMatchMediaChange);

    return () => matchMedia.removeListener(handleMatchMediaChange);
  }, []);

  return isMobile;

}