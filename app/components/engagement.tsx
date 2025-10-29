import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { registerScrollTrigger } from "../lib/scroll-manager";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function Engagement() {
	const engageContainer = useRef<HTMLDivElement>(null);

	const engageItem1 = useRef<HTMLDivElement>(null);
	const engageItem2 = useRef<HTMLDivElement>(null);
	const engageItem3 = useRef<HTMLDivElement>(null);
	const engageItem4 = useRef<HTMLDivElement>(null);

	const [currentEngagement, setCurrentEngagement] = useState(1);
	

	useGSAP(() => {

		if (window.innerWidth < 1024) return;

		registerScrollTrigger(() => {
			const container = engageContainer.current;
			if (!container) return;
	
			const cards = container.querySelectorAll('.card-item');
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					// markers: true,
					pin: true,
					scrub: 1,
					start: "top top",
					end: "+=2000"
				}
			})
	
			cards.forEach((card, i) => {
				tl.to(
					card, 
					{
						yPercent: 120,
						rotate: "75deg",
						// opacity: 0,
						transformOrigin: "top left",
						ease: "power1.inOut"
					},
					i
				)
			})
		})

	}, { scope: engageContainer })


	function handleNext() {

		console.log('currentEngagement nexxt', currentEngagement)

		const obj = {
			y: "+=120%",
			rotate: "+=45deg",
			duration: 0.8,
			ease: "power3.inOut",
		}

		if (currentEngagement < 4) {
			switch (currentEngagement) {
				case 1:
					gsap.to(engageItem1.current, obj);
					break;
				case 2:
					gsap.to(engageItem2.current, obj);
					break;
				case 3:
					gsap.to(engageItem3.current, obj);
					break;
				// case 4:
				// 	gsap.to(engageItem4.current, obj);
				// 	break;
			}
			setCurrentEngagement(prev => prev + 1)
		}
	}


	function handlePrevious() {
		console.log('currentEngagement back', currentEngagement)
		if (currentEngagement > 0) {

			const obj = {
				y: "-=120%",
				rotate: "-=45deg",
				duration: 0.5,
				ease: "power3.out",
			}

			switch (currentEngagement - 1) {
				case 1:
					gsap.to(engageItem1.current, obj);
					break;
				case 2:
					gsap.to(engageItem2.current, obj);
					break;
				case 3:
					gsap.to(engageItem3.current, obj);
					break;
				// case 4:
				// 	console.log('engageItem4', engageItem4.current)
				// 	gsap.to(engageItem4.current, obj);
				// 	break;
			}
			setCurrentEngagement(prev => Math.max(prev - 1, 1))
		}
	}

	return (
		<>
			<div ref={engageContainer} className="py-5 min-h-[94vh] lg:min-h-screen px-6   bg-black text-white">
				<div className="lg:px-[270px]">
					<h2 className="flex lg:!text-[87px] text-3xl items-center gap-4 text-white mb-8">
						<span className="w-1.5 h-18 bg-[#FB0015]"></span>
						ENgAGEMENT
					</h2>

					<p className="font-normal lg:text-2xl text-sm max-w-[900px] mb-10">
						FROM DIGITAL DISPLAYS TO COMPLETE ONSITE ACTIVATIONS, WE
						ASSIST YOU IN DISCOVERING THE MOST EFFECTIVE WAYS TO
						MAKE A LASTING IMPRESSION AT DESIFEST.
					</p>
				</div>

				<div className=" lg:px-[270px] py-8 lg:py-16 overflow-hidden">
					<div className="relative  card-stack ">

						{/* first */}
						<div ref={engageItem1} className=" card-item absolute inset-0 origin-top-left z-[60] ">
							<div className="relative h-full">
								<img
									loading="lazy"
									src="./engagementbg.png"
									className="  w-full h-[400px] object-cover object-center lg:h-auto z-20"
									alt=""
								/>

								<div className="absolute left-0 top-0 h-full py-16 pl-5 pr-20 lg:pl-32  z-30  ">
									<p className="uppercase lg:text-2xl text-base mb-3 font-bold ">
										Up to 20’ x 20’ Space
									</p>
									<div className=" text-white/75 grid text-xs lg:text-base gap-4 z-30 relative max-w-[500px]">
										<p>
											On-stage LED walls and outdoor digital
											screens provide continuous visibility
											throughout the 12- hour festival. This
											ensures your brand stays top of mind for
											attendees throughout the event.
										</p>
										<p>
											With more than 60,000 attendees and 100,000+
											passersby at Sankofa Square, sponsor
											messages achieve both direct engagement and
											mass urban reach.
										</p>
										<p>
											Content also appears in livestream
											broadcasts, extending impressions to digital
											audiences.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* second */}
						<div ref={engageItem2} className="card-item absolute origin-top-left z-50 inset-0 ">
							<div className="relative">
								<img
									loading="lazy"
									src="./engagementbg1.png"
									className="  w-full h-[400px] object-cover lg:h-auto z-20"
									alt=""
								/>

								<div className="absolute left-0 top-0 py-16 pl-5 pr-20 lg:pl-32  z-30  ">
									<p className="uppercase lg:text-2xl text-base mb-3 font-bold ">
									Co-Branded Livestream
									</p>
									<div className=" text-white/75 grid text-xs lg:text-base gap-4 z-30 relative max-w-[500px]">
										<p>
										In 2025, livestream content reached over 1.3M impressions at a cost of just $0.01 CPV.
										</p>
										<p>
										Sponsors can co-brand livestream segments, lower-thirds, and backstage interviews, ensuring logo presence across every piece of digital content.
										</p>
										<p>
										Livestream assets remain online for rewatch and clipping, extending sponsor ROI beyond event day.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* third */}
						<div ref={engageItem3} className="card-item absolute origin-top-left z-40 inset-0 ">
							<div className="relative">
								<img
									loading="lazy"
									src="./engagementbg1.png"
									className="  w-full h-[400px] object-cover lg:h-auto z-20"
									alt=""
								/>

								<div className="absolute left-0 top-0 py-16 pl-5 pr-20 lg:pl-32  z-30  ">
									<p className="uppercase lg:text-2xl text-base mb-3 font-bold ">
									Micro Influencers
									</p>
									<div className=" text-white/75 grid text-xs lg:text-base gap-4 z-30 relative max-w-[500px]">
										<p>
										Partnership with 7 South Asian creators in 2025 delivered 300K+ views, 2K shares, 1K saves for under $1,000 spend.
										</p>
										<p>
										Sponsors can align with influencer-generated content that feels authentic, trusted, and community-led.
										</p>
										<p>
										Year-round influencer relationships extend visibility beyond festival weekend.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* fourth */}
						<div ref={engageItem4} className=" absolute origin-top-left z-30 inset-0 ">
							<div className="relative">
								<img
									loading="lazy"
									src="./engagementbg1.png"
									className="  w-full h-[400px] object-cover lg:h-auto z-20"
									alt=""
								/>

								<div className="absolute left-0 top-0 py-16 pl-5 pr-20 lg:pl-32  z-30  ">
									<p className="uppercase lg:text-2xl text-base mb-3 font-bold ">
									Artist Engagement
									</p>
									<div className=" text-white/75 grid text-xs lg:text-base gap-4 z-30 relative max-w-[500px]">
										<p>
										DESIFEST is the only festival with a 100% Canadian South Asian lineup for two consecutive years.
										</p>
										<p>
										Artists act as natural ambassadors, sharing sponsor-branded content with their own networks, amplifying reach organically.
										</p>
										<p>
										Opportunities for meet & greets, branded shoutouts, and exclusive sponsor tie-ins with headliners increase both visibility and brand affinity.
										</p>
									</div>
								</div>
							</div>
						</div>


						<img
							loading="lazy"
							src="./engagementbg-last.svg"
							className="  w-full h-[400px] object-cover lg:h-auto z-20"
							alt=""
						/>


						<img src="./pin.svg" alt="" className="absolute top-2 lg:top-8 z-[99] -left-3 lg:-left-8 w-auto h-12 lg:h-32" />


						{/* buttons */}
						<div className=" lg:hidden absolute z-[99] right-0 lg:right-6 bottom-14 lg:bottom-18 -rotate-40 flex gap-2 items-center">
							<button onClick={handlePrevious}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m15 18-6-6 6-6"/></svg>
							</button>

							<span>{currentEngagement > 3 ? 'Back' : 'Next' }</span>

							<button onClick={currentEngagement > 4 ? handlePrevious : handleNext}>
							{currentEngagement > 4 ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m9 18 6-6-6-6"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m9 18 6-6-6-6"/></svg>}
							</button>
						</div>

					</div>
				</div>
			</div>
		</>
	)
}
