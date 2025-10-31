export default function Hero() {
  return (
    <section id="the-2026-event" className="relative pb-24 bg-black">
      {/* Sticky Hero Text */}
      <div className="absolute inset-0 lg:sticky lg:top-[calc(100vh-400px)] z-30 flex items-center lg:items-end justify-center">
        <img src="./hero_text.svg" alt="" className="lg:h-[344px] h-32 w-auto" />
      </div>

      {/* Background Section */}
      <div className="relative bg-black lg:-mt-[344px] overflow-visible">
        {/* Leaf Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <img
            src="./leaf.png"
            alt=""
            className="w-[75%] h-auto object-cover lg:-translate-y-28"
          />
        </div>

        {/* Scroll Text (Desktop Only) */}
        <div className="hidden lg:flex absolute top-0 left-0 w-full h-screen z-20 justify-between items-end px-16 pb-36">
          <span className="text-xl uppercase font-normal text-white leading-none">
            [scroll to explore]
          </span>
          <span className="text-xl uppercase font-normal text-white leading-none">
            toronto, canada
          </span>
        </div>

        {/* Gradient & Background */}
        <div className="hero_gradient absolute inset-0 z-10" />
        <video
          src="./home.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-screen h-[30vh] lg:h-screen object-cover"
        />
        <img
          src="./hero.png"
          alt=""
          className="w-screen h-[30vh] lg:h-screen object-cover"
        />

        {/* Buttons (Mobile) */}
        <div className="flex flex-col lg:hidden items-center justify-center mt-8 mb-24 px-6 space-y-4 relative z-30">
          <a
            href="./overview-kit.pdf"
            download
            className="uppercase text-center text-lg font-medium text-text px-6 py-3 bg-[#fc0314] hover:opacity-90 transition rounded-none"
          >
            Download Overview Kit
          </a>

          <a
            href="#contact-form"
            className="uppercase text-center text-lg font-medium text-text px-6 py-3 bg-[#FB0015]/25 border border-white hover:bg-[#FB0015]/40 transition rounded-none"
          >
            Request Full Sponsor Kit
          </a>
        </div>
      </div>
    </section>
  )
}
