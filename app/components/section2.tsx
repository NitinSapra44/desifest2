"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Section2() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [touchStart, setTouchStart] = useState(0)
	const [touchEnd, setTouchEnd] = useState(0)

	const years = Array.from({ length: 20 }, (_, i) => 2007 + i)
	const yearRanges = [
		{ label: "2007-2010", start: 0, end: 4 },
		{ label: "2011-2014", start: 4, end: 8 },
		{ label: "2015-2018", start: 8, end: 12 },
		{ label: "2019-2022", start: 12, end: 16 },
		{ label: "2023-2026", start: 16, end: 20 },
	]

	const currentRangeYears = years.slice(yearRanges[currentIndex].start, yearRanges[currentIndex].end)

	const handlePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(prev => prev - 1)
		}
	}
	
	const handleNext = () => {
		if (currentIndex < yearRanges.length - 1) {
			setCurrentIndex(prev => prev + 1)
		}
	}

	const handleRangeChange = (index) => {
		setCurrentIndex(index)
	}

	// Swipe handlers
	const handleTouchStart = (e) => {
		setTouchStart(e.targetTouches[0].clientX)
	}

	const handleTouchMove = (e) => {
		setTouchEnd(e.targetTouches[0].clientX)
	}

	const handleTouchEnd = () => {
		if (!touchStart || !touchEnd) return
		
		const distance = touchStart - touchEnd
		const isLeftSwipe = distance > 50
		const isRightSwipe = distance < -50

		if (isLeftSwipe && currentIndex < yearRanges.length - 1) {
			handleNext()
		}
		if (isRightSwipe && currentIndex > 0) {
			handlePrev()
		}

		setTouchStart(0)
		setTouchEnd(0)
	}

	return (
		<div className="relative min-h-screen py-12 lg:py-20 overflow-hidden">
			{/* ===== Background Layers ===== */}
			<div className="absolute inset-0 z-[-2] bg-[#860A00]" />
			<img
				src="/section2bg.png"
				alt="Section background"
				loading="lazy"
				className="absolute bottom-0 left-0 z-[-1] w-full lg:h-[600px] h-[300px] object-cover opacity-50 blur-[10px] mix-blend-color-burn"
			/>

			{/* ===== Header ===== */}
			<div className="container mx-auto px-6 lg:px-12 mb-10 lg:mb-16">
				<h1 className="text-white text-4xl lg:text-6xl font-bold mb-2 tracking-wider uppercase">
					Wall of Memories
				</h1>
				<p className="text-white/80 text-lg lg:text-2xl">One Year at a Time!</p>
			</div>

			{/* ===== Desktop Grid ===== */}
			<div className="hidden lg:block container mx-auto px-6 lg:px-12">
				<div className="grid grid-cols-5 gap-6 xl:gap-8">
					{years.map((year) => (
						<div key={year} className="relative group">
							<div className="w-[220px] h-[220px] relative">
								{/* 2026 Special */}
								{year === 2026 ? (
									<div
										className="w-full h-full flex flex-col items-center justify-center text-white p-4 text-center"
										style={{
											WebkitMaskImage: 'url(/MemoryWall.png)',
											WebkitMaskRepeat: 'no-repeat',
											WebkitMaskSize: 'cover',
											maskImage: 'url(/MemoryWall.png)',
											maskRepeat: 'no-repeat',
											maskSize: 'cover',
											background:
												'linear-gradient(135deg, rgba(134,10,0,0.9), rgba(155,18,7,0.7))',
										}}
									>
										<p className="text-white/80 text-base leading-snug">
											"We can't wait to celebrate our 20th Desifest and mark this milestone on our wall and elevate our journey together!"
										</p>
									</div>
								) : (
									<>
										<img
											src={`./timeline/${year}.png`}
											loading="lazy"
											alt={`Year ${year}`}
											className="w-full h-full object-cover"
											style={{
												WebkitMaskImage: 'url(/MemoryWall.png)',
												WebkitMaskRepeat: 'no-repeat',
												WebkitMaskSize: 'cover',
												maskImage: 'url(/MemoryWall.png)',
												maskRepeat: 'no-repeat',
												maskSize: 'cover',
											}}
										/>
										<div
											className="absolute inset-0"
											style={{
												background: `linear-gradient(to bottom right, transparent 20%, #6C070B 100%)`,
												WebkitMaskImage: 'url(/MemoryWall.png)',
												WebkitMaskRepeat: 'no-repeat',
												WebkitMaskSize: 'cover',
												maskImage: 'url(/MemoryWall.png)',
												maskRepeat: 'no-repeat',
												maskSize: 'cover',
											}}
										/>
									</>
								)}

								<img
									src="/cutout.png"
									alt="Overlay or sticker"
									className="absolute -bottom-2 left-0 w-[70px] h-[70px] object-contain"
								/>

								<div className="absolute bottom-0 right-2 z-20">
									<h3 className="text-white text-3xl font-bold">{year}</h3>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* ===== Mobile Version ===== */}
			<div className="lg:hidden">
				{/* Range buttons */}
				<div className="px-2 mb-8 flex gap-1 overflow-x-auto pb-2">
					{yearRanges.map((range, idx) => (
						<button
							key={idx}
							onClick={() => handleRangeChange(idx)}
							className={`px-1 py-2 rounded border-2 whitespace-nowrap transition-all font-medium ${
								currentIndex === idx
									? "bg-white/20 border-white text-white text-sm"
									: "bg-transparent border-white/40 text-white/70 text-sm"
							}`}
						>
							{range.label}
						</button>
					))}
				</div>

				{/* Navigation + Grid */}
				<div 
					className="relative px-6 flex flex-col items-center"
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
				>
					{/* Prev Button */}
					<button
						onClick={handlePrev}
						disabled={currentIndex === 0}
						className={`absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-none transition-all ${
							currentIndex === 0 
								? 'bg-black/30 text-white/30 cursor-not-allowed' 
								: 'bg-black/60 hover:bg-black/80 text-white'
						}`}
						aria-label="Previous"
					>
						<ChevronLeft size={28} strokeWidth={3} />
					</button>

					{/* Next Button */}
					<button
						onClick={handleNext}
						disabled={currentIndex >= yearRanges.length - 1}
						className={`absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-none transition-all ${
							currentIndex >= yearRanges.length - 1 
								? 'bg-black/30 text-white/30 cursor-not-allowed' 
								: 'bg-black/60 hover:bg-black/80 text-white'
						}`}
						aria-label="Next"
					>
						<ChevronRight size={28} strokeWidth={3} />
					</button>

					{/* 2x2 Grid */}
					<div className="grid grid-cols-2 gap-4">
						{currentRangeYears.map((year) => (
							<div key={year} className="relative">
								<div className="relative w-[150px] h-[150px] flex-shrink-0">
									{year === 2026 ? (
										<div
											className="w-full h-full flex flex-col items-center justify-center text-white p-3 text-center"
											style={{
												WebkitMaskImage: 'url(/MemoryWall.png)',
												WebkitMaskRepeat: 'no-repeat',
												WebkitMaskSize: 'cover',
												maskImage: 'url(/MemoryWall.png)',
												maskRepeat: 'no-repeat',
												maskSize: 'cover',
												background:
													'linear-gradient(135deg, rgba(134,10,0,0.9), rgba(155,18,7,0.7))',
											}}
										>
											<p className="text-white/80 text-xs leading-snug">
												"We can't wait to celebrate our 20th Desifest and mark this milestone on our wall and elevate our journey together!"
											</p>
										</div>
									) : (
										<>
											<img
												src={`./timeline/${year}.png`}
												loading="lazy"
												alt={`Year ${year}`}
												className="w-full h-full object-cover"
												style={{
													WebkitMaskImage: 'url(/MemoryWall.png)',
													WebkitMaskRepeat: 'no-repeat',
													WebkitMaskSize: 'cover',
													maskImage: 'url(/MemoryWall.png)',
													maskRepeat: 'no-repeat',
													maskSize: 'cover',
												}}
											/>
											<div
												className="absolute inset-0"
												style={{
													background: `linear-gradient(to bottom right, transparent 10%, #6C070B 100%)`,
													WebkitMaskImage: 'url(/MemoryWall.png)',
													WebkitMaskRepeat: 'no-repeat',
													WebkitMaskSize: 'cover',
													maskImage: 'url(/MemoryWall.png)',
													maskRepeat: 'no-repeat',
													maskSize: 'cover',
												}}
											/>
										</>
									)}

									<img
										src="/cutout.png"
										alt="Overlay or sticker"
										className="absolute bottom-0 left-0 w-[45px] h-[45px] object-contain translate-y-[10%]"
									/>

									<div className="absolute bottom-1 right-1 z-20">
										<h3 className="text-white text-lg font-bold leading-none">
											{year}
										</h3>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}