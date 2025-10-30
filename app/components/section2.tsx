"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Section2() {
	const [currentPage, setCurrentPage] = useState(0)
	const [activeRange, setActiveRange] = useState(0)

	const years = Array.from({ length: 20 }, (_, i) => 2007 + i)
	const yearRanges = [
		{ label: "2007-2010", start: 0, end: 4 },
		{ label: "2011-2014", start: 4, end: 8 },
		{ label: "2015-2018", start: 8, end: 12 },
		{ label: "2019-2022", start: 12, end: 16 },
		{ label: "2023-2026", start: 16, end: 20 },
	]

	const currentRangeYears = years.slice(yearRanges[activeRange].start, yearRanges[activeRange].end)
	const totalPages = Math.ceil(currentRangeYears.length / 4)

	const handlePrevPage = () => setCurrentPage((prev) => Math.max(0, prev - 1))
	const handleNextPage = () => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
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
											“We can’t wait to celebrate our 20th Desifest and mark this milestone on our wall and elevate our journey together!”
										</p>
									</div>
								) : (
									<>
										<img
											src={`./timeline/${year}.png`}
											loading="lazy"
											alt={`Year ${year}`}
											className="w-full h-full object-fill"
											style={{
												WebkitMaskImage: 'url(/MemoryWall.png)',
												WebkitMaskRepeat: 'no-repeat',
												WebkitMaskSize: 'cover',
												maskImage: 'url(/MemoryWall.png)',
												maskRepeat: 'no-repeat',
												maskSize: 'cover',
											}}
										/>
										{/* Overlay */}
										<div
											className="absolute inset-0 pointer-events-none"
											style={{
												background: `radial-gradient(circle at 80% 90%, rgba(134,10,0,0.9) 0%, rgba(134,10,0,0.6) 35%, rgba(134,10,0,0.3) 60%, transparent 75%)`,
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

								<div className="absolute bottom-0 right-0 z-20">
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
				<div className="px-6 mb-8 flex gap-2 overflow-x-auto pb-2">
					{yearRanges.map((range, idx) => (
						<button
							key={idx}
							onClick={() => handleRangeChange(idx)}
							className={`px-2 py-1 rounded border-2 whitespace-nowrap transition-all ${
								activeRange === idx
									? "bg-white/20 border-white text-white text-sm"
									: "bg-transparent border-white/40 text-white/70 text-sm"
							}`}
						>
							{range.label}
						</button>
					))}
				</div>

				{/* Navigation + Grid */}
				<div className="relative px-6 flex flex-col items-center">
					{/* Prev Button */}
					{currentPage > 0 && (
						<button
							onClick={handlePrevPage}
							className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-lg transition-all"
							aria-label="Previous"
						>
							<ChevronLeft size={22} />
						</button>
					)}

					{/* Next Button */}
					{currentPage < totalPages - 1 && (
						<button
							onClick={handleNextPage}
							className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-lg transition-all"
							aria-label="Next"
						>
							<ChevronRight size={22} />
						</button>
					)}

					{/* 2x2 Grid */}
					<div className="grid grid-cols-2 gap-4">
						{getCurrentPageYears().map((year) => (
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
												“We can’t wait to celebrate our 20th Desifest and mark this milestone on our wall and elevate our journey together!”
											</p>
										</div>
									) : (
										<>
											<img
												src={`./timeline/${year}.png`}
												loading="lazy"
												alt={`Year ${year}`}
												className="w-full h-full object-fill"
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
												className="absolute inset-0 pointer-events-none"
												style={{
													background: `radial-gradient(circle at 80% 85%, rgba(134,10,0,0.95) 0%, rgba(134,10,0,0.6) 25%, transparent 50%)`,
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

					{/* Page Indicator */}
					<div className="flex justify-center gap-2 mt-6">
						{Array.from({ length: totalPages }).map((_, idx) => (
							<button
								key={idx}
								onClick={() => setCurrentPage(idx)}
								className={`w-2 h-2 rounded-full transition-all ${
									currentPage === idx ? "bg-white w-6" : "bg-white/40"
								}`}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
