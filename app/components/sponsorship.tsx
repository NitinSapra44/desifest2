'use client'
import { useRef, useState } from "react";
import ButtonLeft from "./ui/button-left";
import ButtonRight from "./ui/button-right";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { registerScrollTrigger } from "../lib/scroll-manager";

export default function Sponsorship() {
	

	const sponsorshipContainer = useRef<HTMLDivElement>(null);
	const displayItem1 = useRef<HTMLDivElement>(null);
	const displayItem2 = useRef<HTMLDivElement>(null);
	const displayItem3 = useRef<HTMLDivElement>(null);

	useGSAP(() => {

		if (window.innerWidth < 1024) return;

		registerScrollTrigger(() => {
			const container = sponsorshipContainer.current;
			if (!container) return;

			const displayItems = container.querySelectorAll('.display-item');
			console.log('displayItems', displayItems)
			const tl = gsap.timeline({
				scrollTrigger: {
					// markers: true,
					trigger: container,
					pin: true,
					scrub: 1,
					start: "center top",
					end: "+=2400"
				}
			})

			displayItems.forEach((item, i) => {
				tl.to(
					item,
					{
						xPercent: -100 * (displayItems.length - 1),
						// duration: 0,
						ease: "power3.inOut",
					},
					0
				)
			})
		})

	}, { scope: sponsorshipContainer })

	const [currentReach, setCurrentReach] = useState(0);

	function handleLeft() {
		if (currentReach > 0 && displayItem1.current && displayItem2.current && displayItem3.current) {
			gsap.to(displayItem1.current, {
				x: "+=100%",
				duration: 1,
				ease: "power3.out",
			})

			gsap.to(displayItem2.current, {
				x: "+=100%",
				duration: 1,
				ease: "power3.out",
			})

			gsap.to(displayItem3.current, {
				x: "+=100%",
				duration: 1,
				ease: "power3.out",
			})

			setCurrentReach(prev => prev - 1)
		}
	}

	function handleRight() {
		if (currentReach < 2 && displayItem1.current && displayItem2.current && displayItem3.current) {
			gsap.to(displayItem1.current, {
				x: "-=100%",
				duration: 1,
				ease: "power3.out",
			})

			gsap.to(displayItem2.current, {
				x: "-=100%",
				duration: 1,
				ease: "power3.out",
			})

			gsap.to(displayItem3.current, {
				x: "-=100%",
				duration: 1,
				ease: "power3.out",
			})

			setCurrentReach(prev => prev + 1)
		}
	}

	return (
		<>
			<section ref={sponsorshipContainer} id="sponsorship" className="relative py-[80px] lg:py-[160px] px-6  bg-black text-white">
				<div className="lg:px-[270px]">
					<h2 className="flex lg:!text-[87px] text-4xl items-center gap-4 text-white mb-8">
						<span className="w-1.5 h-18 bg-[#FB0015]"></span>
						20th year Activation
					</h2>

					<p className="font-normal lg:text-2xl text-sm max-w-[640px] mb-16">
						Let’s collaborate to make your brand an unforgettable
						part of DESIFEST’s 20-year milestone.
					</p>
				</div>

				<div className="flex flex-col lg:flex-row items-center gap-4 lg:pl-[200px] gap-y-12 lg:pr-[100px] mb-16 lg:mb-40 lg:h-[70vh]">
					<img
						loading="lazy"
						src="./sankofa.png"
						alt=""
						className="w-[380px] h-fit flex-none"
					/>

					<img loading="lazy" src="./sponsor.png" alt="" className="w-full lg:w-[80%] h-fit" />
				</div>

				<div className="flex flex-col lg:flex-row gap-y-16 items-center gap-x-4">
					<div className="w-full lg:w-[35%] relative z-50">
						<img
							loading="lazy"
							src="./girls.png"
							alt=""
							className=" lg:absolute lg:translate-x-32 right-0 bottom-0 lg:translate-y-16 w-[90%] lg:w-[520px] h-auto"
						/>
					</div>

					<div className="w-full  lg:w-[65%] lg:px-32 relative">
						<img
							loading="lazy"
							src="./girlsrect1.svg"
							className="absolute left-0 bottom-0 w-full h-full lg:translate-y-16 object-cover lg:h-auto z-10"
							alt=""
						/>
						<img
							loading="lazy"
							src="./girlsrect2.svg"
							className="absolute right-0 bottom-0 w-full h-full lg:translate-y-16 object-cover lg:h-auto z-20"
							alt=""
						/>

						<div className="relative z-30 grid grid-flow-col items-center auto-cols-[100%]  overflow-hidden">
							<div ref={displayItem1} className=" display-item w-full  px-5 py-6  lg:pl-0 lg:py-0   lg:pr-24">
								<p className="uppercase lg:text-2xl text-lg mb-3 font-bold ">
									DIGITAL DISPLAYS
								</p>
								<ul className="list-disc list-inside text-sm lg:text-base text-white/75 grid gap-4 z-30 relative">
									<li>
										Continuous sponsor visibility via on-stage
										LED walls and outdoor digital screens
										throughout our 12-hour celebration.
									</li>
									<li>
										Reach over 60,000 engaged attendees and
										100,000+ urban passersby at Sankofa Square,
										maximizing brand exposure.
									</li>
									<li>
										Sponsor messages are also integrated into
										our livestream broadcasts, expanding your
										reach to a vibrant digital audience
									</li>
								</ul>
							</div>

							<div ref={displayItem2} className=" display-item w-full  px-5 py-6  lg:pl-0 lg:py-0 lg:pr-24">
								<p className="uppercase text-2xl mb-3 font-bold ">
								Onsite & Interactive Opportunities
								</p>
								<ul className="list-disc list-inside text-white/75 grid gap-4 z-30 relative">
									<li>
									From branded digital content to immersive festival activations, our team works with sponsors to design memorable brand experiences.
									</li>
									<li>
									Options include branded zones, sampling booths, interactive games, and exclusive contests—customized to your marketing goals.
									</li>
								</ul>
							</div>

							<div ref={displayItem3} className=" display-item w-full px-5 py-6  lg:pl-0 lg:py-0 lg:pr-24">
								<p className="uppercase text-2xl mb-3 font-bold ">
								Media Engagement
								</p>
								<ul className="list-disc list-inside text-white/75 grid gap-4 z-30 relative">
									<li>
									DESIFEST commands national and multicultural coverage on CBC, CTV, OMNI, Narcity, Todotoronto, and more.
									</li>
									<li>
									In 2025, our earned media delivered 1M+ additional impressions—at zero media spend.
									</li>
									<li>
									Sponsors feature in press releases, live interviews, on our media wall, and are celebrated as cultural champions.
									</li>
									<li>
									All partners receive a detailed post-event impact report quantifying reach and engagement.
									</li>
								</ul>
							</div>

						</div>
					</div>
				</div>


				{/* buttond */}
				<div className=" lg:hidden absolute bottom-22 left-6 z-50 flex gap-4">
					<ButtonLeft onClick={handleLeft} className={`flex-none !size-8 ${currentReach !== 0 ? 'bg-accent' : 'bg-[#060608]'} flex items-center justify-center text-text`} />
					<ButtonRight onClick={handleRight} className={`flex-none !size-8 ${currentReach !== 2 ? 'bg-accent' : 'bg-[#060608]'} flex items-center justify-center text-text`} />	
				</div>

				<div className="lg:h-[100px]"></div>
			</section>
		</>
	)
}
