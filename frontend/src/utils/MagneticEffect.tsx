"use client";

import { useEffect, useRef, useState } from "react";
import { isTouchDevice } from "./deviceCheck";

interface MagneticEffectProps {
  speed?: number;
  distance?: number;
  smoothness?: number;
  children: React.ReactNode;
}

const MagneticEffect = ({
  speed = 0.6,
  distance = 30,
  smoothness = 0.7,
  children,
}: MagneticEffectProps) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [mount, setMount] = useState(false);
  let animationFrame: number | null = null;

  useEffect(() => {
    if (isTouchDevice()) {
      setMount(true);
    }
  }, []);

  const calculatePosition = (event: MouseEvent) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x =
      ((event.clientX - rect.left - rect.width / 2) / speed) * (distance / 100);
    const y =
      ((event.clientY - rect.top - rect.height / 2) / speed) * (distance / 100);

    buttonRef.current.style.transform = `translate3D(${x}px, ${y}px, 0)`;
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (animationFrame) cancelAnimationFrame(animationFrame);
    animationFrame = requestAnimationFrame(() => calculatePosition(event));
  };

  const handleMouseLeave = () => {
    if (animationFrame) cancelAnimationFrame(animationFrame);
    if (buttonRef.current) {
      buttonRef.current.style.transform = "";
    }
  };

  // если сенсор
  if (mount) return <div className="relative inline-block">{children}</div>;

  // без сенсора
  return (
    <div
      ref={buttonRef}
      className="relative inline-block"
      onMouseMove={(e) => handleMouseMove(e.nativeEvent)}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: `transform ${smoothness}s cubic-bezier(0.34, 1.5, 0.64, 1)`,
      }}
    >
      {children}
    </div>
  );
};

export default MagneticEffect;
