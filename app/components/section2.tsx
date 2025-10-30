"use client"
import { useRef } from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export default function Section2() {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    // Timeline data with years
    const years = Array.from({ length: 19 }, (_, i) => 2007 + i)
    
    return (
        <div ref={sectionRef} className="relative py-20 lg:py-32 overflow-hidden">
            {/* Header */}
            <div className="container mx-auto px-6 lg:px-12 mb-16">
                <h1 className="text-white text-5xl lg:text-7xl font-bold mb-4 uppercase tracking-wider">
                    A WALL OF MEMORIES
                </h1>
                <p className="text-white/80 text-xl lg:text-2xl">One Year at a Time</p>
            </div>

            {/* Desktop Grid - 5 columns */}
            <div className="hidden lg:block container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-5 gap-6 lg:gap-8">
                    {years.map((year, i) => (
                        <YearCard key={year} year={year} index={i} />
                    ))}
                </div>
            </div>

            {/* Mobile Horizontal Scroll Grid - 2 columns showing 8 cards at a time */}
            <div className="lg:hidden px-6">
                <ScrollArea className="w-full">
                    <div className="grid grid-cols-2 grid-rows-4 grid-flow-col gap-4 pb-4">
                        {years.map((year, i) => (
                            <div 
                                key={year}
                                className="w-[42vw]"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out forwards ${i * 0.05}s`,
                                    opacity: 0
                                }}
                            >
                                <YearCard year={year} index={i} />
                            </div>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>

            {/* Background */}
            <div className="absolute inset-0 z-[-2] bg-[#9b1207]"></div>
            <img
                loading="lazy"
                src="./section2bg.png"
                className="absolute bottom-0 left-0 z-[-1] w-full opacity-50 blur-[10.6px] mix-blend-color-burn"
                alt=""
            />
            
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    )
}

// Extracted YearCard component for reusability
function YearCard({ year, index }: { year: number; index: number }) {
    return (
        <div className="relative group cursor-pointer h-full">
            {/* Card with hover effect */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-2 hover:shadow-3xl">
                <img
                    src={`./timeline/${year}.png`}
                    loading="lazy"
                    alt={`Year ${year}`}
                    className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                {/* Year label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-3xl lg:text-4xl font-bold drop-shadow-lg">
                        {year}
                    </h3>
                </div>
                {/* Corner accent - top left */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Corner accent - bottom right */}
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {/* Decorative corner fold effect */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-red-900 to-red-950 opacity-50 transform rotate-45 group-hover:scale-150 transition-transform duration-300"></div>
        </div>
    )
}