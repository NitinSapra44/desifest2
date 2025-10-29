export default function Hero() {
  return (
    <section id="the-2026-event" className="relative pb-24 bg-black ">
        <div className="absolute inset-0 lg:sticky lg:top-[calc(100vh-400px)] z-30 flex items-center lg:items-end justify-center">
            <img src="./hero_text.svg" alt="" className="lg:h-[344px] h-32 w-auto "  />
        </div>
        <div className="relative overflow-hidden bg-black lg:-mt-[344px]">
            <div className="absolute inset-0 z-20 flex items-center justify-center ">
                <img src="./leaf.png" alt="" className="w-[75%] h-auto object-cover lg:-translate-y-28 " />
            </div>
            <div className="absolute top-0 left-0 w-full h-screen z-20 flex justify-between items-end px-16 pb-36">
                <span className="text-xl uppercase font-normal text-white leading-none">[scroll to explore]</span>
                <span className="text-xl uppercase font-normal text-white leading-none">toronto, canada</span>
            </div>
            <div className="hero_gradient absolute inset-0 z-10" />
            <video src="./home.mp4" autoPlay  loop muted playsInline className="w-screen h-[30vh] lg:h-screen  object-cover" />
            <img src="./hero.png" alt="" className="w-screen h-[30vh] lg:h-screen object-cover" />
        </div>
    </section>
  )
}