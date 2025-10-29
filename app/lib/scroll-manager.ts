"use client";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ScrollSetupFn = () => void;
const triggerSetups: ScrollSetupFn[] = [];

/**
 * Register ScrollTrigger setup functions.
 */
export const registerScrollTrigger = (setupFn: ScrollSetupFn): void => {
  triggerSetups.push(setupFn);
};

/**
 * Initialize all registered ScrollTriggers.
 */
export const initScrollTriggers = (): void => {
  triggerSetups.forEach((setup) => setup());
  ScrollTrigger.refresh();
};

/**
 * Cleanup all existing ScrollTriggers and clear the registry.
 */
export const clearScrollTriggers = (): void => {
  ScrollTrigger.getAll().forEach((st) => st.kill());
  triggerSetups.length = 0;
};
