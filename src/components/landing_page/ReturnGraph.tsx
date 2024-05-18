import Rive, { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import { useEffect, useRef } from "react";

export const ReturnGraph = () => {
  const { rive, RiveComponent } = useRive({
    src: "/test.riv",
    stateMachines: ["Insight-2 Hover"],
    layout: new Layout({
      fit: Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
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
    <div ref={containerRef} className="absolute h-screen w-screen">
      <RiveComponent />
    </div>
  );
};
