"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NumberCounter({ target = 1000000, duration = 2 }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obj = { val: 0 };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        once: true,
      },
    });

    tl.to(obj, {
      val: target,
      duration,
      ease: "power1.out",
      onUpdate: () => {
        if (ref.current) {
          // Add standard US-style commas, e.g. 1,000,000
          ref.current.textContent = Math.floor(obj.val).toLocaleString("en-US");
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [target, duration]);

  return <span ref={ref}>0</span>;
}
