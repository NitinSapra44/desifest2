"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Mission() {
  const missionRef = useRef<HTMLDivElement>(null)
  const empowerRef = useRef<HTMLDivElement>(null)
  const engageRef = useRef<HTMLDivElement>(null)
  const elevateRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = [empowerRef.current, engageRef.current, elevateRef.current]

      sections.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(
          el,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        )
      })
    }, missionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={missionRef}
      className="py-20 lg:py-[40px] bg-foreground relative min-h-[100vh] flex flex-col "
    >
      <div className="text-text flex flex-col items-center z-20 relative space-y-12">
        <label
          htmlFor="mission"
          className="text-base lg:text-[36px] font-normal text-text uppercase mb-8"
        >
          our mission
        </label>

        {/* Empower Section */}
        <div ref={empowerRef} className="opacity-0 flex flex-col items-center text-center max-w-[700px]">
          <h2 className="text-4xl lg:text-[60px] mission_text mb-4">empower</h2>
          <p className="lg:text-base text-sm font-normal text-white/75 leading-snug">
            We elevate South Asian talent, representation, and cultural pride,
            bringing them to the national stage with world-class programming and
            a commitment to lasting impact.
          </p>
        </div>

        {/* Engage Section */}
        <div ref={engageRef} className="opacity-0 flex flex-col items-center text-center max-w-[700px]">
          <h2 className="text-4xl lg:text-[60px] mission_text mb-4">engage</h2>
          <p className="lg:text-base text-sm font-normal text-white/75 leading-snug">
            We engage communities and cultures through experiences that foster
            authentic connection.
          </p>
        </div>

        {/* Elevate Section */}
        <div ref={elevateRef} className="opacity-0 flex flex-col items-center text-center max-w-[700px]">
          <h2 className="text-4xl lg:text-[60px] mission_text mb-4">elevate</h2>
          <p className="lg:text-base text-sm font-normal text-white/75 leading-snug">
            We empower artists, newcomers, and brands by creating meaningful
            opportunities to collaborate, perform, and grow.
          </p>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 z-10 flex justify-center items-center pointer-events-none">
        <img
          loading="lazy"
          src="./mission.svg"
          alt=""
          className="w-[80%] h-auto object-cover opacity-60"
        />
      </div>

      <div className="absolute left-0 bottom-0 w-full z-30 flex justify-center items-center pointer-events-none">
        <img
          loading="lazy"
          src="./missionperson.png"
          alt=""
          className="lg:w-[50%] w-full h-auto"
        />
      </div>
    </div>
  )
}
