import useThrottle from "./hook/useThrottle";
import { useState, useEffect } from "react";

const ScrollTracker = () => {
  const [scrollY, setScrollY] = useState(0);

  const throttledY = useThrottle(scrollY, 3000);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="border h-48 p-1">
      <h2 className="text-xl">Scroll Position (Throttled)</h2>
      <p>{throttledY}</p>
    </div>
  );
};

export default ScrollTracker;
