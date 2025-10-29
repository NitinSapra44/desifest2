'use client'

import { useRef, useState, useEffect } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import ButtonLeft from './ui/button-left'
import ButtonRight from './ui/button-right'

export default function Sponsorship() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }))
  const scrollContainer = useRef<HTMLDivElement>(null)
  const [currentReach, setCurrentReach] = useState(0)
  const [desktopIndex, setDesktopIndex] = useState(0)
  const [carouselApi, setCarouselApi] = useState<any>(null)

  // --- Desktop carousel API setup ---
  useEffect(() => {
    if (!carouselApi) return

    carouselApi.on('select', () => {
      setDesktopIndex(carouselApi.selectedScrollSnap())
    })
  }, [carouselApi])

  // --- Mobile scroll snapping ---
  useEffect(() => {
    if (window.innerWidth >= 1024) return
    const container = scrollContainer.current
    if (!container) return

    let isScrolling: NodeJS.Timeout
    const handleScroll = () => {
      clearTimeout(isScrolling)
      isScrolling = setTimeout(() => {
        const scrollLeft = container.scrollLeft
        const itemWidth = container.offsetWidth
        const targetIndex = Math.round(scrollLeft / itemWidth)
        container.scrollTo({ left: targetIndex * itemWidth, behavior: 'smooth' })
        setCurrentReach(targetIndex)
      }, 150)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  // --- Button handlers for mobile ---
  function handleLeft() {
    if (currentReach > 0 && scrollContainer.current) {
      const newIndex = currentReach - 1
      setCurrentReach(newIndex)
      scrollContainer.current.scrollTo({
        left: newIndex * scrollContainer.current.offsetWidth,
        behavior: 'smooth',
      })
    }
  }

  function handleRight() {
    if (currentReach < 2 && scrollContainer.current) {
      const newIndex = currentReach + 1
      setCurrentReach(newIndex)
      scrollContainer.current.scrollTo({
        left: newIndex * scrollContainer.current.offsetWidth,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      id="sponsorship"
      className="relative py-[80px] lg:py-[160px] px-6 bg-black text-white overflow-hidden"
    >
      {/* Header */}
      <div className="lg:px-[270px]">
        <h2 className="flex lg:!text-[87px] text-4xl items-center gap-4 text-white mb-8">
          <span className="w-1.5 h-18 bg-[#FB0015]"></span>
          20th year Activation
        </h2>
        <p className="font-normal lg:text-2xl text-sm max-w-[640px] mb-16">
          Let's collaborate to make your brand an unforgettable part of DESIFEST's 20-year milestone.
        </p>
      </div>

      {/* Hero Images */}
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:pl-[200px] gap-y-12 lg:pr-[100px] mb-16 lg:mb-40 lg:h-[70vh]">
        <img loading="lazy" src="./sankofa.png" alt="" className="w-[380px] h-fit flex-none" />
        <img loading="lazy" src="./sponsor.png" alt="" className="w-full lg:w-[80%] h-fit" />
      </div>

      {/* Carousel Section */}
      <div className="flex flex-col lg:flex-row gap-y-16 items-center gap-x-4">
        {/* Left Image */}
        <div className="w-full lg:w-[35%] relative z-50">
          <img
            loading="lazy"
            src="./girls.png"
            alt=""
            className=" lg:absolute lg:translate-x-32 right-0 bottom-0 lg:translate-y-16 w-[90%] lg:w-[520px] h-[auto]"
          />
        </div>

        {/* Carousel Right Side */}
        <div className="w-full lg:w-[65%] lg:px-32 relative">
          <img
            loading="lazy"
            src="./girlsrect1.svg"
            className="absolute left-0 bottom-0 w-full h-full lg:translate-y-20 object-cover lg:h-[450px] z-10"
            alt=""
          />
          <img
            loading="lazy"
            src="./girlsrect2.svg"
            className="absolute right-0 bottom-0 w-full h-full lg:translate-y-20 object-cover lg:h-[450px] z-20"
            alt=""
          />

          {/* Shadcn Carousel (Desktop) */}
          <div className="relative z-30 hidden lg:block">
            <Carousel
              plugins={[plugin.current]}
              opts={{ loop: true, align: 'start' }}
              className="w-full max-w-4xl mx-auto"
              setApi={setCarouselApi}
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="w-full px-5 py-6 lg:pl-0 lg:py-0 lg:pr-24">
                    <p className="uppercase lg:text-2xl text-lg mb-3 font-bold">
                      DIGITAL DISPLAYS
                    </p>
                    <ul className="list-disc list-inside text-sm lg:text-base text-white/75 grid gap-4">
                      <li>
                        Continuous sponsor visibility via on-stage LED walls and outdoor digital screens throughout our 12-hour celebration.
                      </li>
                      <li>
                        Reach over 60,000 engaged attendees and 100,000+ urban passersby at Sankofa Square, maximizing brand exposure.
                      </li>
                      <li>
                        Sponsor messages are also integrated into our livestream broadcasts, expanding your reach to a vibrant digital audience.
                      </li>
                    </ul>
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="w-full px-5 py-6 lg:pl-0 lg:py-0 lg:pr-24">
                    <p className="uppercase text-2xl mb-3 font-bold">
                      Onsite & Interactive Opportunities
                    </p>
                    <ul className="list-disc list-inside text-white/75 grid gap-4">
                      <li>
                        From branded digital content to immersive festival activations, our team works with sponsors to design memorable brand experiences.
                      </li>
                      <li>
                        Options include branded zones, sampling booths, interactive games, and exclusive contests—customized to your marketing goals.
                      </li>
                    </ul>
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="w-full px-5 py-6 lg:pl-0 lg:py-0 lg:pr-24">
                    <p className="uppercase text-2xl mb-3 font-bold">
                      Media Engagement
                    </p>
                    <ul className="list-disc list-inside text-white/75 grid gap-4">
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
                </CarouselItem>
              </CarouselContent>
            </Carousel>

            {/* Desktop Dot Navigation */}
            <div className="flex justify-center gap-2 mt-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => carouselApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    desktopIndex === index ? 'bg-[#FB0015] w-8' : 'bg-white/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Mobile: Horizontal Snap Scroll */}
          <div
            ref={scrollContainer}
            className="lg:hidden relative z-30 overflow-x-scroll snap-x snap-mandatory scrollbar-hide flex"
          >
            <div className="w-full flex-none snap-center px-5 py-6">
              <p className="uppercase text-lg mb-3 font-bold">DIGITAL DISPLAYS</p>
              <ul className="list-disc list-inside text-sm text-white/75 grid gap-4">
                <li>
                  Continuous sponsor visibility via on-stage LED walls and outdoor digital screens throughout our 12-hour celebration.
                </li>
                <li>
                  Reach over 60,000 engaged attendees and 100,000+ urban passersby at Sankofa Square, maximizing brand exposure.
                </li>
                <li>
                  Sponsor messages are also integrated into our livestream broadcasts, expanding your reach to a vibrant digital audience.
                </li>
              </ul>
            </div>

            <div className="w-full flex-none snap-center px-5 py-6">
              <p className="uppercase text-lg mb-3 font-bold">
                Onsite & Interactive Opportunities
              </p>
              <ul className="list-disc list-inside text-sm text-white/75 grid gap-4">
                <li>
                  From branded digital content to immersive festival activations, our team works with sponsors to design memorable brand experiences.
                </li>
                <li>
                  Options include branded zones, sampling booths, interactive games, and exclusive contests—customized to your marketing goals.
                </li>
              </ul>
            </div>

            <div className="w-full flex-none snap-center px-5 py-6">
              <p className="uppercase text-lg mb-3 font-bold">Media Engagement</p>
              <ul className="list-disc list-inside text-sm text-white/75 grid gap-4">
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

      {/* Mobile Buttons */}
      <div className="lg:hidden absolute bottom-22 left-6 z-50 flex gap-4">
        <ButtonLeft
          onClick={handleLeft}
          className={`flex-none size-8 ${
            currentReach !== 0 ? 'bg-accent' : 'bg-[#060608]'
          } flex items-center justify-center text-text`}
        />
        <ButtonRight
          onClick={handleRight}
          className={`flex-none size-8 ${
            currentReach !== 2 ? 'bg-accent' : 'bg-[#060608]'
          } flex items-center justify-center text-text`}
        />
      </div>

      <div className="lg:h-[100px]"></div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}