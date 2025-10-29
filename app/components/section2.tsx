"use client"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { useGSAP } from "@gsap/react"

// Register the plugin
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function Section2() {
	const section2Ref = useRef<HTMLDivElement | null>(null)
	const wrapperRef = useRef<HTMLDivElement | null>(null)
	const scrollTriggerRef = useRef<ScrollTrigger | null>(null)
	const [isPinned, setIsPinned] = useState(false)
	const [isMobile, setIsMobile] = useState(false)
	useGSAP(() => {

		console.log('i am here', window.innerWidth)
		setIsMobile(window.innerWidth < 1024)

		const section = section2Ref.current
		if (!section) return

		const wrapper = section.querySelector(
			".year-wrapper"
		) as HTMLDivElement | null
		if (!wrapper) return

		wrapperRef.current = wrapper

		if (window.innerWidth < 1024) return;
		const teamMembers = section.querySelectorAll(".year-member")

		// horizontal scroll animation
		gsap.to(wrapper, {
			xPercent: -80 * (teamMembers.length - 1),
			ease: "none",
			scrollTrigger: {
				trigger: section,
				pin: true,
				scrub: 1,
				start: "top top",
				// dynamically calculate correct scroll distance
				end: () => "+=" + (wrapper.scrollWidth - section.clientWidth),
				onUpdate: (self) => {
					scrollTriggerRef.current = self
					// Check if section is pinned
					setIsPinned(self.isActive && self.progress > 0)
				}
			},
		})

	}, [section2Ref])

	// Function to scroll to specific year
	const scrollToYear = (year: number) => {

		console.log('isMobile', isMobile, wrapperRef.current, section2Ref.current)
		if (!wrapperRef.current) return
		
		// For mobile, animate the scroll position
		if (isMobile) {
			// Calculate which index the year corresponds to
			let targetIndex = 0
			if (year === 2007) {
				targetIndex = 0 // 2007 is index 0
			} else if (year === 2012) {
				targetIndex = 5 // 2012 is index 5 (2007 + 5 = 2012)
			} else if (year === 2017) {
				targetIndex = 10 // 2017 is index 10 (2007 + 10 = 2017)
			} else if (year === 2022) {
				targetIndex = 15 // 2022 is index 15 (2007 + 15 = 2022)
			}
			
			// Calculate scroll position (100vw per item on mobile)
			const targetScrollLeft = targetIndex * window.innerWidth
			
			// Animate the scroll position for mobile
			gsap.to(wrapperRef.current, {
				scrollLeft: targetScrollLeft,
				duration: 0.5,
				ease: "power2.out"
			})
			return
		}
		
		// For desktop with ScrollTrigger
		if (!scrollTriggerRef.current) return
		
		const section = section2Ref.current
		if (!section) return
		const teamMembers = section.querySelectorAll(".year-member")
		
		// Calculate which index the year corresponds to
		let targetIndex = 0
		if (year === 2007) {
			targetIndex = 0 // 2007 is index 0
		} else if (year === 2012) {
			targetIndex = 5 // 2012 is index 5 (2007 + 5 = 2012)
		} else if (year === 2017) {
			targetIndex = 10 // 2017 is index 10 (2007 + 10 = 2017)
		} else if (year === 2022) {
			targetIndex = 15 // 2022 is index 15 (2007 + 15 = 2022)
		}
		
		// Calculate the target progress (0 to 1)
		const totalItems = teamMembers.length
		let targetProgress = targetIndex / (totalItems - 1)
		if (targetProgress === 0) targetProgress = 0.001
		
		// Get the ScrollTrigger instance
		const scrollTrigger = scrollTriggerRef.current
		
		// Calculate the target scroll position within the ScrollTrigger range
		const start = scrollTrigger.start
		const end = scrollTrigger.end
		const totalScrollDistance = end - start
		const targetScrollPosition = start + (totalScrollDistance * targetProgress)
		
		// Scroll to the target position - this will trigger the existing ScrollTrigger animation
		// Use GSAP for faster, more controlled animation
		gsap.to(window, {
			scrollTo: { y: targetScrollPosition },
			duration: 0.01,
			ease: "none"
		})
	}

	return (
		<div ref={section2Ref} className="lg:h-screen  relative overflow-hidden py-20 lg:py-0 ">
			{/* Navigation buttons - only show when pinned */}
			{(isPinned || isMobile) && (
				<div className="absolute top-6 left-0 lg:left-1/2 w-full lg:w-fit  lg:-translate-x-1/2 z-50 flex lg:gap-4 gap-2 justify-center lg:max-w-4xl">
					<button
						onClick={() => scrollToYear(2007)}
						className="bg-white/25 backdrop-blur-sm text-xs lg:text-base text-white px-1 lg:px-3 py-1 border border-white/30 hover:bg-white/30 transition-all duration-300 font-medium "
					>
						2007-2011
					</button>
					<button
						onClick={() => scrollToYear(2012)}
						className="bg-white/25 backdrop-blur-sm text-xs lg:text-base text-white px-3 py-1 border border-white/30 hover:bg-white/30 transition-all duration-300 font-medium "
					>
						2012-2016
					</button>
					<button
						onClick={() => scrollToYear(2017)}
						className="bg-white/25 backdrop-blur-sm text-xs lg:text-base text-white px-3 py-1 border border-white/30 hover:bg-white/30 transition-all duration-300 font-medium "
					>
						2017-2021
					</button>
					<button
						onClick={() => scrollToYear(2022)}
						className="bg-white/25 backdrop-blur-sm text-xs lg:text-base text-white px-3 py-1 border border-white/30 hover:bg-white/30 transition-all duration-300 font-medium "
					>
						2022-2026
					</button>
				</div>
			)}

			<div className="year-wrapper z-30 relative flex h-full w-auto overflow-x-scroll scrollbar-hidden lg:overflow-visible">
				{[...Array(19)].map((_, i) => (
					<div
						key={i}
						className="year-member relative z-20 lg:h-screen flex flex-col items-center pt-20 lg:pt-[150px] pb-16 gap-[48px] lg:gap-[152px] w-[100vw] lg:w-[80vw] flex-shrink-0"
					>
						<h2 className="text-white text-center flex justify-center items-center w-full  relative">
							{2007 + i}
							<img
								src="./line.svg"
								alt=""
								className="absolute w-[50vw] flex-none   translate-x-[80%]"
							/>
						</h2>

						<img
							src="./hero/line.svg"
							className="absolute hidden lg:block bottom-1/2 translate-y-24 translate-x-1/2 opacity-60 left-0 z-10 w-full h-3 object-cover"
							alt=""
						/>

						<div className="relative group z-20">
							<img
								src={`./timeline/${2007 + i}.png`}
								loading="lazy"
								alt=""
								className=" relative w-[80vw] lg:w-[400px]  h-auto object-cover z-20"
							/>
							<img
								src="./hero/bgimage.png"
								loading="lazy"
								alt=""
								className=" group-hover:rotate-[15deg] transition-all custom-time-effect duration-500 origin-top-left  group-hover:-translate-x-1/2 group-hover:translate-y-8  absolute w-[400px]  h-auto inset-0 z-10"
							/>
							<img
								src="./hero/bgimage2.png"
								loading="lazy"
								alt=""
								className="group-hover:rotate-[-15deg] transition-all custom-time-effect duration-500 origin-top-right  group-hover:translate-x-1/2 group-hover:translate-y-8  absolute w-[400px]  h-auto inset-0 z-10"
							/>
						</div>
					</div>
				))}

				<div className="  year-member relative z-20 lg:h-screen flex flex-col pt-20 lg:pt-[150px] pl-[32vw] pb-16 gap-[48px] w-[100vw] lg:w-[80vw] flex-shrink-0">
					<h2 className="text-white flex items-center w-full  relative">
						2026
						<img
							src="./line.svg"
							alt=""
							className="absolute w-[50vw] flex-none   translate-x-[80%]"
						/>
					</h2>

					<img
						src="./hero/line.svg"
						className="absolute hidden lg:block bottom-1/2 translate-y-24 translate-x-1/2 opacity-60 left-0 z-10 w-full h-3 object-cover"
						alt=""
					/>

					<div className="relative group z-20">
						<p className="absolute lg:block lg:text-4xl text-base text-white max-w-[800px]">
							In 2026, we celebrate two decades of music, culture,
							and unity. This isn’t just another festival year —
							it’s a milestone moment to honour our journey and
							amplify what’s next.
						</p>
					</div>
				</div>
			</div>

			<div className="absolute inset-0 z-10 bg-[#9b1207]"></div>

			<img
				loading="lazy"
				src="./section2bg.png"
				className="absolute bottom-0 left-0  z-20 w-full opacity-50 blur-[10.6] mix-blend-color-burn"
				alt=""
			/>
		</div>
	)
}
