"use client"
import Hero from "@/app/components/hero"
import Mission from "@/app/components/mission"
import Audience from "@/app/components/audience"
import Section2 from "@/app/components/section2"
import Story from "@/app/components/story"
import Details from "@/app/components/details"
import Sponsorship from "@/app/components/sponsorship"
import Engagement from "@/app/components/engagement"
import Investment from "@/app/components/investment"
import Sponsors from "@/app/components/sponsors"
import Contact from "@/app/components/contact"
import Navbar from "@/app/components/navbar"
import { clearScrollTriggers, initScrollTriggers } from "@/app/lib/scroll-manager"
import { useEffect } from "react"

export default function Home() {
	// const [activeHero, setActiveHero] = useState('the-2026-event')


	useEffect(() => {
		if (window.innerWidth < 1024) return;
		// initialize after DOM is ready
		requestAnimationFrame(() => initScrollTriggers());
	
		// cleanup on unmount (useful for route transitions)
		return () => clearScrollTriggers();
	  }, []);

	return (
		<>
			{/* logo */}
			<div className="fixed top-0 left-0 p-8 z-50">
				<img src="./logo.svg" alt="" className="hidden lg:block mb-6" />

				<Navbar />
			</div>

			<div className="fixed top-0 right-0 p-8 z-[999] lg:block hidden">

				<a href="./overview-kit.pdf" download className="uppercase block mb-3 text-2xl font-medium text-text px-6 py-3 bg-accent">
					Download overview kit
				</a>

				<a
					href="#contact-form"
					className="uppercase block w-fit ml-auto text-2xl font-medium text-text px-6 py-3 bg-[#FB0015]/25 border border-white"
				>
					request full sponsor kit
				</a>
			</div>

			{/* left shadow */}
			<img
				src="./left-shadow.svg"
				alt=""
				className=" lg:block hidden fixed top-0 left-0 w-[420px] h-auto object-cover z-40 pointer-events-none  "
			/>

			{/* right shadow */}
			<img
				src="./right-shadow.svg"
				alt=""
				className=" lg:block hidden fixed top-0 right-0 w-[420px] h-auto object-cover z-40 pointer-events-none"
			/>

			<Hero />

			{/* section 2 */}
			<Section2 />

			{/* story */}
			<Story />

			{/* mission */}
			<Mission />

			{/* audience */}
			<Audience />

			{/* details */}
			<Details />

			<Sponsorship />

			<Engagement />

			<Investment />

			<Sponsors />

			<Contact />
		</>
	)
}
