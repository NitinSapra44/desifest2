'use client'
import { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"


export default function Story() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const storyContainer = useRef<HTMLDivElement>(null)
    const slide1Ref = useRef<HTMLDivElement>(null)
    const slide2Ref = useRef<HTMLDivElement>(null)
    const storyRef = useRef<HTMLImageElement>(null)
    const storyImgRef = useRef<HTMLImageElement>(null)


    useGSAP(() => {

        if (window.innerWidth < 1024) return;

        if (!storyContainer.current) return

        const wrapper = storyContainer.current.querySelector(".wrapper") as HTMLElement | null
        if (!wrapper) return

        const slidesLength = 2

        gsap.to(wrapper, {
            xPercent: -100 * (slidesLength - 1),
            ease: "none",
            scrollTrigger: {
                trigger: storyContainer.current,
                pin: true,
                scrub: 1,
                start: "top top",
              end: () =>"+=" + ((wrapper.scrollWidth - storyContainer.current!.clientWidth) + window.innerWidth * 2.5),

                onUpdate: (self) => {
                    // 2️⃣ Drive image rotation manually in real time
                    const progress = self.progress; // 0 → 1
                    if (storyImgRef.current) {
                      const rotate = 35 * progress; // rotation mapped to progress
                      const moveX = 20 * progress; // optional parallax
                      storyImgRef.current.style.transform = `rotate(${rotate}deg) translateX(${moveX}%)`;
                    }
                  }
            }
        })

    }, { scope: storyContainer })


    function handleRightSlide() {
        if (slide1Ref.current && slide2Ref.current && storyRef.current && storyImgRef.current) {
            if (currentSlide === 0) {
                // translate to right slide 2
                slide1Ref.current.style.transform = `translateX(-100%)`
                slide2Ref.current.style.transform = `translateX(-100%)`

                storyRef.current.style.transform = `translateX(-130vw)`
                storyImgRef.current.style.rotate = '35deg'
                setCurrentSlide(1)
            }
        }

    }

    function handleLeftSlide() {
        if (slide1Ref.current && slide2Ref.current && storyRef.current && storyImgRef.current) {
            if (currentSlide === 1) {
                // translate to left slide 1
                slide1Ref.current.style.transform = `translateX(0)`
                slide2Ref.current.style.transform = `translateX(0)`

                storyRef.current.style.transform = `translateX(0)`
                storyImgRef.current.style.rotate = '0deg'
                setCurrentSlide(0)
            }
        }
    }

	return (
		<section ref={storyContainer} id="our-story" className=" bg-[#2b0503]  flex relative overflow-hidden">

            <div className="wrapper flex relative w-screen ">
                <div ref={slide1Ref} className=" relative z-20  transition-all duration-[800ms] ease-in-out w-screen flex-shrink-0 px-6 lg:px-16 lg:py-[160px] pt-20 pb-40">

                    <img
                        src="./storybg.svg"
                        alt=""
                        className="absolute left-0 bottom-0 w-full h-full object-cover"
                    />

                    <div className=" max-w-[800px] mx-auto pr-16">
                        <h2 className="flex lg:!text-[87px] text-[32px] items-center gap-4 text-white mb-8">
                            <span className="w-1.5 h-18 bg-[#FB0015]"></span>
                            our story
                        </h2>
                        <p className="text-sm lg:text-[28px] leading-normal text-white font-normal mb-8">WE ARE CANADA’S SOUTH ASIAN MUSIC PIONEERS</p>

                        <p className="text-sm lg:text-xl font-normal leading-snug max-w-[600px] text-white/75 mb-8">
                        For 20 years, DESIFEST has been more than a festival — it’s a cultural movement.
                        </p>

                        <p className="text-sm lg:text-xl font-normal leading-snug max-w-[600px] text-white/75 mb-8">
                        Since 2006, we’ve hosted over 1,000 artists, welcomed millions of attendees, and generated more than $3M in direct support for Canadian talent. Our stage has launched careers, built bridges between cultures, and set the standard for South Asian representation in Canada’s music scene.
                        </p>

                        <p className="text-sm lg:text-xl font-normal leading-snug max-w-[600px] text-white/75">
                        In 2024, we made history as the first South Asian music festival to feature a 100% Canadian lineup — a defining moment for our artists and community. In 2025, we built on that momentum, continuing our mission to showcase, elevate, and celebrate Canadian South Asian talent.
                        </p>
                    </div>

                </div>

                <div ref={slide2Ref} className=" relative z-20 transition-all duration-[800ms] ease-in-out w-screen flex-shrink-0 px-6 lg:px-16 lg:py-[160px] pt-20 pb-40">

                    <img
                        src="./storybg.svg"
                        alt=""
                        className="absolute left-0 bottom-0 w-full h-full object-cover"
                    />

                    <div className=" max-w-[800px] ml-auto -pl-16">
                        <h2 className="flex lg:!text-[80px] text-[32px] items-center gap-4 text-white mb-8">
                            <span className="w-1.5 h-18 bg-[#FB0015]"></span>
                            not just<br/>a festival
                        </h2>
                        <p className="text-sm lg:text-[28px] text-white font-normal leading-normal mb-8">WE ARE CANADA’S SOUTH ASIAN MUSIC PIONEERS</p>

                        <p className="text-sm lg:text-xl font-normal leading-snug max-w-[600px] text-white/75 mb-8">
                        For 20 years, DESIFEST has been more than a festival — it’s a cultural movement.
                        </p>

                        <p className="text-sm lg:text-xl font-normal leading-snug max-w-[600px] text-white/75 mb-8">
                        Since 2006, we’ve hosted over 1,000 artists, welcomed millions of attendees, and generated more than $3M in direct support for Canadian talent. Our stage has launched careers, built bridges between cultures, and set the standard for South Asian representation in Canada’s music scene.
                        </p>

                        <p className="text-sm lg:text-xl font-normal leading-snug max-w-[600px] text-white/75">
                        In 2024, we made history as the first South Asian music festival to feature a 100% Canadian lineup — a defining moment for our artists and community. In 2025, we built on that momentum, continuing our mission to showcase, elevate, and celebrate Canadian South Asian talent.
                        </p>
                    </div>

                </div>
                

                <div ref={storyRef} className="absolute  w-fit h-auto right-0 bottom-0 translate-x-[65%] transition-all lg:transition-none duration-500 lg:duration-none ease-in-out">
                    <img src="./story.png" ref={storyImgRef} loading="lazy" alt="" className="transition-all lg:transition-none duration-500 lg:duration-none ease-in-out w-[800px] h-auto" />
                </div>


            </div>

            <div className=" lg:hidden absolute bottom-20 left-6 z-[100]">
                <div className="flex items-center gap-5">
                    <button onClick={handleLeftSlide} className={`flex-none size-8 ${currentSlide === 0 ? 'bg-[#060608]' : 'bg-accent'} flex items-center justify-center text-text`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <button onClick={handleRightSlide} className={`flex-none size-8 ${currentSlide === 0 ? 'bg-accent' : 'bg-[#060608]'} flex items-center justify-center text-text`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* <div ref={storyRef} className="absolute  w-fit transition-all duration-1000  ease-in-out z-[9] h-auto right-0 bottom-0 translate-x-[40%]">
                <img src="./story.png" ref={storyImgRef} loading="lazy" alt="" className="transition-all duration-1000 ease-in-out w-[800px] h-auto" />
            </div> */}
		</section>
	)
}
