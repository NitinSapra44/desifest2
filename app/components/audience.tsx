"use client"

import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import NumberCounter from "./number-counter"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function Audience() {
	const audSlider1Ref = useRef<HTMLDivElement>(null)
	const audSlider2Ref = useRef<HTMLDivElement>(null)
	const audSectionRef = useRef<HTMLDivElement>(null)
	const audReachRef = useRef<HTMLDivElement>(null)
	const itemsRef = useRef<HTMLDivElement[]>([])
	const [currentSlide, setCurrentSlide] = useState(0)

	useEffect(() => {
		const outer = audSectionRef.current
		const inner = audSlider1Ref.current
		const inner2 = audSlider2Ref.current
		if (!outer || !inner || !inner2) return

		const ctx = gsap.context(() => {
			// Animate first inner box (moves down 80px)
			gsap.fromTo(
				inner,
				{ x: "-120vw" },
				{
					x: 0,
					opacity: 1,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: outer,
						start: "bottom center",
						end: "bottom top",
						toggleActions: "play none none reverse",
					},
				}
			)

			// Animate second inner box (moves down 150px)
			gsap.fromTo(
				inner2,
				{ x: "120vw" },
				{
					x: 0,
					opacity: 1,
					duration: 1.2,
					ease: "power3.out",
					scrollTrigger: {
						trigger: outer,
						start: "bottom center",
						end: "bottom top",
						toggleActions: "play none none reverse",
					},
				}
			)
		}, outer)

		return () => ctx.revert() // cleanup on unmount
	}, [])

	useEffect(() => {
		gsap.set("#audience-line-image", {
			opacity: 0,
		})

		gsap.to("#audience-line-image", {
			opacity: 1,
			duration: 1,
			ease: "power3.easeInOut",
			scrollTrigger: {
				trigger: "#audience-line",
				start: "top center",
				end: "bottom top",
				// markers: true,
				toggleActions: "play none none reverse",
			},
		})
	}, [])

	// Horizontal scroll for audience reach section
// Horizontal scroll for audience reach section
useEffect(() => {
	if (window.innerWidth < 1024) return

	const reachSection = audReachRef.current
	if (!reachSection) return

	const wrapper = reachSection.querySelector(".aud-reach-wrapper") as HTMLElement
	if (!wrapper) return

	const items = gsap.utils.toArray(".aud-reach-item")

	const totalSlides = items.length
	const scrollTween = gsap.to(wrapper, {
		xPercent: -100 * (totalSlides - 1),
		ease: "none",

		scrollTrigger: {
			trigger: reachSection,
			pin: true,
			scrub: 1,
			start: "top top",
			end: () => "+=" + ((wrapper.scrollWidth - reachSection.clientWidth)+ window.innerWidth * 0.8),

			//  + window.innerWidth * 2
			snap: {
				snapTo: 1 / (totalSlides - 1), // snap to each slide
				duration: 0.1,                 // smooth snapping duration
				ease: "power1.inOut"
			},
			onUpdate: (self) => {
				const progress = Math.round(self.progress * (totalSlides - 1))
				setCurrentSlide(progress)
			},
			// markers: true, // uncomment for debugging
		},
	})

	return () => {
		scrollTween.scrollTrigger?.kill()
		scrollTween.kill()
	}
}, [])



	function handleRightSlide() {
		const container = audSectionRef.current
		if (!container) return

		if (currentSlide === 4) return

		const items = gsap.utils.toArray<HTMLDivElement>(".aud-reach-item")

		console.log('items', items)

		items.forEach((item) => {
			gsap.to(item, {
				x: "-=100%",
				duration: 1,
				ease: "power3.out",
			})
		})

		setCurrentSlide((prev) => prev + 1)

    }

    function handleLeftSlide() {
		const container = audSectionRef.current
		if (!container) return

		if (currentSlide === 0) return

		const items = gsap.utils.toArray<HTMLDivElement>(".aud-reach-item")

		items.forEach((item) => {
			gsap.to(item, {
				x: "+=100%",
				duration: 1,
				ease: "power3.out",
			})
		})

		setCurrentSlide((prev) => prev - 1)
    }

	return (
		<div className="relative overflow-hidden bg-black">
			<section
				ref={audSectionRef}
				id="audience"
				className=" bg-foreground px-6 pt-16 pb-24 lg:pb-[220px] relative"
			>
				<img
					loading="lazy"
					src="./audience.png"
					alt=""
					className=" audience-overlay absolute right-0 z-10 top-0 w-full h-auto"
				/>

				<div className="max-w-[800px] mx-auto z-30 relative">
					<h2 className="flex lg:!text-[87px] text-4xl items-center gap-4 text-white mb-16">
						<span className="w-1.5 h-18 bg-[#FB0015]"></span>
						audience breakdown
					</h2>

					<div className="grid grid-cols-3 text-white mb-4">
						<div></div>
						<p className=" text-sm lg:text-[30px] text-center font-extrabold">
							2024
						</p>
						<p className=" text-sm lg:text-[30px] text-center font-extrabold">
							2025
						</p>
					</div>

					<div className="grid grid-cols-3 text-white mb-16">
						<div className="grid py-14 gap-16 lg:px-4">
							<p className=" text-sm lg:text-[22px] font-bold">
								OUT-OF-TOWN ATTENDANCE
							</p>

							<p className=" text-sm lg:text-[22px] font-bold">
								FESTIVAL ATTENDANCE
							</p>

							<p className=" text-sm lg:text-[22px] font-bold">
								AGE GROUP
							</p>
							<p className=" text-sm lg:text-[22px] font-bold">
								SOCIAL MEDIA FANS
							</p>
							<p className=" text-sm lg:text-[22px] font-bold">
								TOTAL REACH & IMPRESSIONS
							</p>
							<p className=" text-sm lg:text-[22px] font-bold">
								PERFORMERS
							</p>
						</div>
						<div className="grid audience-gradient justify-center items-center py-14 gap-16">
							<p className=" text-sm lg:text-[30px] font-extrabold text-center">
								<NumberCounter target={25} duration={1} />%
							</p>
							<p className=" text-sm lg:text-[30px] font-extrabold text-center">
								<NumberCounter target={52000} duration={1} />
							</p>
							<p className=" text-sm lg:text-[30px] font-extrabold text-center">
								15-65
							</p>
							<p className=" text-sm lg:text-[30px] font-extrabold text-center">
								<NumberCounter target={25000} duration={1} />
							</p>
							<p className=" text-sm lg:text-[30px] font-extrabold uppercase text-center">
								<NumberCounter target={30} duration={1} />{" "}
								million
							</p>
							<p className=" text-sm lg:text-[30px] font-extrabold text-center">
								<NumberCounter target={18} duration={1} />
							</p>
						</div>

						<div className=" py-14 relative">
							<div className="absolute inset-0 z-10 bg-white/10"></div>

							<div className="grid gap-16 h-full justify-center items-center relative z-30">
								<p className=" text-sm lg:text-[30px] font-extrabold text-center">
									<NumberCounter target={30} duration={1} />%
								</p>
								<p className=" text-sm lg:text-[30px] font-extrabold text-center">
									<NumberCounter
										target={65000}
										duration={1}
									/>
								</p>
								<p className=" text-sm lg:text-[30px] font-extrabold text-center">
									18-65
								</p>
								<p className=" text-sm lg:text-[30px] font-extrabold text-center">
									<NumberCounter
										target={41000}
										duration={1}
									/>
								</p>
								<p className=" text-sm lg:text-[30px] font-extrabold uppercase text-center">
									<NumberCounter target={45} duration={1} />{" "}
									million
								</p>
								<p className=" text-sm lg:text-[30px] font-extrabold text-center">
									<NumberCounter target={28} duration={1} />
								</p>
							</div>
						</div>
					</div>

					{/* <div className="grid grid-cols-3 text-white mb-16">
						<div></div>
						<div className="col-span-2">
							<ul className="list-disc list-inside">
								<li>60,000+ in-person festival attendees</li>
								<li>
									100,000+ drop-in visitors at Sankofa Square
								</li>
								<li>30 million+ total digital impressions</li>
								<li>
									80% South Asian / 20% multicultural audience
									mix
								</li>
								<li>
									Majority aged 18–65, with strong family
									attendance.Our bullseye is 19 to 25 year old
									students, young professionals and new
									families
								</li>
							</ul>
						</div>
					</div> */}

					<div className="flex items-center lg:gap-32 gap-8 lg:pt-32">
						<div className="flex gap-5 lg:gap-10 items-center">
							<img
								loading="lazy"
								src="./female.svg"
								className="lg:h-[278px] h-20 w-auto flex-none"
								alt=""
							/>
							<label
								className="lg:text-[87px] text-2xl font-extrabold font-heading text-[#AB1218]"
								htmlFor="female"
							>
								<NumberCounter target={40} duration={1} />%
							</label>
						</div>

						<div className="flex gap-5 lg:gap-10 items-center">
							<img
								loading="lazy"
								src="./male.svg"
								className="lg:h-[278px] h-20 w-auto flex-none"
								alt=""
							/>
							<label
								className="lg:text-[87px] text-2xl font-extrabold font-white text-white"
								htmlFor="male"
							>
								<NumberCounter target={60} duration={1} />%
							</label>
						</div>
					</div>
				</div>
			</section>

			{/* animated elemented */}
			<div
				ref={audSlider1Ref}
				className="lg:h-[400px] h-[200px] w-[110vw] absolute z-30 bg-[#AB1218] flex items-center justify-center gap-12 lg:gap-56 text-white rotate-[8deg]"
			>
				<div>
					<h2 className=" text-[24px] lg:text-[126px] font-extrabold">
						80%
					</h2>
					<p className="lg:text-[40px] text-base font-medium uppercase">
						South asians
					</p>
				</div>

				<div>
					<h2 className=" text-[24px] lg:text-[126px] font-extrabold">
						20%
					</h2>
					<p className="lg:text-[40px] text-base font-medium uppercase">
						non-south asians
					</p>
				</div>
			</div>

			<div
				ref={audSlider2Ref}
				className="lg:h-[400px] h-[200px] w-[110vw] absolute z-20 bg-gradient-to-r from-[#AB1218] to-[#45070A] flex items-center justify-center gap-56 text-white rotate-[-6deg]"
			></div>

			{/* spending power */}
			<div className="pb-1  bg-black  relative ">
				<div className="absolute top-32 left-0 z-10 flex items-center">
					<img
						loading="lazy"
						src="./radialbg.svg"
						alt=""
						className=" w-[100%] h-auto"
					/>
				</div>

				<div className="lg:h-[500px] h-[400px]"></div>

				<div className="max-w-[800px] mx-auto  text-white text-center relative z-30">
					<label
						className=" text-base lg:text-[28px] font-medium"
						htmlFor=""
					>
						SPENDING POWER
					</label>
					<h2 className="text-6xl lg:text-[120px] mb-2">
						$<NumberCounter target={49} duration={1} />B
					</h2>
					<p className=" text-sm lg:text-xl font-medium mb-12">
						SOUTH-ASIAN CANADIAN BUYING POTENTIAL
					</p>

					<div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
						<p className="font-normal text-base lg:text-xl audience_chipbg px-8 py-1.5 text-nowrap">
							Food & Dining
						</p>

						<p className="font-normal text-base lg:text-xl audience_chipbg px-8 py-1.5 text-nowrap">
							Fashion & Beauty
						</p>

						<p className="font-normal text-base lg:text-xl audience_chipbg px-8 py-1.5 text-nowrap">
							Technology
						</p>

						<p className="font-normal text-base lg:text-xl audience_chipbg px-8 py-1.5 text-nowrap">
							Travel & Education
						</p>
					</div>
				</div>
			</div>

			<div
				id="audience-line"
				className="relative mb-8 mt-12  lg:mt-36 lg:mb-32"
			>
				<img
					src="./audienceline.svg"
					alt=""
					className="bg-black w-full h-auto"
				/>

				<img
					id="audience-line-image"
					loading="lazy"
					src="./11am.svg"
					alt=""
					className=" object-cover bg-black w-full h-auto absolute inset-0"
				/>
			</div>

			{/* reach */}
			<div className=" bg-black text-white relative py-16">
				<img
					src="./audiencebg.svg"
					alt=""
					className="absolute bottom-0 left-0 w-full object-cover object-top h-[400px] lg:h-[1000px]"
				/>

				<div className="max-w-[700px] mx-auto mb-20 lg:mb-[160px] relative z-30 px-6">
					<h2 className="flex lg:!text-[87px] text-4xl items-center gap-4 text-white mb-8">
						<span className="w-1.5 h-18 bg-[#FB0015]"></span>
						audience & reach
					</h2>

					<p className=" text-sm lg:text-2xl font-normal leading-snug ">
						Our audience extends far beyond the square, with massive
						online engagement and national media visibility.
					</p>
				</div>

				<div
					ref={audReachRef}
					className="lg:h-screen relative overflow-hidden px-6"
				>
					<div className="aud-reach-wrapper flex h-full w-auto">
						<div
							ref={(el) => {
								if (el) itemsRef.current[0] = el
							}}
							className="aud-reach-item lg:h-screen w-screen flex-shrink-0 grid grid-cols-2 items-center relative z-30"
						>
							<div className="">
								<img
									src="./audience1.png"
									loading="lazy"
									alt=""
									className="w-[80%] h-auto"
								/>
							</div>

							<div className="grid gap-12 relative">
								<div className="absolute top-0 -translate-x-full left-0 text-text lg:text-4xl text-base font-bold uppercase bg-foreground lg:px-6 px-4 py-3 w-fit">
									INFLUENCER
									<br />
									PARTNERSHIPS:
								</div>

								<div className="grid gap-1">
									<h2 className="lg:text-[96px] text-3xl mission_text text-center">
										<NumberCounter
											target={300}
											duration={1}
										/>
										k+
									</h2>
									<span className="lg:text-4xl text-base font-medium uppercase text-center">
										Views
									</span>
								</div>

								<div className="grid gap-1">
									<h2 className="lg:text-[96px] text-3xl mission_text text-center">
										<NumberCounter
											target={2}
											duration={1}
										/>
										k+
									</h2>
									<span className="lg:text-4xl text-base font-medium uppercase text-center">
										shares
									</span>
								</div>

								<div className="grid gap-1">
									<h2 className="lg:text-[96px] text-3xl mission_text text-center">
										1k+
									</h2>
									<span className="lg:text-4xl text-base font-medium uppercase text-center">
										saves
									</span>
								</div>
							</div>
						</div>

						<div
							ref={(el) => {
								if (el) itemsRef.current[1] = el
							}}
							className="aud-reach-item lg:h-screen w-screen flex-shrink-0 grid grid-cols-2 items-center relative z-30"
						>
							<div className="">
								<img
									src="./audience2.png"
									loading="lazy"
									alt=""
									className="w-[80%] h-auto"
								/>
							</div>

							<div className="grid gap-12 relative">
								<div className="absolute top-0 -translate-x-full left-0 text-text lg:text-4xl text-base font-bold uppercase bg-foreground lg:px-6 px-4 py-3 w-fit">
									CELEBRITY
									<br />
									ENDORSEMENTS:
								</div>

								<div className="grid gap-1">
									<h2 className="lg:text-[96px] text-3xl mission_text text-center">
										<NumberCounter
											target={161}
											duration={1}
										/>
										k+
									</h2>
									<span className="lg:text-4xl text-base font-medium uppercase text-center">
										Views
									</span>
								</div>
							</div>
						</div>

						<div
							ref={(el) => {
								if (el) itemsRef.current[2] = el
							}}
							className="aud-reach-item lg:h-screen w-screen flex-shrink-0 grid grid-cols-2 items-center relative z-30"
						>
							<div className="">
								<img
									src="./audience3.png"
									loading="lazy"
									alt=""
									className="w-[60%] h-auto rotate-15"
								/>
							</div>

							<div className="grid gap-12 relative">
								<div className="absolute top-0 -translate-x-full left-0 text-text lg:text-4xl text-base font-bold uppercase bg-foreground lg:px-6 px-4 py-3 w-fit">
									MEDIA FEATURES:
								</div>

								<div className="grid gap-1">
									<h2 className="lg:text-[48px] text-2xl leading-normal mission_text text-center">
										ctv, CBC, OMNI, Narcity, Todo toronto
									</h2>
									{/* <span className="text-4xl font-medium uppercase text-center">Views</span> */}
								</div>
							</div>
						</div>

						<div
							ref={(el) => {
								if (el) itemsRef.current[3] = el
							}}
							className="aud-reach-item lg:h-screen w-screen flex-shrink-0 grid grid-cols-2 items-center relative z-30"
						>
							<div className="">
								<img
									src="./audience4.png"
									loading="lazy"
									alt=""
									className="w-[60%] h-auto -rotate-15"
								/>
							</div>

							<div className="grid gap-12 relative">
								<div className="absolute top-20 -translate-x-full left-0 text-text lg:text-4xl text-base font-bold uppercase bg-foreground lg:px-6 px-4 py-3 w-fit">
									FACEBOOK &<br />
									INSTAGRAM:
								</div>

								<div className="grid gap-1">
									<h2 className="lg:text-[96px] text-3xl mission_text text-center">
										$0.08
									</h2>
									<span className="lg:text-4xl text-base font-medium uppercase text-center">
										cpc
									</span>
								</div>

								<div className="grid gap-1">
									<h2 className="lg:text-[96px] text-3xl mission_text text-center">
										7.8%
									</h2>
									<span className="lg:text-4xl text-base font-medium uppercase text-center">
										ctr
									</span>
								</div>
							</div>
						</div>

						<div
							ref={(el) => {
								if (el) itemsRef.current[4] = el
							}}
							className="aud-reach-item lg:h-screen w-screen flex-shrink-0 grid grid-cols-2 items-center  relative z-30  "
						>
							<div className="">
								<img
									src="./audience5.png"
									loading="lazy"
									alt=""
									className="w-[60%] h-auto rotate-[10deg] "
								/>
							</div>

							<div className="grid gap-12 relative  lg:pr-48">
								<div className="absolute top-0 lg:top-0 -translate-x-full left-8 lg:-left-10 text-text lg:text-2xl text-xs font-bold uppercase bg-foreground lg:px-6 px-4 py-3 w-fit">
									YOUTUBE &<br />
									GOOGLE DISPLAY:
								</div>

								<div className="grid gap-1">
									<h2 className="lg:text-[96px] text-3xl mission_text text-center">
										1.34m
									</h2>
									<span className="lg:text-4xl text-base font-medium uppercase text-center">
										IMPRESSIONS
									</span>
								</div>

								<div className="grid gap-1">
									<h2 className="lg:text-[96px] text-3xl mission_text text-center">
										$0.01
									</h2>
									<span className="lg:text-4xl text-base font-medium uppercase text-center">
										CPV
									</span>
								</div>
							</div>
						</div>
					</div>


					{/* buttons mobile navigation */}
					<div className=" lg:hidden absolute -bottom-0 left-6 z-[100]">
						<div className="flex items-center gap-5">
							<button onClick={handleLeftSlide} className={`flex-none size-8 ${currentSlide === 0 ? 'bg-[#060608]' : 'bg-[#FB0015]'} flex items-center justify-center text-text`}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
								</svg>
							</button>

							<button onClick={handleRightSlide} className={`flex-none size-8 ${currentSlide !== 4 ? 'bg-[#FB0015]' : 'bg-[#060608]'} flex items-center justify-center text-text`}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
								</svg>
							</button>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}
