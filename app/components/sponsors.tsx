import ButtonLeft from "./ui/button-left"
import ButtonRight from "./ui/button-right"
import { useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import SponsorModal from "./ui/sponsor-modal"
import {
	SponsorModal0,
	SponsorModal1,
	SponsorModal2,
	SponsorModal3,
	SponsorModal4,
	SponsorModal5,
} from "../models/sponsor-modals"
import { useGSAP } from "@gsap/react"
import { registerScrollTrigger } from "../lib/scroll-manager"

export default function Sponsors() {

	const sponsorContainer = useRef<HTMLDivElement>(null)
	const [currentReach, setCurrentReach] = useState(0)

	const [modal, setModal] = useState<number | null>(null)

	const itemsRef = useRef<HTMLDivElement[]>([])


	useGSAP(() => {

		if (window.innerWidth < 1024) return;

		registerScrollTrigger(() => {

			const container = sponsorContainer.current
			if (!container) return

			const wrapper = container.querySelector(".sponsor-wrapper") as HTMLElement | null
			if (!wrapper) return

			const slidesLength = 6

			gsap.to(wrapper, {
				xPercent: -100 * (slidesLength - 1),
				ease: 'none',
				scrollTrigger: {
					trigger: container,
					pin: true,
					scrub: 1,
					start: "top top",
					end: () => "+=" + (wrapper.scrollWidth - container.clientWidth),
				}
			})

		})

	}, { scope: sponsorContainer })


	function handleLeft() {
		if (currentReach > 0 && itemsRef.current) {
			itemsRef.current.forEach((item) => {
				gsap.to(item, {
					x: "+=100vw",
					duration: 1,
					ease: "power3.out",
				})
			})
			setCurrentReach((prev) => prev - 1)
		}
	}

	function handleRight() {
		if (currentReach < 5 && itemsRef.current) {
			itemsRef.current.forEach((item) => {
				gsap.to(item, {
					x: "-=100vw",
					duration: 1,
					ease: "power3.out",
				})
			})
			setCurrentReach((prev) => prev + 1)
		}
	}

	return (
		<>
			{/* sponsor */}
			{/* <div
				id="sponsor"
				ref={sponsorContainer}
				className=" bg-[#A2151B] relative text-white pb-24"
			>
				<img
					loading="lazy"
					src="./desifest1.png"
					alt=""
					className="absolute -translate-y-32 top-0 left-0 w-full h-auto"
				/>
				<img
					loading="lazy"
					src="./desifest.png"
					alt=""
					className="absolute -translate-y-32 top-0 left-0 w-full h-auto"
				/>

				<div className="overflow-hidden">
					<div className=" sponsor-wrapper relative z-[99] grid grid-flow-col auto-cols-[100vw]">
						<div className="lg:hidden absolute right-6 bottom-6 z-[999] flex gap-4">
							<ButtonLeft
								onClick={handleLeft}
								className={`flex-none !size-8 ${
									currentReach !== 0
										? "bg-accent"
										: "bg-[#060608]"
								} flex items-center justify-center text-text`}
							/>
							<ButtonRight
								onClick={handleRight}
								className={`flex-none !size-8 ${
									currentReach !== 5
										? "bg-accent"
										: "bg-[#060608]"
								} flex items-center justify-center text-text`}
							/>
						</div>

						<div
							ref={(el) => {
								if (el) itemsRef.current[0] = el
							}}
							className="flex flex-col justify-center items-center h-[50vh] lg:h-screen px-6 "
						>
							<span className="lg:text-[32px] text-base font-normal uppercase ">
								naming rights
							</span>
							<h4 className="lg:text-[60px] text-3xl text-center  font-extrabold uppercase mb-2">
								TITLE SpONSOR
							</h4>

							<div className="relative z-10 mb-10 ">
								<img loading="lazy" src="./pricecard.svg" className="w-full h-auto" alt="" />
								<h4 className="lg:text-[60px] text-2xl  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold uppercase">
									$100,000
								</h4>
							</div>

							<button
								type="button"
								onClick={() => setModal(0)}
								className="uppercase z-[99] lg:text-2xl text-base font-medium px-6 py-2 bg-[#FB0015] border-[16px] border-[#F5F5F5] text-white"
							>
								DETAILS
							</button>
						</div>

						<div
							ref={(el) => {
								if (el) itemsRef.current[1] = el
							}}
							className="flex flex-col justify-center items-center h-[50vh] lg:h-screen px-6 "
						>
							<span className="lg:text-[32px] text-base font-normal uppercase">
								Co-Presenting
							</span>
							<h4 className="lg:text-[60px] text-3xl text-center  font-extrabold uppercase mb-2">
								Presenting sponsors
							</h4>

							<div className="relative z-10 mb-10">
								<img loading="lazy" src="./pricecard.svg" alt="" />
								<h4 className="lg:text-[60px] text-2xl  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold uppercase">
									$75,000
								</h4>
							</div>

							<button
								type="button"
								onClick={() => setModal(3)}
								className="uppercase z-[99] lg:text-2xl text-base font-medium px-6 py-2 bg-[#FB0015] border-[16px] border-[#F5F5F5] text-white"
							>
								DETAILS
							</button>
						</div>

						<div
							ref={(el) => {
								if (el) itemsRef.current[2] = el
							}}
							className="flex flex-col justify-center items-center h-[50vh] lg:h-screen px-6 "
						>
							<span className="lg:text-[32px] text-base font-normal uppercase">
								large
							</span>
							<h4 className="lg:text-[60px] text-3xl text-center  font-extrabold uppercase mb-2">
								Onsite Activation
							</h4>

							<div className="relative z-10 mb-10">
								<img loading="lazy" src="./pricecard.svg" alt="" />
								<h4 className="lg:text-[60px] text-2xl  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold uppercase">
									$25,000
								</h4>
							</div>

							<button
								type="button"
								onClick={() => setModal(1)}
								className="uppercase z-[99] lg:text-2xl text-base font-medium px-6 py-2 bg-[#FB0015] border-[16px] border-[#F5F5F5] text-white"
							>
								DETAILS
							</button>
						</div>

						<div
							ref={(el) => {
								if (el) itemsRef.current[3] = el
							}}
							className="flex flex-col justify-center items-center h-[50vh] lg:h-screen px-6 "
						>
							<span className="lg:text-[32px] text-base font-normal uppercase">
								small
							</span>
							<h4 className="lg:text-[60px] text-3xl text-center  font-extrabold uppercase mb-2">
								Onsite Activation
							</h4>

							<div className="relative z-10 mb-10">
								<img loading="lazy" src="./pricecard.svg" alt="" />
								<h4 className="lg:text-[60px] text-2xl  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold uppercase">
									$15,000
								</h4>
							</div>

							<button
								type="button"
								onClick={() => setModal(2)}
								className="uppercase z-[99] lg:text-2xl text-base font-medium px-6 py-2 bg-[#FB0015] border-[16px] border-[#F5F5F5] text-white"
							>
								DETAILS
							</button>
						</div>

						<div
							ref={(el) => {
								if (el) itemsRef.current[4] = el
							}}
							className="flex flex-col justify-center items-center h-[50vh] lg:h-screen px-6 "
						>
							<span className="lg:text-[32px] text-base font-normal uppercase">
								digital only
							</span>
							<h4 className="lg:text-[60px] text-3xl text-center  font-extrabold uppercase mb-2">
								brand partnership
							</h4>

							<div className="relative z-10 mb-10">
								<img loading="lazy" src="./pricecard.svg" alt="" />
								<h4 className="lg:text-[60px] text-2xl  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold uppercase">
									$10,000
								</h4>
							</div>

							<button
								type="button"
								onClick={() => setModal(4)}
								className="uppercase z-[99] lg:text-2xl text-base font-medium px-6 py-2 bg-[#FB0015] border-[16px] border-[#F5F5F5] text-white"
							>
								DETAILS
							</button>
						</div>

						<div
							ref={(el) => {
								if (el) itemsRef.current[5] = el
							}}
							className="flex flex-col justify-center items-center h-[50vh] lg:h-screen px-6 "
						>
							<span className="lg:text-[32px] text-base font-normal uppercase">
								What’s Your Budget?
							</span>
							<h4 className="lg:text-[60px] text-3xl text-center  font-extrabold uppercase mb-2">
								Custom Packages
							</h4>

							<div className="relative z-10 mb-10">
								<img loading="lazy" src="./pricecard.svg" alt="" />
								<h4 className="lg:text-[60px] text-3xl text-center  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold uppercase">
									view
								</h4>
							</div>

							<button
								type="button"
								onClick={() => setModal(5)}
								className="uppercase z-[99] lg:text-2xl text-base font-medium px-6 py-2 bg-[#FB0015] border-[16px] border-[#F5F5F5] text-white"
							>
								DETAILS
							</button>
						</div>
					</div>
				</div>

				<img
					loading="lazy"
					src="./crowd.png"
					className="absolute bottom-0 left-0 w-full opacity-[72%] mix-blend-color-burn"
					alt=""
				/>

				<img
					loading="lazy"
					src="./desifest1.png"
					alt=""
					className="absolute translate-y-32 bottom-0 left-0 w-full h-auto"
				/>
				<img
					loading="lazy"
					src="./desifest.png"
					alt=""
					className="absolute translate-y-32 bottom-0 left-0 w-full h-auto"
				/>
			</div> */}


			<div className="relative">
				<img
					loading="lazy"
					src="./desifest1.png"
					alt=""
					className="absolute translate-y-32 bottom-0 left-0 w-full h-auto"
				/>
				<img
					loading="lazy"
					src="./desifest.png"
					alt=""
					className="absolute translate-y-32 bottom-0 left-0 w-full h-auto"
				/>
			</div>

			{/* past sponsors */}
			<div className="pt-[200px] lg:pb-[270px] pb-28  bg-black text-white px-6">
				<div className="lg:pl-[270px] mb-24">
					<h2 className="flex lg:!text-[87px] text-4xl items-center gap-4 text-white mb-8">
						<span className="w-1.5 h-18 bg-[#FB0015]"></span>
						PAST SPONSORS
					</h2>
				</div>

				<div className="lg:px-[270px] w-full grid lg:gap-y-12 gap-y-6 ">
					<div className="flex items-center gap-5 lg:gap-16">
						<img
							loading="lazy"
							src="./brands/savan.png"
							className="lg:h-10 h-3 w-auto"
							alt=""
						/>

						<img
							loading="lazy"
							src="./brands/harley.png"
							className="lg:h-16 h-6 w-auto"
							alt=""
						/>

						<img
							loading="lazy"
							src="./brands/pg.png"
							className="lg:h-9 h-3 w-auto"
							alt=""
						/>

						<img
							loading="lazy"
							src="./brands/tim.png"
							className="lg:h-20 h-6 w-auto"
							alt=""
						/>

						<img
							loading="lazy"
							src="./brands/telus.png"
							className="lg:h-8 h-3 w-auto"
							alt=""
						/>
					</div>

					<div className="flex items-center gap-5 lg:gap-12">
						<img
							loading="lazy"
							src="./brands/toyota.png"
							className="lg:h-16 h-6 w-auto"
							alt=""
						/>

						<img
							loading="lazy"
							src="./brands/duracell.png"
							className="lg:h-8 h-3 w-auto"
							alt=""
						/>

						<img
							loading="lazy"
							src="./brands/cibc.png"
							className="lg:h-8 h-3 w-auto"
							alt=""
						/>

						<img
							loading="lazy"
							src="./brands/rogers.png"
							className="lg:h-8 h-3 w-auto"
							alt=""
						/>
					</div>

					<div className="flex items-center gap-5 lg:gap-16">

						<img
							loading="lazy"
							src="./brands/rbc.png"
							className="lg:h-20 h-6 w-auto"
							alt=""
						/>

						<img
							loading="lazy"
							src="./brands/canada.png"
							className="lg:h-20 h-6 w-auto"
							alt=""
						/>

						<img
							loading="lazy"
							src="./brands/rubicon.png"
							className="lg:h-20 h-6 w-auto"
							alt=""
						/>
						<img
							loading="lazy"
							src="./brands/redhot.png"
							className="lg:h-20 h-6 w-auto"
							alt=""
						/>

						<img
							loading="lazy"
							src="./brands/pg1.png"
							className="lg:h-20 h-6 w-auto"
							alt=""
						/>
					</div>

					<div className="flex items-center gap-5 lg:gap-16">
						<img
							loading="lazy"
							src="./brands/grace.png"
							className="lg:h-16 h-6 w-auto"
							alt=""
						/>

						<img
							loading="lazy"
							src="./brands/uber.png"
							className="lg:h-16 h-6 w-auto"
							alt=""
						/>

						<img
							loading="lazy"
							src="./brands/bell.png"
							className="lg:h-16 h-6 w-auto"
							alt=""
						/>

						<img
							loading="lazy"
							src="./brands/crest.png"
							className="lg:h-16 h-6 w-auto"
							alt=""
						/>
					</div>
				</div>
			</div>

			{/* all modals */}
			<SponsorModal0
				active={modal === 0}
				onClose={() => setModal(null)}
			/>

			<SponsorModal1
				active={modal === 1}
				onClose={() => setModal(null)}
			/>
			<SponsorModal2
				active={modal === 2}
				onClose={() => setModal(null)}
			/>
			<SponsorModal3
				active={modal === 3}
				onClose={() => setModal(null)}
			/>
			<SponsorModal4
				active={modal === 4}
				onClose={() => setModal(null)}
			/>
			<SponsorModal5
				active={modal === 5}
				onClose={() => setModal(null)}
			/>
		</>
	)
}
