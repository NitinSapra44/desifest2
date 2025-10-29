"use client"
import { useState, useEffect } from "react"
import Timeline2007 from "./timeline-2007"
import Timeline2012 from "./timeline-2012"
import Timeline2017 from "./timeline-2017"
import Timeline2022 from "./timeline-2022"

export default function Section2() {
	const [activeTimeline, setActiveTimeline] = useState<'2007' | '2012' | '2017' | '2022' | 'default'>('default')
	const [isManualMode, setIsManualMode] = useState(false)

	const handleTimelineChange = (timeline: '2007' | '2012' | '2017' | '2022') => {
		setActiveTimeline(timeline)
		setIsManualMode(true) // User manually selected, disable auto scroll
	}

	// Auto scroll to next section after 2007-2011 completes
	useEffect(() => {
		if (activeTimeline === 'default' && !isManualMode) {
			// Auto scroll to next section after 5 seconds (2007-2011 range)
			const timer = setTimeout(() => {
				// Scroll to next section
				const nextSection = document.querySelector('#story') // Assuming next section has id 'story'
				if (nextSection) {
					nextSection.scrollIntoView({ behavior: 'smooth' })
				}
			}, 5000) // 5 seconds for 2007-2011 range

			return () => clearTimeout(timer)
		}
	}, [activeTimeline, isManualMode])

	return (
		<div className="relative">
			{/* Navigation buttons - always visible */}
			<div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50 flex gap-3 flex-wrap justify-center max-w-5xl px-4">
				<button
					onClick={() => handleTimelineChange('2007')}
					className={`bg-white/20 backdrop-blur-md text-white px-4 py-2 border border-white/40 hover:bg-white/35 hover:border-white/60 transition-all duration-300 font-semibold text-sm rounded-lg shadow-lg hover:shadow-xl ${
						activeTimeline === '2007' ? 'bg-white/35 border-white/60' : ''
					}`}
				>
					2007-2011
				</button>
				<button
					onClick={() => handleTimelineChange('2012')}
					className={`bg-white/20 backdrop-blur-md text-white px-4 py-2 border border-white/40 hover:bg-white/35 hover:border-white/60 transition-all duration-300 font-semibold text-sm rounded-lg shadow-lg hover:shadow-xl ${
						activeTimeline === '2012' ? 'bg-white/35 border-white/60' : ''
					}`}
				>
					2012-2016
				</button>
				<button
					onClick={() => handleTimelineChange('2017')}
					className={`bg-white/20 backdrop-blur-md text-white px-4 py-2 border border-white/40 hover:bg-white/35 hover:border-white/60 transition-all duration-300 font-semibold text-sm rounded-lg shadow-lg hover:shadow-xl ${
						activeTimeline === '2017' ? 'bg-white/35 border-white/60' : ''
					}`}
				>
					2017-2021
				</button>
				<button
					onClick={() => handleTimelineChange('2022')}
					className={`bg-white/20 backdrop-blur-md text-white px-4 py-2 border border-white/40 hover:bg-white/35 hover:border-white/60 transition-all duration-300 font-semibold text-sm rounded-lg shadow-lg hover:shadow-xl ${
						activeTimeline === '2022' ? 'bg-white/35 border-white/60' : ''
					}`}
				>
					2022-2026
				</button>
			</div>

			{/* Render active timeline component */}
			{activeTimeline === 'default' && <Timeline2007 />}
			{activeTimeline === '2007' && <Timeline2007 />}
			{activeTimeline === '2012' && <Timeline2012 />}
			{activeTimeline === '2017' && <Timeline2017 />}
			{activeTimeline === '2022' && <Timeline2022 />}
		</div>
	)
}