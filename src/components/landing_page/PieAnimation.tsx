import Rive, { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import { useEffect, useRef, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};


export const PieAnimation = () => {
  const size = useWindowSize();
  const isMobile = size.width < 650;

  console.log(`width: ${size.width}`);

  const { rive, RiveComponent } = useRive({
    src: isMobile ? "/3d_pie_chart_mobile.riv" : "/3d_pie_chart.riv",
    stateMachines: ["pieIn"],
    layout: new Layout({
      fit: Fit.Contain, // Change to: rive.Fit.Contain, or Cover
      alignment: Alignment.Center,
    }),
    autoplay: false,
  });

  const containerRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeoutRef.current = window.setTimeout(() => {
              rive && rive.play();
            }, 2000);
          } else {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
              timeoutRef.current = null;
            }
            rive && rive.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    console.log(`width: ${size.width}`);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [rive]);

  return (
    <div ref={containerRef} className="absolute inset-0 h-screen w-screen">
      <RiveComponent />
    </div>
  );
};
