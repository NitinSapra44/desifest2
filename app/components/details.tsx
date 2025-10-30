"use client"
import { useRef, useState, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { registerScrollTrigger } from "../lib/scroll-manager"
import { ChevronLeft, ChevronRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Details() {
	const itemsRef = useRef<HTMLDivElement[]>([])
	const [currentSlide, setCurrentSlide] = useState(0)
    const sectionRef = useRef<HTMLDivElement | null>(null);
	const openmicContainer = useRef<HTMLDivElement | null>(null)

	useGSAP(() => {
		if (window.innerWidth < 1024) return;
		registerScrollTrigger(() => {
			const container = openmicContainer.current
			if (!container) return

			const wrapper = container.querySelector(".openmic-wrapper") as HTMLElement | null
			if (!wrapper) return

			const slidesLength = 2
			
			const extraScroll = window.innerWidth * 1.5
			const totalScrollDistance = wrapper.scrollWidth - container.clientWidth + extraScroll
			
			gsap.to(wrapper, {
				xPercent: -100 * (slidesLength - 1),
				ease: 'none',
				scrollTrigger: {
					trigger: container,
					pin: true,
					scrub: 1,
					start: "top top",
					end: () => "+=" + totalScrollDistance,
					anticipatePin: 1,
				}
			})
		})
	}, { scope: openmicContainer })

	function handleNext() {
		if (currentSlide < 1) {
			setCurrentSlide(prev => prev + 1)
		}
	}

	function handlePrev() {
		if (currentSlide > 0) {
			setCurrentSlide(prev => prev - 1)
		}
	}

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
          const boxes = sectionRef.current?.querySelectorAll<HTMLElement>(".detail-box");
          if (!boxes) return;
    
          boxes.forEach((box) => {
            const content = box.querySelector<HTMLElement>(".detail-box-content");
            if (!content) return;
    
            gsap.set(content, { x: 1000 });
    
            gsap.to(content, {
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              onComplete: () => ScrollTrigger.refresh(),
              scrollTrigger: {
                trigger: box,
                start: "top center", 
                end: "+=800",
                toggleActions: "play none none none",
              },
            });
          });
    
          const refresh = () => ScrollTrigger.refresh();
          window.addEventListener("load", refresh);
    
          return () => {
            window.removeEventListener("load", refresh);
            ctx.revert();
          };
        }, sectionRef);

        return () => {
          ctx.revert();
        };
      }, []);

	const slideContent = [
		{
			title: (
				<>
					openmic
					<br />
					jam sessions
				</>
			),
			image: "./singers.png",
			imageWidth: "w-[50%] lg:w-[45%]",
			text: "With the JUNO Awards now recognizing South Asian artists and immigration bringing new global talent to Canada, our mission has never been more urgent. OpenMic by DESIFEST is our year-round artist development series — launched in Toronto, now expanding to Durham, Montreal, Vancouver, Windsor, and Hamilton in 2025/2026. Each month, 80+ artists perform, connect, and grow. Over the past two years, DESIFEST has proudly presented the only 100% Canadian lineup of South Asian artists in the country. OpenMic is how we discover and nurture these voices — ensuring Canada's next generation of musicians, singers, DJs, poets, and spoken word artists are ready for the spotlight."
		},
		{
			title: (
				<>
					MORE ARTISTS
					<br />
					MORE ACTIVATIONS
					<br />
					MORE ENGAGEMENT
				</>
			),
			image: "./singers2.png",
			imageWidth: "w-[70%] lg:w-[60%]",
			text: "With the JUNO Awards now recognizing South Asian artists and immigration bringing new global talent to Canada, our mission has never been more urgent. OpenMic by DESIFEST is our year-round artist development series — launched in Toronto, now expanding to Durham, Montreal, Vancouver, Windsor, and Hamilton in 2025/2026. Each month, 80+ artists perform, connect, and grow. Over the past two years, DESIFEST has proudly presented the only 100% Canadian lineup of South Asian artists in the country. OpenMic is how we discover and nurture these voices — ensuring Canada's next generation of musicians, singers, DJs, poets, and spoken word artists are ready for the spotlight."
		}
	]

	return (
		<div className="relative">
			{/* Desktop: Horizontal Scroll */}
			<div ref={openmicContainer} className="relative overflow-hidden hidden lg:block">
				<div className="grid openmic-wrapper grid-flow-col auto-cols-[100vw]">
					{slideContent.map((slide, index) => (
						<div
							key={index}
							ref={(el) => {
								if (el) itemsRef.current[index] = el
							}}
							className="min-h-screen py-8 lg:py-16 bg-foreground relative flex flex-col justify-between"
						>
							<div className="relative flex justify-center items-center flex-shrink-0">
								<h2 className={`text-center ${index === 0 ? 'text-3xl lg:text-[80px]' : 'text-3xl lg:text-[70px]'} text-white leading-[${index === 0 ? '84%' : '90%'}]`}>
									{slide.title}
								</h2>

								{index === 0 && (
									<h2 className="absolute top-4 translate-x-1 jam-sessions text-center text-3xl lg:text-[80px] text-white leading-[84%]">
										{slide.title}
									</h2>
								)}
							</div>

							<img
								loading="lazy"
								src={slide.image}
								alt=""
								className={`${slide.imageWidth} -mt-4 lg:-mt-12 z-10 relative mx-auto h-auto flex-shrink-0`}
							/>

							<div className="relative flex-shrink-0 mt-auto">
								<img
									loading="lazy"
									src="./rect1.svg"
									alt=""
									className="absolute bottom-0 left-0 h-[25vh] lg:h-[30vh] w-full object-cover object-bottom z-40"
								/>

								<img
									loading="lazy"
									src="./rect2.svg"
									alt=""
									className="absolute bottom-0 right-0 h-[25vh] lg:h-[30vh] w-full object-cover object-top z-40"
								/>

								<div className="relative z-50 text-white/75 w-full lg:px-[200px] px-6 py-6 lg:py-10">
									<p className="lg:text-lg text-xs font-normal leading-snug">
										{slide.text}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Mobile: Carousel */}
			<div className="lg:hidden relative bg-foreground">
				<div className="relative overflow-hidden">
					<div 
						className="flex transition-transform duration-500 ease-out"
						style={{ transform: `translateX(-${currentSlide * 100}%)` }}
					>
						{slideContent.map((slide, index) => (
							<div
								key={index}
								className="min-w-full  py-8 bg-foreground relative flex flex-col justify-between"
							>
								<div className="relative flex justify-center items-center flex-shrink-0 px-4">
									<h2 className={`text-center text-3xl text-white leading-[${index === 0 ? '84%' : '90%'}]`}>
										{slide.title}
									</h2>

									{index === 0 && (
										<h2 className="absolute top-4 translate-x-1 jam-sessions text-center text-3xl text-white leading-[84%]">
											{slide.title}
										</h2>
									)}
								</div>

								<img
									loading="lazy"
									src={slide.image}
									alt=""
									className={`${slide.imageWidth} -mt-4 z-10 relative mx-auto h-auto flex-shrink-0`}
								/>

								<div className="relative flex-shrink-0 mt-auto">
									<img
										loading="lazy"
										src="./rect1.svg"
										alt=""
										className="absolute bottom-0 left-0 h-[35vh] w-full object-cover object-bottom z-40"
									/>

									<img
										loading="lazy"
										src="./rect2.svg"
										alt=""
										className="absolute bottom-0 right-0 h-[35vh] w-full object-cover object-top z-40"
									/>

									<div className="relative z-50 text-white/75 w-full px-6 py-6">
										<p className="text-xs font-normal leading-snug">
											{slide.text}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Carousel Controls */}
				<div className="absolute bottom-8 left-0 right-0 z-50 flex items-center justify-center gap-4">
					<button
						onClick={handlePrev}
						disabled={currentSlide === 0}
						className="bg-white/20 backdrop-blur-sm p-2 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
						aria-label="Previous slide"
					>
						<ChevronLeft className="w-4 h-4 text-white" />
					</button>

					<div className="flex gap-2">
						{slideContent.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentSlide(index)}
								className={`h-2 rounded-full transition-all ${
									currentSlide === index ? 'w- bg-white' : 'w-2 bg-white/40'
								}`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>

					<button
						onClick={handleNext}
						disabled={currentSlide === 1}
						className="bg-white/20 backdrop-blur-sm p-2 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
						aria-label="Next slide"
					>
						<ChevronRight className="w-4 h-4 text-white" />
					</button>
				</div>
			</div>

			<div className="bg-black lg:h-[280px] flex items-end justify-center relative">
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

			<section
				id="show-details"
                ref={sectionRef}
				className="pt-[200px] pb-20 lg:pb-[100px] px-6 bg-black desifest-box overflow-hidden"
			>
				<h2 className="lg:text-[81px] text-4xl text-white text-center mb-24">
					show details
				</h2>

				<div className="max-w-[800px] mx-auto">
                    <div className="detail-box relative mb-24">
                        <div className="grid grid-cols-3 gap-6 text-white items-center lg:mb-12 mb-6">
                            <div className="h-[0.5px] bg-white"></div>
                            <p className="px-8 font-bold lg:text-[40px] text-base font-heading uppercase text-center flex items-center justify-center relative">
                                <img
                                    loading="lazy"
                                    src="./dayrect.svg"
                                    className="absolute left-0 w-full"
                                    alt=""
                                />
                                <span className="relative z-20 text-nowrap">day 1</span>
                            </p>
                            <div className="h-[0.5px] bg-white"></div>
                        </div>
                        <div className="detail-box-content flex flex-col items-center text-white gap-4 pt-4">
                            <p className="lg:text-3xl text-base font-bold bg-[#060608]/50 px-6 py-2">7pm - 10pm</p>
                            <h4 className="lg:text-[32px] text-lg font-bold font-heading">Evening showcase</h4>
                            <p className="text-sm lg:text-3xl text-center">
                            19+ International artist for a ticketed event
                            </p>
                        </div>
                    </div>

                    <div className="detail-box relative mb-24">
                        <div className="grid grid-cols-3 gap-6 text-white items-center lg:mb-12 mb-6">
                            <div className="h-[0.5px] bg-white"></div>
                            <p className="px-8 font-bold lg:text-[40px] text-base font-heading uppercase text-center flex items-center justify-center relative">
                                <img
                                    loading="lazy"
                                    src="./dayrect.svg"
                                    className="absolute left-0 w-full"
                                    alt=""
                                />
                                <span className="relative z-20 text-nowrap">day 2</span>
                            </p>
                            <div className="h-[0.5px] bg-white"></div>
                        </div>
                        <div className="detail-box-content flex flex-col items-center text-white gap-4 pt-4">
                            <p className="lg:text-3xl text-base font-bold bg-[#060608]/50 px-6 py-2">5pm - 10pm</p>
                            <h4 className="lg:text-[32px] text-lg font-bold font-heading">friday</h4>
                            <p className="lg:text-3xl text-base text-center">
                            <span className="block mb-2">Food vendors, brand activation</span>
                            8 to 10 fusion and multicultural performances, focusing on HipHop, Dance and Pop music
                            </p>
                        </div>
                    </div>

                    <div className="detail-box relative lg:mb-24 mb-8">
                        <div className="grid grid-cols-3 gap-6 text-white items-center lg:mb-12 mb-6">
                            <div className="h-[0.5px] bg-white"></div>
                            <p className="px-8 font-bold lg:text-[40px] text-base font-heading uppercase text-center flex items-center justify-center relative">
                                <img
                                    loading="lazy"
                                    src="./dayrect.svg"
                                    className="absolute left-0 w-full"
                                    alt=""
                                />
                                <span className="relative z-20 text-nowrap">day 3</span>
                            </p>
                            <div className="h-[0.5px] bg-white"></div>
                        </div>
                        <div className="detail-box-content flex flex-col items-center text-white gap-4 pt-4">
                            <p className="lg:text-3xl text-base font-bold bg-[#060608]/50 px-6 py-2">11am - 11pm</p>
                            <h4 className="lg:text-[32px] text-lg font-bold font-heading">saturday</h4>
                            <p className="lg:text-3xl text-base text-center mb-4">
                                Focus on Bollywood, Tollywood, and Kollywood, featuring the very best musicians and singers from across Canada, capped by a major global headliner.
                            </p>

                            <div className="grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-6 gap-4">
                                <p className="font-normal lg:text-xl text-base audience_chipbg px-8 py-1.5 text-center capitalize text-nowrap">
                                    food zone
                                </p>

                                <p className="font-normal lg:text-xl text-base audience_chipbg px-8 py-1.5 text-center capitalize text-nowrap">
                                    kids zone
                                </p>

                                <p className="font-normal lg:text-xl text-base audience_chipbg px-8 py-1.5 text-center capitalize text-nowrap">
                                    beer garden
                                </p>

                                <p className="font-normal lg:text-xl text-base audience_chipbg px-8 py-1.5 text-center capitalize text-nowrap">
                                    brand activation
                                </p>
                            </div>
                        </div>
                    </div>
				</div>
			</section>

			<div className="bg-black text-white relative px-6">
				<div className="absolute inset-0 z-10 flex items-center justify-center">
					<img
						loading="lazy"
						src="./storybg.svg"
						alt=""
						className="w-[90%] h-auto object-cover opacity-80"
					/>
				</div>

				<h2 className="lg:text-[80px] text-[26px] text-center sponsorship-text text-white py-2 mb-16 lg:mb-[100px]">
					sponsorship 
				</h2>

				<div className="max-w-[800px] mx-auto">
					<p className="lg:text-[24px] text-sm font-medium leading-snug text-center lg:mb-[96px]">
						<span className="text-[#ED0A13]">DESIFEST 2026</span> OFFERS SPONSORS THE OPPORTUNITY TO CONNECT
						WITH AUDIENCES THROUGH HIGH-VISIBILITY, INTERACTIVE, AND
						CULTURALLY RELEVANT ACTIVATIONS. FROM ON-STAGE BRANDING
						TO EXPERIENTIAL ZONES, EACH SPONSORSHIP IS DESIGNED TO
						CREATE MEMORABLE MOMENTS THAT DRIVE BRAND RECALL AND
						LOYALTY.
					</p>

					<div className="grid grid-cols-1 lg:grid-cols-2 items-center py-6">
						<div className="relative py-2">
							<img
								src="./textbg.svg"
								className="w-full h-32 object-cover z-10"
								alt=""
							/>
							<div className="absolute z-20 inset-0 flex text-center items-center justify-center uppercase text-base lg:text-xl font-bold font-heading">
								MAIN STAGE <br />
								naming rights
							</div>
						</div>
						<p className="lg:text-xl text-sm px-6">
							Align your brand with the festival's central
							performance space.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 items-center py-6 border-t border-[#AB1218]">
						<div className="relative py-2">
							<img
								src="./textbg.svg"
								className="w-full h-32 object-cover z-10"
								alt=""
							/>
							<div className="absolute z-20 inset-0 flex text-center items-center justify-center uppercase text-base lg:text-xl font-bold font-heading">
								BEER STAGE &<br /> VIP LOUNGE
							</div>
						</div>
						<p className="lg:text-xl text-sm px-6">
							Premium experience with product sampling, lounge
							seating, and sponsor branding.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 items-center py-6 border-t border-[#AB1218]">
						<div className="relative py-2">
							<img
								src="./textbg.svg"
								className="w-full h-32 object-cover z-10"
								alt=""
							/>
							<div className="absolute z-20 inset-0 flex items-center justify-center uppercase text-base lg:text-xl font-bold font-heading">
								kids zone
							</div>
						</div>
						<p className="lg:text-xl text-sm px-6">
							Family-focused activities co-branded with sponsors.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 items-center py-6 border-t border-[#AB1218]">
						<div className="relative py-2">
							<img
								src="./textbg.svg"
								className="w-full h-32 object-cover z-10"
								alt=""
							/>
							<div className="absolute z-20 inset-0 flex text-center items-center justify-center uppercase text-base lg:text-xl font-bold font-heading">
								Food Festival
							</div>
						</div>
						<p className="lg:text-xl text-sm px-6">
							20+ diverse vendors with brand integration and
							sampling opportunities.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 items-center py-6 border-t border-[#AB1218]">
						<div className="relative py-2">
							<img
								src="./textbg.svg"
								className="w-full h-32 object-cover z-10"
								alt=""
							/>
							<div className="absolute z-20 inset-0 flex text-center items-center justify-center uppercase text-base lg:text-xl font-bold font-heading">
								ARTIST LIVESTEAM
								<br /> LOUNGE
							</div>
						</div>
						<p className="lg:text-xl text-sm px-6">
							Sponsor-branded behind-the-scenes content hub.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 items-center py-6 border-t border-[#AB1218]">
						<div className="relative py-2">
							<img
								src="./textbg.svg"
								className="w-full h-32 object-cover z-10"
								alt=""
							/>
							<div className="absolute z-20 inset-0 flex text-center items-center justify-center uppercase text-base lg:text-xl font-bold font-heading">
								CUSTOM BUILD <br />
								ACTIVATION
							</div>
						</div>
						<p className="lg:text-xl text-sm px-6">
							Have a turnkey activation? We can help you bring it
							to life at DESIFEST!
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}