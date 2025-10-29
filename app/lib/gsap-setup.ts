"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  anticipatePin: 1,
  invalidateOnRefresh: true,
});

export { gsap, ScrollTrigger };
