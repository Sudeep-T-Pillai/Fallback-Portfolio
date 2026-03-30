"use client";
import { useEffect, useRef } from "react";

export default function FloatingAstronaut() {
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    let vx = 0.3; // horizontal speed
    let vy = -0.2; // vertical speed

    const animate = () => {
        x += vx;
        y += vy;

        // 🧠 add slight randomness (space drift)
        vx += (Math.random() - 0.5) * 0.02;
        vy += (Math.random() - 0.5) * 0.02;

        // limit speed (important)
        vx = Math.max(-0.6, Math.min(0.6, vx));
        vy = Math.max(-0.6, Math.min(0.6, vy));

        // ✅ WRAP
        if (x > window.innerWidth) x = 0;
        if (x < 0) x = window.innerWidth;
        if (y > window.innerHeight) y = 0;
        if (y < 0) y = window.innerHeight;

        if (ref.current) {
            ref.current.style.transform = `translate(${x}px, ${y}px) rotate(${vx * 50}deg)`;
        }

        requestAnimationFrame(animate);
     };

    animate();
  }, []);

  return (
    <img
      ref={ref}
      src="/astronaut.svg"
      className="fixed w-16 pointer-events-none"
    />
  );
}