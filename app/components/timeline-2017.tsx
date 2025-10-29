"use client"
import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function Timeline2017() {
	const sectionRef = useRef<HTMLDivElement | null>(null)
	const wrapperRef = useRef<HTMLDivElement | null>(null)

	useGSAP(() => {
		const section = sectionRef.current
		if (!section) return

		const wrapper = section.querySelector(".year-wrapper") as HTMLDivElement | null
		if (!wrapper) return

		wrapperRef.current = wrapper
		const teamMembers = section.querySelectorAll(".year-member")

		// horizontal scroll animation for 2017-2021 range (manual mode only)
		gsap.to(wrapper, {
			xPercent: -80 * (teamMembers.length - 1),
			ease: "none",
			scrollTrigger: {
				trigger: section,
				pin: true,
				scrub: 2, // Slower scroll timing
				start: "top top",
				// Fixed scroll distance - 5 years = 4 * 80vw = 320vw
				end: "+=320vw", // Fixed distance for 5 years
				// No auto scroll - manual mode only
			},
		})

	}, [sectionRef])

	return (
		<div ref={sectionRef} className="h-screen relative overflow-hidden">
			<div className="year-wrapper z-30 relative flex h-full w-auto">
				{[...Array(5)].map((_, i) => (
					<div
						key={i}
						className="year-member relative z-20 h-screen flex flex-col items-center justify-center pt-[100px] pb-16 gap-[80px] w-[80vw] flex-shrink-0"
					>
						<h2 className="text-white text-center flex justify-center items-center w-full relative">
							{2017 + i}
							<img
								src="./line.svg"
								alt=""
								className="absolute w-[50vw] flex-none translate-x-[80%]"
							/>
						</h2>

						<img
							src="./hero/line.svg"
							className="absolute bottom-1/2 translate-y-24 translate-x-1/2 opacity-60 left-0 z-10 w-full h-3 object-cover"
							alt=""
						/>

						<div className="relative group z-20 flex flex-col items-center">
							<div className="relative">
								<img
									src={`./timeline/${2017 + i}.png`}
									loading="lazy"
									alt=""
									className="relative w-[350px] h-[250px] object-cover z-20 rounded-lg shadow-2xl"
								/>
								<img
									src="./hero/bgimage.png"
									loading="lazy"
									alt=""
									className="group-hover:rotate-[15deg] transition-all custom-time-effect duration-500 origin-top-left group-hover:-translate-x-1/2 group-hover:translate-y-8 absolute w-[350px] h-[250px] inset-0 z-10 rounded-lg"
								/>
								<img
									src="./hero/bgimage2.png"
									loading="lazy"
									alt=""
									className="group-hover:rotate-[-15deg] transition-all custom-time-effect duration-500 origin-top-right group-hover:translate-x-1/2 group-hover:translate-y-8 absolute w-[350px] h-[250px] inset-0 z-10 rounded-lg"
								/>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="absolute inset-0 z-10 bg-[#9b1207]"></div>

			<img
				loading="lazy"
				src="./section2bg.png"
				className="absolute bottom-0 left-0 z-20 w-full opacity-50 blur-[10.6] mix-blend-color-burn"
				alt=""
			/>
		</div>
	)
}
