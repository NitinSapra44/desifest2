"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Mission() {
    const missionRef = useRef<HTMLDivElement>(null)
    const engageRef = useRef<HTMLDivElement>(null)
    const elevateRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const outer = missionRef.current;
        const inner = engageRef.current;
        const inner2 = elevateRef.current;
        if (!outer || !inner || !inner2) return;
    
        const ctx = gsap.context(() => {
            // Animate first inner box (moves down 80px)
            gsap.fromTo(
              inner,
              { y: 0, opacity: 0 },
              {
                y: window.innerWidth < 1024 ? '160px' : '220px',
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: outer,
                  start: "top top",
                  end: "bottom top",
                  toggleActions: "play none none reverse",
                },
              }
            );
      
            // Animate second inner box (moves down 150px)
            gsap.fromTo(
              inner2,
              { y: 0, opacity: 0 },
              {
                y: window.innerWidth < 1024 ? '300px' : '420px',
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: outer,
                  start: "top top",
                  end: "bottom top",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }, outer);
    
        return () => ctx.revert(); // cleanup on unmount
      }, []);

    return (
        <div ref={missionRef} className="py-20 lg:py-[122px] bg-foreground relative h-[80vh] lg:h-[145vh]">
            <div className="text-text flex flex-col items-center z-20 relative">
                <label htmlFor="mission" className=" text-base lg:text-[36px] font-normal text-text uppercase mb-8">
                    our mission
                </label>

                <div className="relative">
                    <div className="">
                        <h2 className=" text-4xl lg:text-[87px] mission_text text-center mb-4">empower</h2>

                        <p className="lg:text-xl text-sm font-normal text-center leading-snug max-w-[600px] text-white/75 mb-8">
                        We elevate South Asian talent, representation, and cultural pride, bringing them to the national stage with world-class programming and a commitment to lasting impact.
                        </p>
                    </div>

                    <div ref={engageRef} className=" absolute top-0 left-0 opacity-0 w-full">
                        <h2 className="lg:text-[87px] text-4xl mission_text text-center mb-4">engage</h2>

                        <p className="lg:text-xl text-sm font-normal text-center leading-snug max-w-[600px] text-white/75 mb-8">
                        We engage communities and cultures through experiences that foster authentic connection.
                        </p>
                    </div>

                    <div ref={elevateRef} className="absolute top-0 right-0 opacity-0 w-full">
                        <h2 className="lg:text-[87px] text-4xl mission_text text-center mb-4">elevate</h2>

                        <p className="lg:text-xl text-sm font-normal text-center leading-snug max-w-[600px] text-white/75 mb-8">
                        We empower artists, newcomers, and brands by creating meaningful opportunities to collaborate, perform and grow.We elevate South Asian talent, representation, and cultural pride, bringing them to the national stage with world-class programming and a commitment to lasting impact.
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 z-10 flex justify-center items-center">
                <img loading="lazy" src="./mission.svg" alt="" className="w-[80%] h-auto object-cover" />
            </div>

            <div className="absolute left-0 bottom-0 w-full z-30 flex justify-center items-center">
            <img loading="lazy" src="./missionperson.png" alt="" className=" lg:w-[90%] w-full  h-auto" />
            </div>

        </div>
    )
}