"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Timeline2007() {
	const [currentPage, setCurrentPage] = useState(0)
	const [activeRange, setActiveRange] = useState(0)

	const years = Array.from({ length: 20 }, (_, i) => 2007 + i)
	const yearRanges = [
		{ label: "2007-2010", start: 0, end: 4 },
		{ label: "2011-2014", start: 4, end: 8 },
		{ label: "2015-2018", start: 8, end: 12 },
		{ label: "2019-2022", start: 12, end: 16 },
		{ label: "2023-2026", start: 16, end: 20 }
	]

	const currentRangeYears = years.slice(yearRanges[activeRange].start, yearRanges[activeRange].end)
	const totalPages = Math.ceil(currentRangeYears.length / 4)

	const handlePrevPage = () => {
		setCurrentPage(prev => Math.max(0, prev - 1))
	}

	const handleNextPage = () => {
		setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))
	}

	const handleRangeChange = (index: number) => {
		setActiveRange(index)
		setCurrentPage(0)
	}

	const getCurrentPageYears = () => {
		const startIdx = currentPage * 4
		return currentRangeYears.slice(startIdx, startIdx + 4)
	}

	return (
		<div className="relative min-h-screen py-12 lg:py-20 overflow-hidden">
			{/* Header */}
			<div className="container mx-auto px-6 lg:px-12 mb-8 lg:mb-12">
				<h1 className="text-white text-4xl lg:text-7xl font-bold mb-2 uppercase tracking-wider">
					WALL OF MEMORIES
				</h1>
				<p className="text-white/80 text-lg lg:text-2xl">ONE YEAR AT A TIME!</p>
			</div>

			{/* Desktop Grid - Show all years */}
			<div className="hidden lg:block container mx-auto px-6 lg:px-12">
				<div className="grid grid-cols-5 gap-6 xl:gap-8">
					{years.map((year, idx) => (
						<div key={year} className="relative group">
							{/* Image Container with Triangle Speech Bubble */}
							<div className="relative aspect-[4/3] overflow-visible">
								<img
									src={`./timeline/${year}.png`}
									loading="lazy"
									alt={`Year ${year}`}
									className="w-full h-full object-cover rounded-lg shadow-2xl transition-transform duration-300 group-hover:scale-105"
								/>
								{/* Dark Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-lg group-hover:from-black/60 transition-all duration-300"></div>
								
								{/* Triangle Speech Bubble - Bottom Left */}
								<div className="absolute -bottom-3 left-6 w-0 h-0 border-l-[35px] border-l-transparent border-r-[35px] border-r-transparent border-t-[45px] border-t-yellow-400 drop-shadow-lg"></div>
								
								{/* Year Label */}
								<div className="absolute bottom-3 left-3 right-3 z-10">
									<h3 className="text-white text-4xl xl:text-5xl font-bold drop-shadow-2xl">
										{year}
									</h3>
								</div>

								{/* Hover Effect - Corner Accents */}
								<div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Mobile Version with Year Range Buttons */}
			<div className="lg:hidden">
				{/* Year Range Buttons */}
				<div className="px-6 mb-8 flex gap-2 overflow-x-auto pb-2">
					{yearRanges.map((range, idx) => (
						<button
							key={idx}
							onClick={() => handleRangeChange(idx)}
							className={`px-4 py-2 rounded border-2 whitespace-nowrap transition-all ${
								activeRange === idx
									? 'bg-white/20 border-white text-white'
									: 'bg-transparent border-white/40 text-white/70'
							}`}
						>
							{range.label}
						</button>
					))}
				</div>

				{/* Grid Container with Navigation */}
				<div className="relative px-6">
					{/* Navigation Arrows */}
					{currentPage > 0 && (
						<button
							onClick={handlePrevPage}
							className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-r-lg transition-all"
							aria-label="Previous page"
						>
							<ChevronLeft size={24} />
						</button>
					)}
					
					{currentPage < totalPages - 1 && (
						<button
							onClick={handleNextPage}
							className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-3 rounded-l-lg transition-all"
							aria-label="Next page"
						>
							<ChevronRight size={24} />
						</button>
					)}

					{/* 2x2 Grid */}
					<div className="grid grid-cols-2 gap-4">
						{getCurrentPageYears().map((year) => (
							<div key={year} className="relative">
								{/* Image Container with Triangle Speech Bubble */}
								<div className="relative aspect-[4/3] overflow-visible">
									<img
										src={`./timeline/${year}.png`}
										loading="lazy"
										alt={`Year ${year}`}
										className="w-full h-full object-cover rounded-lg shadow-xl"
									/>
									{/* Dark Overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-lg"></div>
									
									{/* Triangle Speech Bubble - Bottom Left */}
									<div className="absolute -bottom-2 left-4 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[40px] border-t-yellow-400"></div>
									
									{/* Year Label */}
									<div className="absolute bottom-2 left-2 right-2 z-10">
										<h3 className="text-white text-3xl font-bold drop-shadow-lg">
											{year}
										</h3>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Page Indicator */}
					<div className="flex justify-center gap-2 mt-6">
						{Array.from({ length: totalPages }).map((_, idx) => (
							<button
								key={idx}
								onClick={() => setCurrentPage(idx)}
								className={`w-2 h-2 rounded-full transition-all ${
									currentPage === idx ? 'bg-white w-6' : 'bg-white/40'
								}`}
								aria-label={`Go to page ${idx + 1}`}
							/>
						))}
					</div>
				</div>
			</div>

			{/* Background */}
			<div className="absolute inset-0 z-[-2] bg-[#9b1207]"></div>
			<img
				loading="lazy"
				src="./section2bg.png"
				className="absolute bottom-0 left-0 z-[-1] w-full opacity-50 blur-[10.6px] mix-blend-color-burn"
				alt=""
			/>
		</div>
	)
}