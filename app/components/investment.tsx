'use client'
import { useState } from "react";

export default function Investment() {

	const [activeCard, setActiveCard] = useState(0);
	return (
		<div className>
			{/* return investment */}
			<div className=" pb-[40px] lg:pb-[160px]  bg-black text-white overflow-visible">
				<div className="lg:px-[270px] mb-8 lg:mb-8 px-6">
					<h2 className="flex lg:!text-[60px] text-3xl items-center gap-4 text-white mb-8">
						<span className="w-1.5 h-18 bg-[#FB0015]"></span>
						Return on investment
					</h2>

					<p className="font-normal lg:text-lg text-sm max-w-[640px]">
						AT DESIFEST WE KNOW SPONSORS EXPECT MEASURABLE RESULTS,
						SO WE BUILD ROI INTO EVERY PARTNERSHIP.
					</p>
				</div>

				<div className=" flex flex-col gap-y-2 lg:flex-row justify-center items-center [perspective:2000px]  lg:h-[100vh] overflow-visible">
					<div className={`relative w-fit min-w-[280px] [transform-style:preserve-3d] overflow-visible transition-all duration-[1200ms] ease-in-out ${activeCard === 1 ? ' [transform:rotateY(180deg)] ' : ''}`}>
						<img
							src="./returncard.png"
							className={` h-auto transition-all duration-[1200ms]  ease-in-out ${activeCard === 1  ? ' lg:w-[480px] w-full lg:-translate-y-24 ' : ' w-[280px]'}`}
							alt=""
						/>


						<div className={
							`absolute w-full left-0 px-12  lg:px-16 bottom-0 -translate-y-1/2 lg:translate-y-0 lg:bottom-56 text-black flex flex-col transition-all duration-1000 z-50 ease-in [transform:rotateY(180deg)] ` + 
							(activeCard == 1 ? ' opacity-100 pointer-events-auto' : ' opacity-0 pointer-events-none')
						}>
							<ul className="grid gap-4 lg:text-lg text-sm">
								<li>
									<strong>Onsite attendence </strong>
									and engagement (foot traffic, tent visits, Kids Zone participation, VIP activations).
								</li>
								<li>
									<strong>Digital reach and performance</strong>
									(impressions, clicks, CTR, CPV, influencer reach, livestream views).
								</li>
								<li>
									<strong>Media coverage value</strong>
									(earned media impressions across broadcast, print, and digital).
								</li>
								<li>
									<strong>Community impact</strong>
									(volunteer hours, newcomer engagement, artist opportunities).
								</li>
							</ul>
						</div>

						<div className={`p-8 text-[#AB1218] absolute bottom-24 left-0 w-full items-center justify-center flex-col z-40 gap-4 ${activeCard !== 1 ? ' flex' : ' hidden'}`}>
							<h5 className="text-center">
								How we measure and report roi
							</h5>
							<button onClick={() => setActiveCard(1)} className="uppercase text-lg border w-fit px-4 border-[#AB1218]">
								view
							</button>
						</div>
					</div>

					<div className={`relative w-fit min-w-[280px] [transform-style:preserve-3d] overflow-visible transition-all duration-[1200ms] ease-in-out ${activeCard === 2 ? ' [transform:rotateY(180deg)] ' : ''}`}>
						<img
							loading="lazy"
							src="./returncard.png"
							className={` h-auto transition-all duration-[1200ms]  ease-in-out ${activeCard === 2  ? ' lg:w-[480px] w-full lg:-translate-y-24 ' : ' w-[280px]'}`}
							alt=""
						/>

						<div className={
							`absolute w-full left-0 px-12  lg:px-16 bottom-0 -translate-y-1/2 lg:translate-y-0 lg:bottom-56 text-black flex flex-col transition-all duration-1000 z-50 ease-in [transform:rotateY(180deg)] ` + 
							(activeCard == 2 ? ' opacity-100 pointer-events-auto' : ' opacity-0 pointer-events-none')
						}>
							<ul className="grid gap-4 lg:text-lg text-sm">
								<li>
								<strong>QR code activations</strong> for sampling, contests, and sign-ups.
								</li>
								<li><strong>Branded surveys </strong> or polls during livestream and on social media.</li>
								<li><strong>Digital contests</strong> that capture emails or opt-ins for sponsor databases.</li>
								<li><strong>Post-event customer engagement</strong> opportunities through our newsletter and influencer network.</li>
							</ul>
						</div>

						<div className={`p-8 text-[#AB1218] absolute bottom-24 left-0 w-full items-center justify-center z-40 flex-col gap-4 ${activeCard !== 2 ? ' flex' : ' hidden'}`}>
							<h5 className="text-center">
								custom data and lead capture opportunities
							</h5>
							<button onClick={() => setActiveCard(2)} className="uppercase text-lg border w-fit px-4 border-[#AB1218]">
								view
							</button>
						</div>
					</div>

					<div className={`relative w-fit min-w-[280px] [transform-style:preserve-3d] overflow-visible transition-all duration-[1200ms] ease-in-out ${activeCard === 3 ? ' [transform:rotateY(180deg)] ' : ''}`}>
						<img
							loading="lazy"
							src="./returncard.png"
							className={` h-auto transition-all duration-[1200ms]  ease-in-out ${activeCard === 3  ? ' lg:w-[480px] w-full lg:-translate-y-24 ' : ' w-[280px]'}`}
							alt=""
						/>

						<div className={
							`absolute w-full left-0 px-12  lg:px-16 bottom-0 -translate-y-1/2 lg:translate-y-0 lg:bottom-56 text-black flex flex-col transition-all duration-1000 z-50 ease-in [transform:rotateY(180deg)] ` + 
							(activeCard == 3 ? ' opacity-100 pointer-events-auto' : ' opacity-0 pointer-events-none')
						}>

							<p className="mb-4 lg:text-xl text-sm font-medium">
							Every sponsor receives a detailed post-event report including:
							</p>
							<ul className="grid gap-4 lg:text-lg text-sm">

							<li><strong>Attendance </strong> and demographic data.</li>
							<li><strong>Digital metrics</strong> (impressions, CPC/CPV, influencer reach).</li>
							<li><strong>Media mentions</strong> and earned media highlights.</li>
							<li><strong>Photos, videos, and content</strong> examples of brand activations.</li>

							</ul>
						</div>

						<div className={`p-8 text-[#AB1218] absolute bottom-24 left-0 w-full items-center justify-center z-40 flex-col gap-4 ${activeCard !== 3 ? ' flex' : ' hidden'}`}>
							<h5 className="text-center">
								post-event reporting
							</h5>
							<button onClick={() => setActiveCard(3)} className="uppercase text-lg border w-fit px-4 border-[#AB1218]">
								view
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
