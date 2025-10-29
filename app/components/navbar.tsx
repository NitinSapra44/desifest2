"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { registerScrollTrigger } from "@/app/lib/scroll-manager"

// Register ScrollTrigger, which is an external plugin
gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
	const heroLinks = [
		{
			label: "the 2026 event",
			id: "the-2026-event",
		},
		{
			label: "our story",
			id: "our-story",
		},
		{
			label: "audience",
			id: "audience",
		},
		{
			label: "show details",
			id: "show-details",
		},
		{
			label: "sponsorship",
			id: "sponsorship",
		},
		{
			label: "why us",
			id: "why-us",
		},
		{
			label: "contact us",
			id: "contact-us",
		},
	]

	const container = useRef(null)


	useGSAP(
		() => {

			if (window.innerWidth < 1024) return;

			registerScrollTrigger(() => {
				const sections = gsap.utils.toArray<HTMLElement>("section[id]");
				const links = gsap.utils.toArray<HTMLElement>("#navbar .nav-link");
		
				// Create a ScrollTrigger for each section
				sections.forEach((section, index) => {
				ScrollTrigger.create({
					trigger: section,
					start: "top center",
					end: "bottom center",
					// helps ScrollTrigger handle pinned sections correctly
					anticipatePin: 1,
					// markers: true,
					onToggle: (self) => {
					if (self.isActive) {
						const link = links[index];
		
						// Reset all links
						links.forEach((el) => {
						const span = el.querySelector("span");
						const anchor = el.querySelector("a");
						if (span) {
							span.classList.remove("block");
							span.classList.add("hidden");
						}
						if (anchor) {
							anchor.classList.remove("text-text", "font-medium");
							anchor.classList.add("text-text/75", "font-light");
						}
						});
		
						// Highlight the active link
						const currentSpan = link.querySelector("span");
						const currentAnchor = link.querySelector("a");
						if (currentSpan) {
						currentSpan.classList.remove("hidden");
						currentSpan.classList.add("block");
						}
						if (currentAnchor) {
						currentAnchor.classList.remove("text-text/75", "font-light");
						currentAnchor.classList.add("text-text", "font-medium");
						}
					}
					},
				});
				});
			});
		},
		{ scope: container }
	  );
	

	return (
		<>
			<div id="navbar" ref={container} className=" hidden lg:flex flex-col gap-3">
				{heroLinks.map((link, i) => (
					<div
						className="nav-link flex items-center pl-4.5 relative"
						key={link.id}
					>
						<span
							className={`w-1.5 h-6 bg-[#FB0015] absolute left-0 top-1/2 -translate-y-1/2 ${i === 0 ? 'block' : 'hidden'}`}
						></span>
						<a
							href={`#${link.id}`}
							className={`text-xl uppercase ${i === 0 ? 'text-text font-medium' : 'text-text/75 font-light'}`}
						>
							{link.label}
						</a>
					</div>
				))}
			</div>
		</>
	)
}
